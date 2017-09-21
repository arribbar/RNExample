import { Actions, ActionConst } from 'react-native-router-flux';

import {
    SHARE_DATA,
    SAVE_DATA,
} from './types';


export const shareData = (url) => {
    return {
        type: SHARE_DATA,
        payload: {
            url
        }
    };
};


export const saveData = () => {
    Actions.result({ type: ActionConst.PUSH });
    return {
        type: SAVE_DATA,
        payload: {}
    };
};
