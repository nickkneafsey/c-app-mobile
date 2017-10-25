import React, { Component } from 'react'
import { Card, Text } from 'react-native-elements'

class ServiceScreen extends Component {
  static navigationOptions = {
    title: 'Service'
  }

  componentWillMount() {
    // fetch questions here
  }

  render() {
    return (
      <Card>
        <Text>test</Text>
        <Text>{this.props.navigation.state.params.service}</Text>
      </Card>
    )
  }
}

export default ServiceScreen
