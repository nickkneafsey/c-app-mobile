import React, { Component } from 'react'
import { Card, Button, Text, PricingCard } from 'react-native-elements'
import { View } from 'react-native'

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Welcome'
  }

  render () {
    const { navigation } = this.props
    return (
      <View style={{
        flex: 1,
        top: -80,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <PricingCard
          color='#ec912d'
          title='AWS Developer Associate Exam Questions'
          price='Pass the Exam!'
          info={['Powered by AWS']}
          button={{
            title: 'View Questions by Service',
            icon: 'cloud',
          }}
          onButtonPress={ () => navigation.navigate('Services') }
          containerStyle={{
            paddingTop: 20
          }}
        />
      </View>
    )
  }
}

export default HomeScreen
