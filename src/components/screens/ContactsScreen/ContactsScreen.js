// Dependencies:
import React, { Component } from 'react'
// import { Button } from 'react-native-elements'
import {
  Text,
  View,
} from 'react-native'

// Style:
import css from './ContactsScreen.style'

class ContactsScreen extends Component {

  static navigationOptions = ({navigation}) => ({
    title: 'CONTACTOS',
    headerTitle: '',
  })

  render() {

    return (

      <View style={css.container} >
        <Text>
          CONTACTOS
        </Text>
      </View>
    )

  }

}

export default ContactsScreen
