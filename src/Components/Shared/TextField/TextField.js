import React, { PureComponent } from 'react'
import {
  TextInput,
  View,
  Text,

} from 'react-native'
import css from './TextField.style'

type Props = {
  input: Object,
  label: string,
  multiline: boolean,
  numberOfLines: number,
  maxLength: number,
  minLength: number,
  textColor: string,
  keyboardType: string,
  secureTextEntry: boolean,
  email: boolean,
  meta: Object,
  borderBottomWidth: number,
  containerStyle: Object,
  placeholder: string,
  placeholderStyle: Object,
  inputStyle: Object,
}

class TextField extends PureComponent<Props> {

  props: Props
  render () {

    const {
      input,
      label,
      multiline,
      maxLength,
      containerStyle,
      placeholder,
      placeholderStyle,
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
      <View style={[css.container, containerStyle]}>
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
            // onBlur={input.onBlur}
            // onFocus={input.onFocus}
            placeholder={placeholder}
            // keyboardType={keyboardType || 'default'}
            // underlineColorAndroid={'transparent'}
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
