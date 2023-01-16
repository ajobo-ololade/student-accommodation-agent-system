import { combineReducers } from "redux";
import {AuthReducer} from '../reducer/authReducer';
import { GetUserReducer } from '../reducer/userReducer';
import { HostelReducer } from '../reducer/hostelReducer'

export const reducers = combineReducers({
    AuthReducer,
    GetUserReducer,
    HostelReducer
});