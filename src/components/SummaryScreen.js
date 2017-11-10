import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ScrollView } from 'react-native'
import { Card, Text, Icon, Button } from 'react-native-elements'
import { HeaderBackButton, NavigationActions } from 'react-navigation'
import _ from 'lodash'

import Storage from '../utilities/Storage'
import QuestionSummary from './QuestionSummary'


class SummaryScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: (
        <HeaderBackButton onPress={() => navigation.goBack()} />
      )
    }
  }

  constructor (props) {
    super(props)

    this.state = {
      score: 0,
      scoreString: '',
      questions: []
    }
  }

  componentWillMount () {
    this.evaluateTest()
  }

  evaluateTest () {
    // TODO make this less garbage
    const { questions, answers } = this.props.navigation.state.params
    this.setState({ questions })

    const numberOfQuestions = questions.length
    let totalCorrectAnswers = 0

    questions.forEach((question, index) => {
      const { id, correctAnswers } = question
      let newQuestions = this.state.questions
      newQuestions[index] = { ...question, userAnswers: answers[id] }

      this.setState({ questions: newQuestions })

      if (_.difference(correctAnswers, answers[id]).length === 0) {
        totalCorrectAnswers += 1
      }
    })

    const score = _.toInteger((totalCorrectAnswers / numberOfQuestions) * 100)
    this.checkForHighScore(score)

    this.setState({
      score,
      scoreString: `${totalCorrectAnswers} out of ${numberOfQuestions}`
    })
    // TODO set this is async storage later
  }

  checkForHighScore(score) {
    Storage.load({
      key: `${this.props.service}HighScore`
    }).then(data => {
      console.log("DATAAA", data)
      if (score > data) {
        Storage.save({
          key: `${this.props.service}HighScore`,
          data: score
        })
      }
    }).catch(err => {
      console.log(err.message)
      switch (err.name) {
        case 'NotFoundError':
          console.log('Token not found error')
          Storage.save({
            key: `${this.props.service}HighScore`,
            data: score
          })
          break
      }
    })
  }

  render () {
    return (
      <ScrollView>
        <Card>
          <Text>{this.props.service}</Text>
          <Text>{this.state.score}%</Text>
          <Text>{this.state.scoreString}</Text>
        </Card>
        <QuestionSummary questions={this.state.questions} />
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    service: state.service.selectedService
  }
}

export default connect(mapStateToProps, null)(SummaryScreen)
