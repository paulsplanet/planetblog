import { createAction, handleActions } from "redux-actions";

const CHANGE_FILED = "post/change_field";
const CHANGE_TAG = "post/change_tag";
const POST_WRITING = 'post/post_writing';
const INITIALIZE_FIELD = 'post/initialize_field';

export const changeField = createAction(CHANGE_FILED, ({ key, value }) => ({ key, value }) );
export const changeTag = createAction(CHANGE_TAG);
export const postWriting = createAction(POST_WRITING, ({ title, body, tags }) => ({ title, body, tags }) );
export const initializeField = createAction(INITIALIZE_FIELD);

const initialState = {
    title: '',
    body: '',
    tags: [], 
    posts: [],
}

const post = handleActions({
        [CHANGE_FILED]: (state, { payload: { key, value } }) => ({
            ...state,
            [key]: value,
        }),
        [CHANGE_TAG]: (state, { payload: tag}) => ({
            ...state,
            tags: tag,
        }),
        [POST_WRITING]: (state, { payload: post }) => ({
            ...state,
            posts: state.posts.concat(post),
        }), 
        [INITIALIZE_FIELD]: (state) => ({
            ...state,
            title: initialState.title,
            body: initialState.body,
            tags: initialState.tags,
        })
}, initialState)

export default post;

