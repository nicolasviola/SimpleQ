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
import css from './ProfileScreen.style'


export default class ProfileScreen extends Component {
  render() {
    return (
      <View style={css.container} >
        <View style={css.formLabelContainer}>
          <FormInput
            inputStyle={css.inputStyle}
            value= 'Nombre'
            clearTextOnFocus = {true}
          />
          {/* <FormValidationMessage>Error message</FormValidationMessage> */}
          <FormInput
            inputStyle={css.inputStyle}
            value='Fecha de Nacimiento'
            clearTextOnFocus = {true}
          />
          {/* <FormValidationMessage>Error message</FormValidationMessage> */}
          <FormInput
            inputStyle={css.inputStyle}
            value='Localidad'
            clearTextOnFocus = {true}
          />
          {/* <FormValidationMessage>Error message</FormValidationMessage> */}
        </View>
        <View style={css.buttonContainer}>
          <Button
            onPress={() => this.props.navigation.navigate('Principal')}
            title='GUARDAR'
            backgroundColor='#4A525D'
            buttonStyle={css.buttonStyle}
          />
        </View>

      </View>
    );
  }
}
