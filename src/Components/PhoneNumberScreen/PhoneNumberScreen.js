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
import css from './PhoneNumberScreen.style'


export default class PhoneNumberScreen extends Component {
  render() {
    return (
      <View style={css.container} >
        <View style={css.flexContainer}>
          <Text style={css.textDescription}>
            Por favor, inserte su número de teléfono con el código de área para
            comenzar a usar SimpleQ!
          </Text>
          <View style={css.formLabelContainer}>
            <FormInput
              inputStyle={css.inputStyle}
              value='Teléfono'
              clearTextOnFocus = {true}
            />
            {/* <FormValidationMessage>Error message</FormValidationMessage> */}
          </View>
        </View>
        <View style={css.buttonContainer}>
          <Button
            onPress={() => this.props.navigation.navigate('CodeNumber')}
            title='CONTINUAR'
            backgroundColor='#4A525D'
            buttonStyle={css.buttonStyle}
          />
        </View>

      </View>
    );
  }
}
