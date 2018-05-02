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
import css from './Content.style'

// Assets:
import imgBack from '../../../../img/back.png'
import imgSimpleQ from '../../../../img/logoSimpleQ.png'

class Login extends Component {

  render () {

    const {
      back,
      leftButtonHandler,
      imgRight,
      imgLeft,
      title,
      rightButtonHandler,
    } = this.props

    return (
      <View style = {css.container}>
        <View style = {css.headerContainer}>
          <View style = {css.header}>
            <TouchableOpacity
              style = {css.buttonStyle}
              onPress = {leftButtonHandler}
            >
              <Image
                source = {imgLeft}
                style = {css.imgSide}
              />
            </TouchableOpacity>
            <View style = {css.titleContainer}>
              {
                title
                ? <Text> {title} </Text>
                : <Image
                    source = { imgSimpleQ }
                    style = { css.imgLogo }
                  />
              }
            </View>
            <TouchableOpacity
              style = {css.buttonStyle}
            >
              <Image
                source = {imgRight}
                style = {css.imgSide}
              />
            </TouchableOpacity>
          </View>
        </View>
        {this.props.children}
      </View>
    )

  }

}

export default Login
