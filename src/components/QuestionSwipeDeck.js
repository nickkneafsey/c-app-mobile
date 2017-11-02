import React, { Component } from 'react'
import Swiper from 'react-native-swiper'
import { Alert, View, ScrollView } from 'react-native'
import { Text, Button } from 'react-native-elements'
import _ from 'lodash'

import QuestionSwipeCard from './QuestionSwipeCard'


class QuestionSwipeDeck extends Component {
  constructor(props) {
    super(props)

    this.state = { answers: {}, showEndButton: false }
  }

  onAnswerPress(answer, questionObject) {
    const { id, correctAnswers } = questionObject
    console.log(id, answer)
    let answers = this.state.answers[id] || []

    if (correctAnswers.length === 1) {
      answers = [ answer ]
    } else {
      // Answer already in array => remove from array
      if (answers.indexOf(answer) !== -1) {
        answers = _.remove(answers, (a) => { return a === answer })
      }

      // Array not full => add to array
       else if (answers.length < correctAnswers.length) {
        answers.push(answer)
      }


      // Array already full and answer not in array => alert
      else if (answers.length >= correctAnswers.length) {
        Alert.alert(
          'Too Many Answers',
          'Please unselect an answer before selecting another',
          [
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ],
          { cancelable: true }
        )
      }
    }

    this.setState({ answers: { ...this.state.answers, [id]: answers  }})
  }

  renderEndButton() {
    if (this.state.showEndButton) {
      return (
        <Button
          buttonStyle={{ bottom: 50 }}
          title={'Submit Answers'}
        />
      )
    }
  }

  render() {
    const { navigation } = this.props
    if (this.props.navigation.state.params.questions.length === 0) {
      return <Text>No Questions available at this time</Text>
    }

    return (
      <Swiper
        loop={false}
        showButtons={true}
        onIndexChanged={(index) => {
          if (index === navigation.state.params.questions.length - 1) {
            this.setState({ showEndButton: true })
          } else {
            this.setState({ showEndButton: false })
          }
        }}
        >
        { this.props.navigation.state.params.questions.map((q) => {
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
