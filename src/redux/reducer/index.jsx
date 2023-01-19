import { combineReducers } from "redux";
import {AuthReducer} from '../reducer/authReducer';
import { GetUserReducer } from '../reducer/userReducer';
import { HostelReducer } from '../reducer/hostelReducer'
import { ChatReducer } from "../reducer/chatReducer";

export const reducers = combineReducers({
    AuthReducer,
    GetUserReducer,
    HostelReducer,
    ChatReducer,
});