// Dependencies:
import {
    StackNavigator,
    DrawerNavigator,
    TabNavigator
} from 'react-navigation'

// Style:
import vars from './navigation.vars'

// Screens:
import PrincipalScreen from '../components/screens/PrincipalScreen'
import PhoneNumberScreen from '../components/screens/PhoneNumberScreen'
import CodeNumberScreen from '../components/screens/CodeNumberScreen'
// import MyPoolsScreen from '../components/screens/MyPoolsScreen'
// import ProfileScreen from '../components/screens/ProfileScreen'
// import PollsScreen from '../components/screens/PollsScreen'
// import ContactsScreen from '../components/screens/ContactsScreen'
// import Login from '../components/layouts/Login'

// const TabsScreen = TabNavigator({
//   Polls: {
//     screen: PollsScreen,
//   },
//   MyPolls: {
//     screen: MyPoolsScreen,
//   },
//   Contacts: {
//     screen: ContactsScreen,
//   },
// }, vars.styleTabsScreen)
//
// const PrincipalScreen = StackNavigator({
//   TabsScreen: {
//     screen: TabsScreen,
//     navigationOptions: ({navigation}) =>
//       vars.principalNavigationOptions({navigation})
//   }
// })
//
// const Profile = StackNavigator({
//   ProfileScreen: {
//     screen: ProfileScreen
//   }
// })

// const MainScreen = DrawerNavigator({
//   PrincipalScreen: {
//     screen: PrincipalScreen,
//   },
//   ProfileScreen: {
//     screen: Profile,
//   },
//   PhoneNumberScreen: {
//     screen: PhoneNumberScreen,
//     navigationOptions: ({navigation}) =>
//       vars.signOutNavigationOptions({navigation}),
//   }
// }, vars.styleMainScreen)

const MainScreen = StackNavigator({
  PrincipalScreen: {
    screen: PrincipalScreen,
    navigationOptions: vars.defaultNavigationOptions()
  }
})

const appStack = {
  Started:{
    screen: PhoneNumberScreen,
    navigationOptions: vars.defaultNavigationOptions()
  },
  CodeNumberScreen:{
    screen: CodeNumberScreen,
    navigationOptions: vars.defaultNavigationOptions()
  },
  MainScreen: {
    screen: MainScreen,
  },
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
