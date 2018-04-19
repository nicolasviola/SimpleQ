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
