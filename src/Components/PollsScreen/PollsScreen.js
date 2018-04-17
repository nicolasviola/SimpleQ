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
import css from './PollsScreen.style'


export default class PollsScreen extends Component {
  render() {
    return (
      <View style={css.container} >
        <Text>
          ENCUESTAS
        </Text>
      </View>
    );
  }
}
