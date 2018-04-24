// Dependencies:
import React from 'react'
import { BackHandler } from 'react-native'
import { NavigationActions } from 'react-navigation'

// Const:
const exitRoutes = ['Polls', 'PhoneNumberScreen']

class BackButton extends React.Component {

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress.bind(this))
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress.bind(this))
  }

  getCurrentRoute(routes, index) {
    const { routes: nextRoutes, index: nextIndex, routeName } = routes[index]
    if(nextIndex === undefined) return routeName
    return this.getCurrentRoute(nextRoutes, nextIndex)
  }

  canExit() {
    const { nav: { routes, index } } = this.props
    const currentRouteName = this.getCurrentRoute(routes, index)
    return exitRoutes.indexOf(currentRouteName) >= 0
  }

  onBackPress () {
    if (this.canExit()) {
      return false
    }
    this.props.dispatch(NavigationActions.back())
    return true
  }

  render() {
    return this.props.children
  }

}

export default BackButton
