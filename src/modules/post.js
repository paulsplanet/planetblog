import { createAction, handleActions } from "redux-actions";

const CHANGE_FILED = "post/change_field";
const CHANGE_TAG = "post/change_tag";

export const changeField = createAction(CHANGE_FILED, ({ key, value }) => ({ key, value }) );
export const changeTag = createAction(CHANGE_TAG, )

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
        [CHANGE_TAG]: (state, { payload: tag}) => ({
            ...state,
            tags: tag,
        })
}, initialState)

export default post;