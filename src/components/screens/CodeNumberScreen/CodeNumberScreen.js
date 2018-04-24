// Dependencies:
import React, { Component } from 'react'
import { Button } from 'react-native-elements'
import {
  Text,
  View,
} from 'react-native'

// Style:
import css from './CodeNumberScreen.style'

// Components:
import Login from '../../layouts/Login/'
import TextField from '../../shared/TextField'

class CodeNumberScreen extends Component {

  static navigationOptions = ({navigation}) => ({
    header: null,
  })

  render() {

    return (

      <Login
        title = 'Cod. de Verif.'
        back = {() => this.props.navigation.navigate('PhoneNumberScreen')}
      >
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
              onPress={() => this.props.openProfileScreen()}
              title='LOG IN'
              backgroundColor='#4A525D'
              buttonStyle={css.buttonStyle}
            />
          </View>
        </View>
      </Login>

    )

  }

}

export default CodeNumberScreen
