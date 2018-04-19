// Dependencies:
import React from 'react'
import {
  Text,
  TouchableHighlight,
  Image,
  View
} from 'react-native'

// Style:
import css from './Navigation.style'

// Assets:
import imgMenu from '../../../../img/menu.png'

// object created to save navigation style compositions
const vars = {

  styleMainScreen: {
    drawerBackgroundColor: '#4A525C',
    contentOptions:{
      labelStyle: css.labelStyleMainMenu,
      activeBackgroundColor: '#2E368B',
    },
    drawerPosition: 'left',
    drawerWidth: 300,
  },

  defaultNavigationOptions: () => ({
      header: null,
  }),

  principalNavigationOptions: ({navigation}) => ({
    headerLeft: <View style={css.container}>
                  <TouchableHighlight
                    onPress={ () => navigation.navigate('DrawerOpen')}
                  >
                    <Image
                      source = {imgMenu}
                    />
                  </TouchableHighlight>
                  <Text style={css.textTitle}>
                    SimpleQ
                  </Text>
                </View>,
    headerStyle: css.headerStyle,
  }),

  styleTabsScreen: {
    tabBarPosition: 'top',
    tabBarOptions: {
      activeTintColor: 'white',
      inactiveTintColor: 'black',
      indicatorStyle: {
        opacity: 0
      },
      labelStyle: {
        fontSize: 15,
      },
      style: {
        backgroundColor: '#2E368B',
        height: 50,
        paddingBottom: 15,
      },
    }
  }

}

export default vars
