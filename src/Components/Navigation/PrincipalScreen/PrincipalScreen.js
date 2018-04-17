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
import { TabNavigator } from 'react-navigation';
import css from './PrincipalScreen.style'
import PollsScreen from '../../PollsScreen/PollsScreen.js'
import MyPoolsScreen from '../../MyPoolsScreen/MyPoolsScreen.js'
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
        activeBackgroundColor: '#2E368B',
        inactiveTintColor: 'black',
        activeTintColor: 'white',
        inactiveBackgroundColor: '#2E368B',
        style: {
          backgroundColor: 'white',
          height: 40,
        },
        labelStyle: {
          fontSize: 15,
          // color: 'black',
          marginBottom: 8,
        },
      },
    })
    return (

        <MainTab screenProps={{rootNavigation: this.props.screenProps.navigation}} />

    )
  }
}
