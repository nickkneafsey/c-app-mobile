'use strict'
import React from 'react'
import { Provider } from 'react-redux'
import { StatusBar, Platform } from 'react-native'
import { StackNavigator } from 'react-navigation'

import ApolloClient from 'apollo-client'
import { ApolloProvider } from 'react-apollo'
import { createHttpLink } from 'apollo-link-http'
import { ApolloLink } from 'apollo-link'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import ReduxThunk from 'redux-thunk'
import ReduxPromise from 'redux-promise'

import { ServiceReducer } from './src/reducers'

import HomeScreen from './src/components/HomeScreen'
import ServicesScreen from './src/components/ServicesScreen'
import ServiceScreen from './src/components/ServiceScreen'
import QuestionSwipeDeck from './src/components/QuestionSwipeDeck'
import SummaryScreen from './src/components/SummaryScreen'

import { getTokenFromStorage } from './src/utilities/Auth'

const httpLink = createHttpLink({
  uri: 'https://l9poitcws4.execute-api.us-east-1.amazonaws.com/prod/graphql'
})
const middlewareLink = new ApolloLink((operation, forward) => {
  operation.setContext({
    headers: {
      authorization: localStorage.getItem('token') || null
    }
  })
  return forward(operation)
})

// Create Apollo client with network interface
let client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})

// Reducers
const reducers = combineReducers({
  service: ServiceReducer
  // apollo: client.reducer()
})

// React Navigation
const AppNavigator = StackNavigator({
  Home: { screen: HomeScreen },
  Service: { screen: ServiceScreen },
  Services: { screen: ServicesScreen },
  Questions: { screen: QuestionSwipeDeck },
  Summary: { screen: SummaryScreen }
})

// App
export default class App extends React.Component {
  render () {
    const store = createStore(
      reducers,
      {},
      applyMiddleware(ReduxThunk, ReduxPromise)
    )
    return (
      <Provider store={store}>
        <ApolloProvider client={client}>
          <AppNavigator
            onNavigationStateChange={() =>
              Platform.OS === 'ios'
                ? StatusBar.setBarStyle('dark-content')
                : StatusBar.setHidden(true)
            }
          />
        </ApolloProvider>
      </Provider>
    )
  }
}
