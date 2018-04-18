// import React, { Component } from 'react';

// import Icon from 'react-native-vector-icons/Ionicons'
// import ProfileScreen from '../ProfileScreen/ProfileScreen.js'
// import PhoneNumberScreen from '../PhoneNumberScreen/PhoneNumberScreen.js'
// import CodeNumberScreen from '../CodeNumberScreen/CodeNumberScreen.js'
// import PrincipalScreen from './PrincipalScreen/PrincipalScreen.js'
//



import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TouchableHighlight,
  Image,
  View
} from 'react-native';
import {
    StackNavigator,
    DrawerNavigator,
} from 'react-navigation';
import { createReduxBoundAddListener } from 'react-navigation-redux-helpers';
import { connect } from 'react-redux';
import ProfileScreen from '../ProfileScreen/ProfileScreen.js'
import PhoneNumberScreen from '../PhoneNumberScreen/PhoneNumberScreen.js'
import CodeNumberScreen from '../CodeNumberScreen/CodeNumberScreen.js'
import PrincipalScreen from './PrincipalScreen/PrincipalScreen.js'
import css from './Navigation.style.js'
import imgMenu from '../../../img/menu.png'




// The Navigations that are set to default for all of the screens.


const Started = StackNavigator({
  PhoneNumber: {
    screen: PhoneNumberScreen,
    navigationOptions: ({navigation}) => ({
      headerBackTitle: null,
      headerLeft: null,
      headerTitle: 'Comencemos...',
      headerTitleStyle: css.textTitle,
      headerStyle: css.headerStyleNavOpt
    })
  },
  CodeNumber: {
    screen: CodeNumberScreen,
    navigationOptions: ({navigation}) => ({
      headerTitle: 'Cód. de verif.',
      headerTitleStyle: css.textTitle,
      headerStyle: css.headerStyleNavOpt,
    }),
  },
})

const Principal = StackNavigator({
  Principal: {
    // screen: PrincipalScreen,
    screen: ({ navigation }) => <PrincipalScreen
      screenProps ={{ rootNavigation: navigation
      }}
    />,
    navigationOptions: ({navigation}) => ({
      // title: "SimpleQ",
      headerBackTitle: null,
      headerLeft: <View style={css.container}>
                    <TouchableHighlight
                      onPress={ () => navigation.navigate('DrawerOpen')}
                    >
                      <Image
                        source = {imgMenu}
                      />
                    </TouchableHighlight>
                    <Text style={css.textTitlePrincipal}>
                      SimpleQ
                    </Text>
                  </View>,
      headerStyle: css.headerStyleStNav,
    })
  },
})

const Profile = StackNavigator({
  Profile: {
    screen: ProfileScreen,
    navigationOptions: ({navigation}) => ({
      headerLeft: <Text style={css.textTitle}>
        Perfil del usuario
      </Text>,
      headerStyle: css.headerStyleNavOpt,
    }),
  }
})

const MainMenu = DrawerNavigator({
  Encuestas: {
    screen: Principal,
  },
  Perfil: {
    screen: Profile,
  },
}, {
  drawerBackgroundColor: '#4A525C',
  contentOptions:{
    labelStyle: css.labelStyleMainMenu,
    activeBackgroundColor: '#2E368B',
  },

  drawerPosition: 'left',
  drawerWidth: 300,
})

const Navigation = DrawerNavigator({
  Started: {
    screen: Started,
  },
  MainMenu: {
    screen: MainMenu,
  },
}, {
  contentOptions:{
    labelStyle: css.labelStyleNavigation,
    activeBackgroundColor: 'red',
  },

  drawerPosition: 'left',
  drawerWidth: 300,
})

export default Navigation
