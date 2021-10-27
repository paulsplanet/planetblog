import { createAction, handleActions } from "redux-actions";
import produce from "immer";


const TYPE_INPUT = 'register/type_input';
const REGISTER_FORM = 'register/register_form';
const CLEAN_INPUT = 'register/clean_input';

export const typeInput = createAction(TYPE_INPUT, ({ form, key, value}) => ({ form, key, value }) );
export const registerForm = createAction(REGISTER_FORM, ({ id, password }) => ({ id, password }) );
export const cleanInput = createAction(CLEAN_INPUT);



const initialState = {
    register: {
        id: "",
        password: "",
        passwordConfirm: "",
    },
    users: [
        {
            id: "USER1",
            passwrod: "123",
        },
        {
            id: "USER2",
            password: "1234",
        }
    ],
    status: "",
}

export default handleActions({
    [TYPE_INPUT]: (state, { payload: { form, key, value }} ) => 
    produce(state, draft => {
        draft[form][key] = value
    }),   
    [REGISTER_FORM]: (state, { payload: user }) => ({
        ...state,
        users: state.users.concat(user),
        status: "true",
    }),
    [CLEAN_INPUT]: (state) => ({
        ...state,
        register: initialState.register
    })
    
}, initialState)

