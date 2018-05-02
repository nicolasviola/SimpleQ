// Dependencies:
import React, { Component } from 'react'

// Components:
import { Provider } from 'react-redux'
import BackButton from './components/AppNavigator/BackButton'
import Navigation from './components/AppNavigator'
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
