import { combineReducers } from 'redux';

import AuthReducer from './authReducer';
import ShareReducer from './shareReducer';

export default combineReducers({
    auth: AuthReducer,
    share: ShareReducer
});
