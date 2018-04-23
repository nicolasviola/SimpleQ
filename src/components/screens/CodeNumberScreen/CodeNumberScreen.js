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
import TextField from '../../shared/TextField'


class CodeNumberScreen extends Component {

  static navigationOptions = ({navigation}) => ({
    header: null,
    // headerTitle: 'Cód. de verif.',
    // headerTitleStyle: css.textTitle,
    // headerStyle: css.headerStyleNavOpt,
  })

  render() {

    console.log(this.props);

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
            onPress={() => this.props.openProfileScreen()}
            // onPress={() => this.props.navigation.goBack()}
            title='LOG IN'
            backgroundColor='#4A525D'
            buttonStyle={css.buttonStyle}
          />
        </View>
      </View>

    )

  }

}

export default CodeNumberScreen
