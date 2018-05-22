// Dependencies:
import React, { Component } from 'react'

// Components:
import { Provider } from 'react-redux'
import SplashScreen from 'react-native-splash-screen'
import BackButton from './components/appNavigator/BackButton'
import Navigation from './components/appNavigator'
import configureStore from './store'

export default class App extends Component {
  componentDidMount() {
    SplashScreen.hide()
  }

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
