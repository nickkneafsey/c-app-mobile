import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ScrollView } from 'react-native'
import { Card, Text, Icon, Button } from 'react-native-elements'
import { HeaderBackButton, NavigationActions } from 'react-navigation'
import _ from 'lodash'

import QuestionSummary from './QuestionSummary'


class SummaryScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    console.log("navv", navigation.state)
    headerLeft: (
      <HeaderBackButton onPress={() => { navigation.goBack({routeName: 'Services'}) }} />
    )
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
      // const newQuestion = { ...question, userAnswers: answers[id]}
      let newQuestions = this.state.questions
      newQuestions[index] = { ...question, userAnswers: answers[id] }

      this.setState({ questions: newQuestions })

      if (_.difference(correctAnswers, answers[id]).length === 0) {
        totalCorrectAnswers += 1
      }
    })

    this.setState({
      score: (totalCorrectAnswers / numberOfQuestions) * 100,
      scoreString: `${totalCorrectAnswers} out of ${numberOfQuestions}`
    })
    // TODO set this is async storage later
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
