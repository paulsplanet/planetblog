import { createAction, handleActions } from "redux-actions";

const CHANGE_FILED = "post/change_field";

export const changeField = createAction(CHANGE_FILED, ({ key, value }) => ({ key, value }) );

const initialState = {
    title: '',
    body: '',
    tags: [],
    post: null,
}

const post = handleActions({
        [CHANGE_FILED]: (state, { payload: { key, value } }) => ({
            ...state,
            [key]: value,
        }),
}, initialState)

export default post;