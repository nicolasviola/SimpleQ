// Dependencies:
import React, { Component } from 'react'
import { Button } from 'react-native-elements'
import {
  Text,
  View,
} from 'react-native'

// Style:
import css from './PhoneNumberScreen.style'

// Components:
import TextField from '../../shared/TextField'

class PhoneNumberScreen extends Component {

  static navigationOptions = ({navigation}) => ({
    headerBackTitle: null,
    headerLeft: null,
    headerTitle: 'Comencemos...',
    headerTitleStyle: css.textTitle,
    headerStyle: css.headerStyle
  })

  render() {

    return (

      <View style={css.container} >
        <View style={css.flexContainer}>
          <Text style={css.textDescription}>
            Por favor, inserte su número de teléfono con el código de área para
            comenzar a usar SimpleQ!
          </Text>
          <View style={css.formLabelContainer}>
            <TextField
              inputStyle={css.inputStyle}
              clearTextOnFocus = {true}
              placeholder = "Teléfono"
              placeholderTextColor = 'white'
            />
          </View>
        </View>
        <View style={css.buttonContainer}>
          <Button
            onPress={() => this.props.openCodeNumberScreen()}
            title='CONTINUAR'
            backgroundColor='#4A525D'
            buttonStyle={css.buttonStyle}
          />
        </View>
      </View>

    )

  }

}

export default PhoneNumberScreen
