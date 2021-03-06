import React, { Component } from 'react'
import { View } from 'react-native'
import { Card, Text, Button } from 'react-native-elements'

// this is some of the worst js ever written

class QuestionSwipeCard extends Component {
  renderAnswers (questionObject, selectedAnswers) {
    return questionObject.answers.map((answer) => {
      let selected = selectedAnswers.indexOf(answer) !== -1
      return (
        <Button
          containerViewStyle={{ marginBottom: 1 }}
          large
          key={answer}
          onPress={() => this.props.onAnswerPress(answer, questionObject)}
          backgroundColor={selected ? '#ec912d' : 'white'}
          color={selected ? 'white' : 'black'}
          title={answer}
          textStyle={{ textAlign: 'center' }}
         />
      )
    })
  }

  render () {
    const { questionObject, selectedAnswers } = this.props
    return (
      <View>
        <Card containerStyle={{ marginBottom: 5 }}>
          <Text style={{ fontSize: 20 }}>{questionObject.text}</Text>
        </Card>
        { this.renderAnswers(questionObject, selectedAnswers)}
      </View>
    )
  }
}

export default QuestionSwipeCard
