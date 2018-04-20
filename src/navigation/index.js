// Dependencies:
import {
    StackNavigator,
    DrawerNavigator,
    TabNavigator
} from 'react-navigation'

// Style:
import vars from './navigation.vars'

// Components:
import ProfileScreen from '../components/screens/ProfileScreen'
import PhoneNumberScreen from '../components/screens/PhoneNumberScreen'
import CodeNumberScreen from '../components/screens/CodeNumberScreen'
import PollsScreen from '../components/screens/PollsScreen'
import MyPoolsScreen from '../components/screens/MyPoolsScreen'
import ContactsScreen from '../components/screens/ContactsScreen'

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
  SignOut: {
    screen: PhoneNumberScreen,
  }
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
