// Dependencies:
import { NavigationActions } from 'react-navigation'

// Components:
import Navigation from '../../../navigation'

// Const:
import {
    OPEN_CODE_NUMBER_SCREEN,
    OPEN_PHONE_NUMBER_SCREEN,
    OPEN_PROFILE_SCREEN,
    OPEN_PRINCIPAL_SCREEN
} from './const'

/* Returns the next state after navigating to a specific screen in the app,
which is then returned in the reducer */
const navigateToScreen =
  (routeName, params, state) => {
    const newInfo = Navigation.router.getStateForAction(
      NavigationActions.navigate({
        params,
        routeName,
      }),
      state
    )
    return newInfo
  }

const navReducer = (state, action) => {
    let nextState
    switch (action.type) {
    case OPEN_CODE_NUMBER_SCREEN:
        nextState = navigateToScreen('CodeNumberScreen', {}, state)
        break

    case OPEN_PHONE_NUMBER_SCREEN:
        nextState = navigateToScreen('PhoneNumberScreen', {}, state)
        break

    case OPEN_PROFILE_SCREEN:
        nextState = navigateToScreen('ProfileScreen', {}, state)
        break

    case OPEN_PRINCIPAL_SCREEN:
        nextState = navigateToScreen('TabsScreen', {}, state)
        break

    default:
        nextState = Navigation.router.getStateForAction(action, state)
        break
    }

    return nextState || state
}

export default navReducer
