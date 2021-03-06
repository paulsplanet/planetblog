import React from "react";
import Header from "../../Components/Header";
import styled from "styled-components";
import Button from "../../Components/utils/Button";
import { useSelector } from "react-redux";
import PostList from "../../Components/PostList";


const PostListBlock = styled.div`
    margin-top: 3rem;
    padding-left: 1rem;
    padding-right: 1rem;
    width: 1024px;
    margin: 0 auto;

    @media (max-width: 1024px) {
        width: 768px;
    }
    @media (max-width: 768px) {
        width: 100%;
    }
`;

const WritePostButtonWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    margin: 3rem 0;
`;

const PostButton = styled(Button)`
    font-size: 1.125rem;
    width: 170px;
    padding: 0.45rem 0;
    display: flex;
    justify-content: center;
`;

const PostListContainer = () => {
    const { user, posts } = useSelector( ({ auth, post }) => ({
        user: auth.user,
        posts: post.posts,
    }))

    return (
        <>
            <Header />
            <PostListBlock>
                <WritePostButtonWrapper>
                    { user.id && (
                        <PostButton orange to='/post'>New Post</PostButton>
                    )}
                </WritePostButtonWrapper>
                <PostList posts={posts} />
            </PostListBlock>
        </>
    )
};

export default PostListContainer;