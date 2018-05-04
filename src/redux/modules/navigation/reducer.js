// Actions:
import { navigateToScreen, stayInScreen } from './actions'

// Navigation:
import Navigation from '../../../navigation'

// Const:
import {
    OPEN_CODE_NUMBER_SCREEN,
    OPEN_PHONE_NUMBER_SCREEN,
    OPEN_PROFILE_SCREEN,
    OPEN_PRINCIPAL_SCREEN
} from './const'

const navReducer = (state, action) => {
  switch (action.type) {
    case OPEN_CODE_NUMBER_SCREEN:
      return navigateToScreen('CodeNumberScreen', {}, state)

    case OPEN_PHONE_NUMBER_SCREEN:
      return navigateToScreen('Started', {}, state)

    case OPEN_PROFILE_SCREEN:
      return navigateToScreen('ProfileScreen', {}, state)

    case OPEN_PRINCIPAL_SCREEN:
      return navigateToScreen('PrincipalScreen', {}, state)

    default:
      return Navigation.router.getStateForAction(action, state)
  }
}

export default navReducer
