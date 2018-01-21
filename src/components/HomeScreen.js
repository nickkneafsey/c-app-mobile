import React, { Component } from 'react'
import { Card, Button, Text, PricingCard } from 'react-native-elements'
import { View, StatusBar, Image } from 'react-native'

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Welcome'
  }

  componentWillMount() {
    // This is a hack
    StatusBar.setBarStyle('dark-content')
  }

  render () {
    const { navigation } = this.props
    return (
      <View style={{
        flex: 1,
        top: -70,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <PricingCard
          color='#ec912d'
          title='AWS Developer Associate Exam Questions'
          price='Pass the Exam!'
          info={[]}
          button={{
            title: 'View Questions by Service',
            icon: 'cloud',
          }}
          onButtonPress={ () => navigation.navigate('Services') }
          containerStyle={{
            paddingTop: 20
          }}
        />
        <Image
          source={{ uri: 'https://s3.amazonaws.com/aws-icons-woo/powered-by-aws.png' }}
          style={{ height: 70, width: 130, resizeMode: 'contain' }}
        />
      </View>
    )
  }
}

export default HomeScreen
