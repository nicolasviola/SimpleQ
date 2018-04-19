// Dependencies:
import React from 'react'
import {
    StackNavigator,
    DrawerNavigator,
    TabNavigator
} from 'react-navigation'

// Style:
import vars from './style/Navigation.vars'

// Components:
import ProfileScreen from '../ProfileScreen'
import PhoneNumberScreen from '../PhoneNumberScreen'
import CodeNumberScreen from '../CodeNumberScreen'
import PollsScreen from '../PollsScreen'
import MyPoolsScreen from '../MyPoolsScreen'
import ContactsScreen from '../ContactsScreen'

const TabsScreen = TabNavigator({
  Polls: {
    screen: PollsScreen,
  },
  MyPolls: {
    screen: MyPoolsScreen,
  },
  Contacts: {
    screen: ContactsScreen,
  },
}, vars.styleTabsScreen)

const PrincipalScreen = StackNavigator({
  TabsScreen: {
    screen: TabsScreen,
    navigationOptions: ({navigation}) =>
      vars.principalNavigationOptions({navigation})
  }
})

const Profile = StackNavigator({
  ProfileScreen: {
    screen: ProfileScreen
  }
})

const MainScreen = DrawerNavigator({
  PrincipalScreen: {
      screen: PrincipalScreen,
  },
  ProfileScreen: {
      screen: Profile,
  },
}, vars.styleMainScreen)

const Started = StackNavigator({
  PhoneNumberScreen: {
      screen: PhoneNumberScreen,
  },
  CodeNumberScreen: {
      screen: CodeNumberScreen,
  },
})

const appStack = {
  Started:{
    screen: Started,
    navigationOptions: vars.defaultNavigationOptions()
  },
  MainScreen: {
    screen: MainScreen,
  }
}

const Navigation = DrawerNavigator({
    ...appStack,
}, {
    headerMode: 'screen',
    initialRouteName: 'Started',
    navigationOptions: {
      drawerLockMode: 'locked-closed'
    }
})

export default Navigation
