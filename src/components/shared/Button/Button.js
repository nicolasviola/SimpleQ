// Dependencies:
import React, { PureComponent } from 'react'

// Components:
import {
  Text,
  View,
  TouchableOpacity,
} from 'react-native'

// Styles:
import css from './Button.style'

class Button extends PureComponent{

  render () {

    const {
      buttonStyleActivate,
      buttonStyleDisabled,
      onButtonPress,
      textButtonStyleActivate,
      textButtonStyleDisabled,
      title,
      dirty
    } = this.props

    return (

      <View style={css.buttonContainer}>
        <TouchableOpacity
          style={dirty
            ? [css.buttonActivate, buttonStyleActivate]
            : [css.buttonDisabled, buttonStyleDisabled]
          }
          onPress={this.props.dirty
            ? onButtonPress
            : null
          }
          disabled={!dirty}
        >
          <Text style={css.textButton}>
            {title}
          </Text>
        </TouchableOpacity>
      </View>

    )

  }

}

export default Button
