import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import { View } from 'react-native'
import { Card, Text, Button } from 'react-native-elements'
import _ from 'lodash'

import fetchQuestionsByService from '../queries/fetchQuestionsByService'
import services from '../utilities/services'
import Storage from '../utilities/Storage'


class ServiceScreen extends Component {
  constructor(props) {
    super(props)

    this.state = { highScore: 0 }
  }

  componentWillMount() {
    Storage.load({
      key: `${this.props.navigation.state.params.service}HighScore`
    }).then(data => {
      console.log('dddd', data)
      this.setState({ highScore: data })
    })
  }

  static navigationOptions = ({ navigation }) => {
    const service =  _.find(services, { 'key': navigation.state.params.service })
    return { title: service.value }
  }

  render() {
    const { data, navigation } = this.props
    const questions = data.questions ? data.questions : []
    const service =  _.find(services, { 'key': navigation.state.params.service });
    return (
      <Card>
        <Text h3>{service.value}</Text>
        <View>
          <Text></Text>
          <Text>Total Questions: {questions.length}</Text>
        <Text>Your best score: {this.state.highScore}%</Text>
          <Text></Text>
          <Button
            onPress={() => navigation.navigate('Questions', { questions })}
            title={'Start Answering Questions'}
            color={'white'}
            backgroundColor={'#ec912d'}
          />
        </View>
      </Card>
    )
  }
}

export default graphql(fetchQuestionsByService, {
  options: (props) => {
    return { variables: { service: props.navigation.state.params.service }}
  }
})(ServiceScreen)
