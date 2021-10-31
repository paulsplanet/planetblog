import { createAction, handleActions } from "redux-actions";

const CHANGE_FILED = "post/change_field";
const CHANGE_TAG = "post/change_tag";
const POST_WRITING = 'post/post_writing';
const INITIALIZE_FIELD = 'post/initialize_field';

export const changeField = createAction(CHANGE_FILED, ({ key, value }) => ({ key, value }) );
export const changeTag = createAction(CHANGE_TAG);
export const postWriting = createAction(
    POST_WRITING, 
    ({ title, body, tags, username, publishedDate, _id }) => 
    ({ title, body, tags, username, publishedDate, _id }) 
);
export const initializeField = createAction(INITIALIZE_FIELD);

const initialState = {
    title: '',
    body: '',
    tags: [], 
    posts: [
        {
            title: 'Welcome to My Blog',
            body: '<p>I built this blog by using React and Redux.</p><p>There are login page, register page, and other pages.</p><p>After you logged in, you can see the "New Post" button. You can write a post by clicking the button.</p><p>I imported Quill for post body section. You can adjust style by using quill functions.</p><p>Thank you for your Visiting!</p>',
            tags: ['React', 'Redux'],
            username: "Paul H",
            publishedDate: "10/29/2021",
            _id: "15081253",
        },
        {
            title: 'I am looking for a Junior Frontend Developer position',
            body: '<p>Welcome to my blog, Everyone</p><p>I am self-taught developer.</p><p>I\'ve been studying coding since end of 2020.</p><p>I used "freeCodeCamp" first with couple of actual coding books for studying. Then I watched Youtubes, Posts on Google, and other online lectures to practice what I\'ve been studied and make my own works.</p><p>As you already might know, I made StarTalk, ChromeApp, MoviePlanet, PlanetBlog, and TravelPlanet.</p><p>Please check those works and contact me!</p>',
            tags: ['junior', 'frontend developer', 'new hire'],
            username: "Paul H",
            publishedDate: "10/29/2021",
            _id: "15081254",
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

