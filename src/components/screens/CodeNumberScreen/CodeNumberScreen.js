// Dependencies:
import React, { Component } from 'react'

// Components:
import {
  Text,
  View,
  Image,
} from 'react-native'
import { Field } from 'redux-form'
import Login from '../../layouts/Login/'
import TextField from '../../shared/TextField'
import Button from '../../shared/Button'

// Style:
import css from './CodeNumberScreen.style'

// Assets:
import logoSimpleQ from '../../../../img/logoSimpleQ.png'

class CodeNumberScreen extends Component {

  static navigationOptions = ({navigation}) => ({
    header: null,
  })

  render() {

    return (

      <Login
        title = 'Código de Verificación'
        back = {() => this.props.navigation.navigate('PhoneNumberScreen')}
      >
        <View style={css.container} >
          <View style={css.flexContainer}>
            <View style={css.imageContainer}>
              <Image
                style={css.image}
                source = {logoSimpleQ}
              />
            </View>
            <View style={css.formButtonContainer}>
              <View style={css.formLabelContainer}>
                <Field
                  component={TextField}
                  name={'codeNumber'}
                  clearTextOnFocus = {true}
                  placeholder = "   Ingrese el código de seguridad"
                  placeholderTextColor = '#A4A4A4'
                  inputStyle={css.inputStyle}
                />
              </View>
              <Button
                title = 'LOGIN'
                dirty = {this.props.dirty}
                onButtonPress = {() => this.props.openPrincipalScreen()}
              />
            </View>
          </View>
        </View>
      </Login>

    )

  }

}

export default CodeNumberScreen
