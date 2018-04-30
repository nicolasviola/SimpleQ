// Dependencies:
import {
    StackNavigator,
    DrawerNavigator,
    TabNavigator
} from 'react-navigation'

// Style:
import vars from './navigation.vars'

// Screens:
import ProfileScreen from '../components/screens/ProfileScreen'
import PrincipalScreen from '../components/screens/PrincipalScreen'
import PhoneNumberScreen from '../components/screens/PhoneNumberScreen'
import CodeNumberScreen from '../components/screens/CodeNumberScreen'
import PollsScreen from '../components/screens/PollsScreen'
import MyPoolsScreen from '../components/screens/MyPoolsScreen'
import ContactsScreen from '../components/screens/ContactsScreen'
import Login from '../components/layouts/Login'

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

const MainScreen = StackNavigator({
  PrincipalScreen: {
    screen: PrincipalScreen,
    navigationOptions: vars.defaultNavigationOptions()
  }
})

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

const appStack = {
  Started:{
    screen: Started,
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
