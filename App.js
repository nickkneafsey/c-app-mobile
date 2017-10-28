'use strict'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-elements'
import { StackNavigator } from 'react-navigation'

import ApolloClient, { createNetworkInterface } from 'apollo-client'
import { ApolloProvider } from 'react-apollo'
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import ReduxThunk from 'redux-thunk';
import ReduxPromise from 'redux-promise'

import AuthReducer from './src/reducers/AuthReducer'

import HomeScreen from './src/components/HomeScreen'
import ServicesScreen from './src/components/ServicesScreen'
import ServiceScreen from './src/components/ServiceScreen'


import { getTokenFromStorage } from './src/utilities/Auth'

// Network Interface stuff
const networkInterface = createNetworkInterface({
  uri: 'https://l9poitcws4.execute-api.us-east-1.amazonaws.com/prod/graphql'
})

networkInterface.use([{
  applyMiddleware(req, next) {
    if (!req.options.headers) {
      req.options.headers = {}  // Create the header object if needed.
    }

    getTokenFromStorage().then((token) => {
      req.options.headers.authorization = token ? `${token}` : null;
      console.log("Token for network interface", token)
      next()
    })
  }
}])


// Create Apollo client with network interface
const client = new ApolloClient({
  networkInterface
})

// Reducers
const reducers = combineReducers({
  auth: AuthReducer,
  apollo: client.reducer()
})

// React Navigation
const AppNavigator = StackNavigator({
  Home: { screen: HomeScreen },
  Service: { screen: ServiceScreen },
  Services: { screen: ServicesScreen },
})

// App
export default class App extends React.Component {
  render () {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk, ReduxPromise, client.middleware()))
    return (
      <ApolloProvider client={client} store={store}>
        <AppNavigator />
      </ApolloProvider>
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
