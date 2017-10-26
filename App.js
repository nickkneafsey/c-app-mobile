import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-elements'
import { StackNavigator } from 'react-navigation'

import { Provider } from  'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import ReduxPromise from 'redux-promise'
import reducers from './src/reducers';

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
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk, ReduxPromise))
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
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
