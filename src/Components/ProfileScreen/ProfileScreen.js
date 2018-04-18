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
import css from './ProfileScreen.style'


export default class ProfileScreen extends Component {
  render() {
    return (
      <View style={css.container} >
        <View style={css.formLabelContainer}>
          <TextField
            inputStyle={css.inputStyle}
            clearTextOnFocus = {true}
            placeholder="Nombre"
            underlineColorAndroid="transparent"
          />
          {/* <FormValidationMessage>Error message</FormValidationMessage> */}
          <TextField
            inputStyle={css.inputStyle}
            clearTextOnFocus = {true}
            placeholder="Apellido"
            underlineColorAndroid="transparent"
          />
          {/* <FormValidationMessage>Error message</FormValidationMessage> */}
          <TextField
            inputStyle={css.inputStyle}
            clearTextOnFocus = {true}
            placeholder="Dirección"
            underlineColorAndroid="transparent"
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
