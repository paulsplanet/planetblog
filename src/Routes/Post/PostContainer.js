import React from "react";
import Editor from "../../Components/Editor";
import PostButtons from "../../Components/PostButtons";
import TagBox from "../../Components/TagBox";

const PostContainer = () => {

    return (
        <>
            <Editor />
            <TagBox />
            <PostButtons />
        </>
    )
}

export default PostContainer;