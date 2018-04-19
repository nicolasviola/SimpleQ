/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

// Dependencies:
import React, { Component } from 'react'
import { Provider } from 'react-redux'

// Components:
import Navigation from './Components/Navigation'
import configureStore from './store'

export default class App extends Component {

  render() {

    return (

      <Provider store={configureStore}>
        <Navigation />
      </Provider>
      
    )

  }

}
