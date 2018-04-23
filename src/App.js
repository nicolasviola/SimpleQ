/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

// Dependencies:
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import BackButton from './components/screens/AppNavigator/BackButton'

// Components:
import Navigation from './components/screens/AppNavigator'
import configureStore from './store'

export default class App extends Component {

  render() {

    return (

      <Provider store={configureStore}>
        <BackButton canExit={this.canExit}>
          <Navigation />
        </BackButton>
      </Provider>

    )

  }

}
