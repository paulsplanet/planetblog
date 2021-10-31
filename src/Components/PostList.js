import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import sanitizeHtml from "sanitize-html";

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

const PostItemBlock = styled.div`
    padding-top: 3rem;
    padding-bottom: 3rem;
    &:first-child {
        padding-top: 0;
    }
    & + & {
        border-top: 1px solid #d1d8e0;
    }
    h2 {
        font-size: 2rem;
        margin-bottom: 0;
        margin-top: 0;
        &:hover {
            color: #4b6584;
        }
    }
    p {
        margin-top: 2rem;
    }
`;

const SubInfoBlock = styled.div`
    ${props => props.hasMarginTop && css`
        margin-top: 1rem;
    `}
    color: #a5b1c2;
    span + span:before {
        color: #d1d8e0;
        padding-left: 0.25rem;
        padding-right: 0.25rem;
        content: '\\B7';
    }
`;

const TagsBlock = styled.div`
    margin-top: 0.5rem;
    .tag {
        display: inline-block;
        color: #fed330;
        text-decoration: none;
        margin-right: 0.5rem;
        &:hover {
            color: #f7b731;
        }
    }
`;


const PostItem = ({ post }) => {
    const { publishedDate, username, tags, title, body, _id } = post;

    const sanitizedAndShortened = (text) => {
        const clean = sanitizeHtml(text);
        return clean.length < 100 ? clean : clean.slice(0, 100);
    }

    const sanitizedBody = sanitizedAndShortened(body);

    return (
        <PostItemBlock>
            <h2>
                 <Link to={`/@${username}/${_id}`}>{title}</Link> 
            </h2>
            <SubInfoBlock>
                <span><b><Link to={`/@${username}`}>{username}</Link></b></span>
                <span>{new Date(publishedDate).toLocaleDateString()}</span>
            </SubInfoBlock>
            <TagsBlock>
                {tags.map(tag => (
                    <Link className='tag' to={`/?tag=${tag}`} key={tag}>#{tag}</Link>
                ))}
            </TagsBlock>
            <p dangerouslySetInnerHTML={{__html: sanitizedBody}} />
        </PostItemBlock>
    );
};

const PostList = ( posts ) => {
    const [newPosts, setNewPosts] = useState()

    useEffect(() => {
        const existingPosts = posts.posts;
        const newOrderPosts = existingPosts.reverse();    
        setNewPosts(newOrderPosts)
    }, )
    

    return (
        <PostListBlock>
            
            {newPosts && (
                <div>
                    {newPosts.map((post, index) => (<PostItem post={post} key={index} />))}
                </div>
            )}
        </PostListBlock>
    );
};

export default PostList;