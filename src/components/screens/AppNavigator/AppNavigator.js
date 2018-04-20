// Dependencies:
import React from 'react'
import {
    addNavigationHelpers,
} from 'react-navigation'
import { createReduxBoundAddListener } from 'react-navigation-redux-helpers'

// Nav:
import Navigation from '../../../navigation'

class AppNavigator extends React.Component {
  // componentWillMount() {
  //     // Check to see if the user is signed in on this device
  //     if (!this.props.token && !this.props.sessionTokenChecked) {
  //         this.props.getLoginInfoFromAsyncStorage();
  //     }
  // }

  render() {

    const addListener = createReduxBoundAddListener('root')

    return (
      <Navigation
        navigation={addNavigationHelpers({
          dispatch: this.props.dispatch,
          state: this.props.nav,
          addListener,
        })}
      />
    )

  }

}

export default AppNavigator
