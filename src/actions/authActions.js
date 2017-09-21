import { Actions, ActionConst } from 'react-native-router-flux';

import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    USER_LOGGED_IN
} from './types';


export const emailChanged = (text) => {
    let emailEdited = true;
    if (text === '') {
        emailEdited = false;
    }
    return {
        type: EMAIL_CHANGED,
        payload: {
            text,
            emailEdited
        }
    };
};

export const passwordChanged = (text) => {
    let passwordEdited = true;
    if (text === '') {
        passwordEdited = false;
    }
    return {
        type: PASSWORD_CHANGED,
        payload: {
            text,
            passwordEdited
        }
    };
};

export const loginUser = ({ email, password }) => {
    console.log(' about to go to home page');
    Actions.home({ type: ActionConst.PUSH });
    return {
        type: USER_LOGGED_IN,
        payload: {}
    };
};
