import React, { Component } from 'react'
import { Card, Button, Text, PricingCard } from 'react-native-elements'

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Welcome'
  }

  render () {
    const { navigation } = this.props
    return (
      <PricingCard
        color='#ec912d'
        title='AWS Developer Associate Exam Questions'
        price='Ace the exam'
        info={['The number one exam prep guide of all time', 'Powered by AWS']}
        button={{
          title: 'View Questions by Service',
          icon: 'cloud',
        }}
        onButtonPress={ () => navigation.navigate('Services') }
      />
    )
  }
}

export default HomeScreen
