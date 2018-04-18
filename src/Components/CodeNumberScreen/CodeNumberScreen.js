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
import TextField from '../Shared/TextField'
import css from './CodeNumberScreen.style'


export default class CodeNumberScreen extends Component {
  render() {
    return (
      <View style={css.container} >
        <View style={css.flexContainer}>
          <Text style={css.textDescription}>
            El código de verificación se está enviando
            a tu número, por favor ingrésalo a continuación:
          </Text>
          <View style={css.formLabelContainer}>
            <TextField
              inputStyle={css.inputStyle}
              clearTextOnFocus = {true}
              placeholder="Código de verificación"
              underlineColorAndroid="transparent"
            />
          </View>
        </View>
        <View style={css.buttonContainer}>
          <Button
            onPress={() => this.props.navigation.navigate('Profile')}
            title='LOG IN'
            backgroundColor='#4A525D'
            buttonStyle={css.buttonStyle}
          />
        </View>
      </View>
    );
  }
}
