// Dependencies:
import React, { Component } from 'react'
import {
  Field
} from 'redux-form'

// Style:
import css from './PhoneNumberScreen.style'

// Assets:
import logoSimpleQ from '../../../../img/logoSimpleQ.png'

// Components:
import Login from '../../layouts/Login/'
import { View, Image } from 'react-native'
import TextField from '../../shared/TextField'
import Button from '../../shared/Button'

class PhoneNumberScreen extends Component {

  static navigationOptions = ({navigation}) => ({
    drawerLockMode: 'locked-closed',
    header: null,
  })

  render() {

    return (
      <Login>
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
                  name={'telephoneNumber'}
                  clearTextOnFocus = {true}
                  placeholder = "   +549-3415-810394"
                  placeholderTextColor = '#A4A4A4'
                  inputStyle={css.inputStyle}
                />
              </View>
              <Button
                title = 'CONTINUAR'
                dirty = {this.props.dirty}
                onButtonPress = {() => this.props.openCodeNumberScreen()}
              />
            </View>
          </View>
        </View>
      </Login>
    )

  }

}

export default PhoneNumberScreen
