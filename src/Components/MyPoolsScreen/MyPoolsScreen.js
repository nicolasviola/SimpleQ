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
import css from './MyPoolsScreen.style'
import BooleanPoll from '../Shared/BooleanPoll/BooleanPoll'
import DatePoll from '../Shared/DatePoll/DatePoll'
import OptionsPoll from '../Shared/OptionsPoll/OptionsPoll'
import imgBall from '../../../img/soccer-ball.png'
import imgFriends from '../../../img/friends.png'
import imgFood from '../../../img/food.png'

export default class MyPoolsScreen extends Component {
  render() {
    return (
      <View style={css.container} >
        <BooleanPoll
          title = 'FUTBOL'
          description = 'Partida de los martes a las 19hs'
          pollImg = {imgBall}
        />
        <DatePoll
          title = 'CENA'
          description = 'Cuando comemos?'
          pollImg = {imgFood}
        />
        <OptionsPoll
          title = 'AMIGOS'
          description = 'Cuanto ponemos para el asado de las 21hs'
          pollImg = {imgFriends}
        />
      </View>
    );
  }
}
