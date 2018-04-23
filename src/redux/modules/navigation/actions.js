// Dependencies:
import { NavigationActions } from 'react-navigation'

// Navigation:
import Navigation from '../../../navigation'

// Const:
import {
    OPEN_CODE_NUMBER_SCREEN,
    OPEN_PHONE_NUMBER_SCREEN,
    OPEN_PROFILE_SCREEN,
    OPEN_PRINCIPAL_SCREEN,
} from './const';

export const openCodeNumberScreen = () => ({
    type: OPEN_CODE_NUMBER_SCREEN,
});

export const openPhoneNumberScreen = () => ({
    type: OPEN_PHONE_NUMBER_SCREEN,
});

export const openProfileScreen = () => ({
    type: OPEN_PROFILE_SCREEN,
});

export const openPrincipalScreen = () => ({
    type: OPEN_PRINCIPAL_SCREEN,
});

/* Returns the next state after navigating to a specific screen in the app,
which is then returned in the reducer */
export const navigateToScreen =
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
