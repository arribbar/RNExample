import {
    SHARE_DATA,
    SAVE_DATA,
} from '../actions/types';

const INITIAL_STATE = {
    data: '',
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SHARE_DATA:
            {
                const { url } = action.payload;
                return {
                    ...state,
                    data: url
                };
            }
        case SAVE_DATA:
            {
                return {
                    ...state,
                };
            }
        default:
            return state;
    }
};
