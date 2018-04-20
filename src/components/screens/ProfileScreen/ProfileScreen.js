// Dependencies:
import React, { Component } from 'react'
import { Button } from 'react-native-elements'
import {
  Text,
  View,
} from 'react-native'

// Style:
import css from './ProfileScreen.style'

// Components
import TextField from '../../shared/TextField'


class ProfileScreen extends Component {

  static navigationOptions = ({navigation}) => ({
    headerLeft: <Text style={css.textTitle}>
      Perfil del usuario
    </Text>,
    headerStyle: css.headerStyle,
    title: 'PERFIL',
    headerTitle: '',
  })

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
            onPress={() => this.props.openPrincipalScreen()}
            title='GUARDAR'
            backgroundColor='#4A525D'
            buttonStyle={css.buttonStyle}
          />
        </View>
      </View>

    )

  }

}

export default ProfileScreen
