/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Provider } from 'react-redux'
import Navigation from './Components/Navigation'
import configureStore from './store'

export default class App extends Component {
  render() {
    return (
      <Provider store={configureStore}>
        <Navigation />
      </Provider>
    );
  }
}
