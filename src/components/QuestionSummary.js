import React, { Component } from 'react'
import { View } from 'react-native'
import { List, ListItem, Card, Text } from 'react-native-elements'
import _ from 'lodash'

class QuestionSummary extends Component {
  determineAnswerIcon(question, answer) {
    // not-interested check arrow-long-right
    let icon = { name: null, color: null }
    const userChosenAnswer = _.includes(question.userAnswers, answer)
    const correctAnswer = _.includes(question.correctAnswers, answer)

    if (userChosenAnswer && correctAnswer) { icon = { name: 'check', color: 'green' } }
    if (userChosenAnswer && !correctAnswer) { icon = { name: 'not-interested', color: 'red' } }
    if (!userChosenAnswer && correctAnswer) { icon = { name: 'keyboard-arrow-right', color: 'blue' } }

    return icon
  }

  renderQuestions() {
    return this.props.questions.map((question) => {
      return (
        <Card key={question.id}>
          <Text>{question.text}</Text>
          <List>
            { question.answers.map((answer) => {
              console.log(question)
              let icon = this.determineAnswerIcon(question, answer)
              return (
                <ListItem
                  leftIcon={icon}
                  key={answer}
                  title={answer}
                  hideChevron
                />
              )
            })}
          </List>
        </Card>
      )
    })
  }


  render() {
    return (
      <View>
        { this.renderQuestions() }
      </View>
    )
  }
}

export default QuestionSummary
