/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

// Dependencies:
import React, { Component } from 'react'
import { Provider } from 'react-redux'
// import { BackButtonHandler } from ''

// Components:
import Navigation from './components/screens/AppNavigator'
import configureStore from './store'

export default class App extends Component {

  // canExit(routeName){
  //   return contains(routeName, DEFAULT_NAVIGATION_CONFIG.exitRoutes)
  // }

  render() {

    return (

      <Provider store={configureStore}>
        {/* <BackButtonHandler canExit={this.canExit}> */}
          <Navigation />
        {/* </BackButtonHandler> */}
      </Provider>

    )

  }

}
