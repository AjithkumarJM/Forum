import { combineReducers } from 'redux';
import auth from '../services/googleOauth/reducers';

const rootReducer = combineReducers({
    auth
});

export default rootReducer;