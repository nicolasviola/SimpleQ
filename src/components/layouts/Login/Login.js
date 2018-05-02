// Dependencies:
import React, { Component } from 'react'

//Components:
import { Button } from 'react-native-elements'
import {
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native'

// Style:
import css from './Login.style'

// Assets:
import imgBack from '../../../../img/back.png'

class Login extends Component {

  render () {

    const {
      back,
      imgRight,
      title,
    } = this.props

    return (
      <View style = {css.container}>
        <View style = {css.header}>
          <TouchableOpacity
            style = {css.buttonStyle}
            onPress = {back}
          >
            <Image
              source = {back ? imgBack : null}
            />
          </TouchableOpacity>
          <View style = {css.textTitleContainer}>
            <Text style = {css.textTitle}>
              {title}
            </Text>
          </View>
          <TouchableOpacity
            style = {css.buttonStyle}
          >
            <Image
              source = {imgRight}
            />
          </TouchableOpacity>
        </View>
        {this.props.children}
      </View>
    )

  }

}

export default Login
