import React, { Component } from 'react'
import { ScrollView, Image }  from 'react-native'
import { List, Text, ListItem } from 'react-native-elements'
import _ from 'lodash'

import { getOrCreateAuthToken } from '../utilities/Auth'
import services from '../utilities/services'

class ServicesScreen extends Component {
  static navigationOptions = {
    title: 'Services'
  }

  componentWillMount() {
    // check for auth token and make request to auth endpoint if not
    getOrCreateAuthToken()
  }

  render() {
    return (
      <ScrollView>
        <List>
          {
            services.map((service) => {
              return (
                <ListItem
                  key={service.key}
                  title={service.value}
                  avatar={{ uri: service.imageUrl }}
                  avatarStyle={{
                    backgroundColor: 'white',
                    // resizeMode: Image.resizeMode.contain  // add this back later
                  }}
                  onPress={() => this.props.navigation.navigate('Service', { service: service.key })}
                />
              )
            })
          }
        </List>
      </ScrollView>
    )
  }
}

export default ServicesScreen
