import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-elements'
import { StackNavigator } from 'react-navigation'

import HomeScreen from './src/components/HomeScreen'
import ServicesScreen from './src/components/ServicesScreen'
import ServiceScreen from './src/components/ServiceScreen'

const AppNavigator = StackNavigator({
  Home: { screen: HomeScreen },
  Service: { screen: ServiceScreen },
  Services: { screen: ServicesScreen },
})

export default class App extends React.Component {
  render () {
    return (
      <AppNavigator />

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
