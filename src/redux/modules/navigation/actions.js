import {
    OPEN_CODE_NUMBER_SCREEN,
    OPEN_PHONE_NUMBER_SCREEN,
    OPEN_PROFILE_SCREEN,
    OPEN_POLLS_SCREEN,
    OPEN_MY_POOLS_SCREEN,
    OPEN_CONTACTS_SCREEN,
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

export const openPollsScreen = () => ({
    type: OPEN_POLLS_SCREEN,
});

export const openMyPollsScreen = () => ({
    type: OPEN_MY_POOLS_SCREEN,
});

export const openContactsScreen = () => ({
    type: OPEN_CONTACTS_SCREEN,
});

export const openPrincipalScreen = () => ({
    type: OPEN_PRINCIPAL_SCREEN,
});
