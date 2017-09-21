import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    USER_LOGGED_IN
} from '../actions/types';

const INITIAL_STATE = {
    email: '',
    emailEdited: false,
    password: '',
    passwordEdited: false,
    user_logged_in: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMAIL_CHANGED:
            {
                const { text, emailEdited } = action.payload;
                return {
                    ...state,
                    email: text,
                    emailEdited
                };
            }
        case PASSWORD_CHANGED:
            {
                const { text, passwordEdited } = action.payload;
                return {
                    ...state,
                    password: text,
                    passwordEdited
                };
            }
        case USER_LOGGED_IN:
            return {
                ...state,
                user_logged_in: true,
                password: '',
                passwordEdited: false
            };
        default:
            return state;
    }
};
