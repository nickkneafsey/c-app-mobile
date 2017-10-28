import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import { Card, Text } from 'react-native-elements'
import fetchQuestionsByService from '../queries/fetchQuestionsByService'


class ServiceScreen extends Component {
  static navigationOptions = {
    title: 'Service'
  }

  render() {
    console.log("data", this.props.data)
    const { data } = this.props
    let totalQuestions = 0
    if(data && data.questions) { totalQuestions = data.questions.length }
    return (
      <Card>
        <Text>test</Text>
        <Text>{this.props.navigation.state.params.service}</Text>
        <Text>Total Questions: {totalQuestions}</Text>
      </Card>
    )
  }
}

export default graphql(fetchQuestionsByService, {
  options: (props) => {
    return { variables: { service: props.navigation.state.params.service }}
  }
})(ServiceScreen)
