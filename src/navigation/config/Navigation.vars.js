// Dependencies:
import React from 'react'

// Components:
import IconMenu from '../../components/shared/IconMenu'

// object created to save navigation style compositions
const vars = {

  styleMainScreen: {
    drawerBackgroundColor: '#4A525C',
    contentOptions:{
      labelStyle: {
        fontSize: 16,
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
      },
      activeBackgroundColor: '#2E368B',
    },
    drawerPosition: 'left',
    drawerWidth: 300,
  },

  defaultNavigationOptions: () => ({
      header: null,
  }),

  principalNavigationOptions: ({navigation}) => ({
    headerLeft: <IconMenu onPress={ () => navigation.navigate('DrawerOpen')}/>,
    headerTitle: 'SimpleQ',
    headerTitleStyle: {
      color: 'white',
      fontSize: 20,
    },
    headerStyle: {
      backgroundColor: '#2E368B',
    },
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
