import React from "react";
import { useSelector } from "react-redux";
import Header from "../../Components/Header";
import PostViewer from "../../Components/PostViewer";


const PostViewerContainer = (match) => {
    const posts = useSelector( state => state.post.posts)
    const id = match.match.params.postId;
    const selectPost = posts.filter(function(post) {     
        return String(post._id) === id

    })
    console.log("posts", posts)
    console.log("id", id, "selectPost", selectPost)


    return(
        <>
            <Header />
            <PostViewer post={selectPost} />
        </>
    )
}

export default PostViewerContainer;