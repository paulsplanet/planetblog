import React from "react";
import Editor from "../../Components/Editor";
import PostButtons from "../../Components/PostButtons";
import TagBox from "../../Components/TagBox";
import { connect } from "react-redux";
import { changeField, changeTag, postWriting, initializeField } from "../../modules/post";

const PostContainer = ({ title, body, tags, posts, changeField, changeTag, postWriting, initializeField, history }) => {

    return (
        <>
            <Editor title={title} body={body} onChangeField={changeField} />
            <TagBox tags={tags} onChangeTag={changeTag} />
            <PostButtons title={title} body={body} tags={tags} onPostWriting={postWriting} onInitializeField={initializeField} history={history} />
        </>
    )
}


export default connect(
    ({ post }) => ({
        title: post.title,
        body: post.body,
        tags: post.tags,
        posts: post.posts
    }), 
    {
        changeField,
        changeTag,
        postWriting,
        initializeField,
    }
)(PostContainer);