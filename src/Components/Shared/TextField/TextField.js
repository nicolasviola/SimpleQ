// Dependencies:
import React, { PureComponent } from 'react'

// Components:
import {
  TextInput,
  View,
  Text,
} from 'react-native'

// Styles:
import css from './TextField.style'

class TextField extends PureComponent{

  render () {

    const {
      input,
      label,
      multiline,
      maxLength,
      containerStyle,
      placeholder,
      placeholderStyle,
      placeholderTextColor,
      inputStyle,
      keyboardType,
      secureTextEntry,
      // meta: {
      //   touched,
      //   error,
      //   warning,
      // },
    } = this.props

    return (

      <View style={containerStyle}>
        <Text style={[css.placeholder, placeholderStyle]}>
          {label && label.toUpperCase()}
        </Text>
        <View
          style={css.textContainer}
        >
          <TextInput
            style={[css.textInput, inputStyle]}
            {...input}
            secureTextEntry={secureTextEntry}
            maxLength={maxLength}
            multiline={multiline}
            placeholder={placeholder}
            placeholderTextColor={placeholderTextColor}
            underlineColorAndroid={'transparent'}
            // keyboardType={keyboardType || 'default'}
            // onBlur={input.onBlur}
            // onFocus={input.onFocus}
            // placeholderStyle={placeholderStyle}
            // underlineColor={'transparent'}
            // onChangeText={value => {
            //
            //   input.onChange(value)
            //
            // }}
            // value={input.value}
          />
        </View>
        {/* {touched
          && ((error && <Text style={css.error}>{error}</Text>)
          || (warning && <Text style={css.warning}>{warning}</Text>))} */}
      </View>

    )

  }

}

export default TextField
