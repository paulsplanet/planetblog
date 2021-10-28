import { combineReducers } from "redux";
import auth from './auth';
import register from './register';
import post from './post';


const rootReducer = combineReducers({
    auth,
    register,
    post,
});

export default rootReducer;
