import { createAction, handleActions } from "redux-actions";

const CHANGE_FILED = "post/change_field";
const CHANGE_TAG = "post/change_tag";
const POST_WRITING = 'post/post_writing';
const INITIALIZE_FIELD = 'post/initialize_field';

export const changeField = createAction(CHANGE_FILED, ({ key, value }) => ({ key, value }) );
export const changeTag = createAction(CHANGE_TAG);
export const postWriting = createAction(POST_WRITING, ({ title, body, tags, username, publishedDate }) => ({ title, body, tags, username, publishedDate }) );
export const initializeField = createAction(INITIALIZE_FIELD);

const initialState = {
    title: '',
    body: '',
    tags: [], 
    posts: [
        {
            title: 'test',
            body: 'this is test posting',
            tags: ['tag1', 'tag2'],
            username: "Paul H",
            publishedDate: "10/29/2021",
        },
        {
            title: 'test2',
            body: 'this is test posting2',
            tags: ['tag22', 'tag222'],
            username: "Paul H",
            publishedDate: "10/29/2021",
        }
    ],
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

