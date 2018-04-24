// Dependencies:
import React, { Component } from 'react'
import { Button } from 'react-native-elements'
import {
  Text,
  View,
} from 'react-native'
import {
  Field
} from 'redux-form'

// Style:
import css from './PhoneNumberScreen.style'

// Components:
import Login from '../../layouts/Login/'
import TextField from '../../shared/TextField'

class PhoneNumberScreen extends Component {

  static navigationOptions = ({navigation}) => ({
    drawerLockMode: 'locked-closed',
    header: null,
  })

  render() {

    console.log(this.props);

    return (

      <Login
        title = 'Comencemos...'
      >
        <View style={css.container} >
          <View style={css.flexContainer}>
            <Text style={css.textDescription}>
              Por favor, inserte su número de teléfono con el código de área para
              comenzar a usar SimpleQ!
            </Text>
            <View style={css.formLabelContainer}>
              <Field
                component={TextField}
                name={'telephoneNumber'}
                clearTextOnFocus = {true}
                placeholder = "Teléfono"
                placeholderTextColor = 'white'
                inputStyle={css.inputStyle}
              />
            </View>
          </View>
          <View style={css.buttonContainer}>
            <Button
              title='CONTINUAR'
              onPress={this.props.dirty
                ? () => this.props.openCodeNumberScreen()
                : null
              }
              disabled={!this.props.dirty}
              backgroundColor={ 'skyblue' }
              buttonStyle={css.buttonStyle}
            />
          </View>
        </View>
      </Login>

    )

  }

}

export default PhoneNumberScreen
