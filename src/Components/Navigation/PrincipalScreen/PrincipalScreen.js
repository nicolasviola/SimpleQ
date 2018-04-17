import React, { Component } from 'react';
import { FormLabel, FormInput, FormValidationMessage, Button, TextInput } from 'react-native-elements'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
} from 'react-native'
import { TabNavigator } from 'react-navigation'
import css from './PrincipalScreen.style'
import PollsScreen from '../../PollsScreen/PollsScreen.js'
import MyPoolsScreen from '../../MyPoolsScreen'
import ContactsScreen from '../../ContactsScreen/ContactsScreen.js'


export default class PrincipalScreen extends Component {
  render () {
    const MainTab = TabNavigator({
      Encuestas: {
        screen: PollsScreen,
        navigationOptions: ({navigation}) => ({
          topBarLabel: 'Encuestas',
          headerTintColor: 'black',
        })
      },
      'Mis Encuestas': {
        screen: MyPoolsScreen,
        navigationOptions: ({navigation}) => ({
          topBarLabel: 'Mis Encuestas',
          headerTintColor: 'black',
        })
      },
      Contactos: {
        screen: ContactsScreen,
        navigationOptions: ({navigation}) => ({
          topBarLabel: 'Contactos',
          headerTintColor: 'black',
        })
      },
    },
    {
      tabBarPosition: 'top',
      tabBarOptions: {
        showLabel: true,
        activeBackgroundColor: 'white',
        inactiveTintColor: 'grey',
        activeTintColor: 'black',
        inactiveBackgroundColor: 'white',
        style: {
          backgroundColor: 'white',
          // height: 60,
        },
        labelStyle: {
          fontSize: 15,
          marginBottom: 8,
        },
      },
    })
    return (

        <MainTab screenProps={{rootNavigation: this.props.screenProps.navigation}} />

    )
  }
}
