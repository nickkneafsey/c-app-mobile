import React, { Component } from 'react'
import Swiper from 'react-native-swiper'
import { Alert, View, ScrollView } from 'react-native'
import { Text, Button } from 'react-native-elements'
import _ from 'lodash'

import QuestionSwipeCard from './QuestionSwipeCard'

class QuestionSwipeDeck extends Component {
  constructor (props) {
    super(props)

    this.state = { answers: {}, showEndButton: false }
  }

  onAnswerPress (answer, questionObject) {
    const { id, correctAnswers } = questionObject
    let answers = this.state.answers[id] || []

    if (correctAnswers.length === 1) {
      answers = [ answer ]
    } else {
      if (answers.indexOf(answer) !== -1) {
        // Answer already in array => remove from array
        _.pull(answers, answer)
      } else if (answers.length < correctAnswers.length) {
        // Array not full => add to array
        answers.push(answer)
      } else if (answers.length >= correctAnswers.length) {
        // Array already full and answer not in array => alert
        Alert.alert(
          'Too Many Answers',
          'Please unselect an answer before selecting another',
          [
            {text: 'OK', onPress: () => console.log('OK Pressed')}
          ],
          { cancelable: true }
        )
      }
    }

    this.setState({ answers: { ...this.state.answers, [id]: answers } })
  }

  renderEndButton () {
    const { navigation } = this.props
    const { answers } = this.state
    const questions = navigation.state.params.questions
    if (this.state.showEndButton || questions.length === 1) {
      return (
        <Button
          buttonStyle={{ marginBottom: 50 }}
          title={'Submit Answers'}
          color={'black'}
          backgroundColor={'white'}
          onPress={navigation.navigate.bind(this, 'Summary', { answers, questions })}
        />
      )
    }
  }

  render () {
    const { navigation } = this.props
    if (navigation.state.params.questions.length === 0) {
      return <Text>No Questions available at this time</Text>
    }

    return (
      <Swiper
        loop={false}
        showButtons
        onIndexChanged={(index) => {
          if (index === navigation.state.params.questions.length - 1) {
            this.setState({ showEndButton: true })
          } else {
            this.setState({ showEndButton: false })
          }
        }}
        >
        { navigation.state.params.questions.map((q) => {
          return (
            <View style={{flex: 1}} key={q.id}>
              <ScrollView>
                <QuestionSwipeCard
                  key={q.id}
                  questionObject={q}
                  onAnswerPress={this.onAnswerPress.bind(this)}
                  selectedAnswers={this.state.answers[q.id] || []}
                />
              </ScrollView>
              {this.renderEndButton()}
            </View>
          )
        })}
      </Swiper>
    )
  }
}

export default QuestionSwipeDeck
