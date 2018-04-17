import React, { Component } from 'react';
import { FormLabel, FormInput, FormValidationMessage, Button, TextInput } from 'react-native-elements'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
} from 'react-native';
import css from './ContactsScreen.style'
import imgBall from '../../../img/soccer-ball.png'
import imgBooleanAnswer from '../../../img/booleanAnswer.png'

export default class ContactsScreen extends Component {
  render() {
    return (
      <View style={css.container} >
        <Text>
          CONTACTOS
        </Text>
      </View>
    );
  }
}
