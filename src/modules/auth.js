import { createAction, handleActions } from "redux-actions";
import produce from "immer";

const CHANGE_INPUT = 'auth/change_input';
const LOGIN = 'auth/login';
const CLEAN_FORM = 'auth/clean_form';

export const changeInput = createAction(
    CHANGE_INPUT, 
    ({ form, key, value }) => ({ form, key, value })
);

export const loginForm = createAction(LOGIN, ({ id, password }) => ({ id, password, }) );

export const cleanForm = createAction(CLEAN_FORM, form => form);


const initialState ={
    login: {
        id: "",
        password: "",
    },
    user: {
        id: "",
        password: "",
    }
}


export default handleActions({
    [CHANGE_INPUT]: (state, { payload: { form, key, value } }) => 
    produce(state, draft => {
        draft[form][key] = value;
    }),
    [LOGIN]: (state, { payload: user }) => ({
        ...state,
        user: user,
    }),
    [CLEAN_FORM]: (state, { payload: form }) => ({
        ...state,
        [form]: initialState[form]
    }),

}, initialState);