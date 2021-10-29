import React from "react";
import Editor from "../../Components/Editor";
import PostButtons from "../../Components/PostButtons";
import TagBox from "../../Components/TagBox";
import { connect } from "react-redux";
import { changeField, changeTag } from "../../modules/post";

const PostContainer = ({ title, body, tags, post, changeField, changeTag }) => {

    return (
        <>
            <Editor title={title} body={body} onChangeField={changeField} />
            <TagBox tags={tags} onChangeTag={changeTag} />
            <PostButtons />
        </>
    )
}


export default connect(
    ({ post }) => ({
        title: post.title,
        body: post.body,
        tags: post.tags,
        post: post.post
    }), 
    {
        changeField,
        changeTag,
    }
)(PostContainer);