import React, { Component } from 'react';
import { FormLabel, FormInput, FormValidationMessage, Button, TextInput } from 'react-native-elements'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
} from 'react-native';
import css from './BooleanPoll.style'
import imgBooleanAnswer from '../../../../img/booleanAnswer.png'

export default class BooleanPoll extends Component {
  render() {
    const poll = (
      <View style={css.pollContainer} >
        <View style={css.imageContainer} >
          <Image
            source = {this.props.pollImg}
            style = {css.img}
          >
          </Image>
        </View>
        <View style={css.textContainer} >
          <Text style={css.textTitle}>
            {this.props.title}
          </Text>
          <Text style={css.textDescription}>
            {this.props.description}
          </Text>
        </View>
        <View style={css.imageContainer} >
          <Image
            source = {imgBooleanAnswer}
            style = {css.img}
          >
          </Image>
        </View>
      </View>
    )

    return (
      <View style={css.container} >
        {poll}
      </View>
    );
  }
}
