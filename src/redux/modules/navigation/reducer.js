import { NavigationActions } from 'react-navigation';
import Navigation from '../../../Components/Navigation/Navigation';
import {
    OPEN_CODE_NUMBER_SCREEN,
    OPEN_PHONE_NUMBER_SCREEN,
    OPEN_PROFILE_SCREEN,
    OPEN_POLLS_SCREEN,
    OPEN_MY_POOLS_SCREEN,
    OPEN_CONTACTS_SCREEN,
    OPEN_PRINCIPAL_SCREEN,
} from './const';

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
        );
        return newInfo;
    };
const navReducer = (state, action) => {
    let nextState;
    switch (action.type) {
    case OPEN_CODE_NUMBER_SCREEN:
        nextState = navigateToScreen('CodeNumber', {}, state);
        break;

    case OPEN_PHONE_NUMBER_SCREEN:
        nextState = navigateToScreen('PhoneNumber', {}, state);
        break;

    case OPEN_PROFILE_SCREEN:
        nextState = navigateToScreen('Profile', {}, state);
        break;

    case OPEN_POLLS_SCREEN:
        nextState = navigateToScreen('Encuestas', {}, state);
        break;

    case OPEN_MY_POOLS_SCREEN:
        nextState = navigateToScreen('Mis Encuestas', {}, state);
        break;

    case OPEN_CONTACTS_SCREEN:
        nextState = navigateToScreen('Contactos', {}, state);
        break;

    case OPEN_PRINCIPAL_SCREEN:
        nextState = navigateToScreen('Principal', {}, state);
        break;

    default:
        nextState = Navigation.router.getStateForAction(action, state);
        break;
    }

    return nextState || state;
};

export default navReducer;
