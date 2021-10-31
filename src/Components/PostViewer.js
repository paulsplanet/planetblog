import React from "react";
import styled, { css } from "styled-components";
import sanitizeHtml from "sanitize-html";

const PostViewerBlock = styled.div`
    margin-top: 4rem;
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

const PostHead = styled.div`
    border-bottom: 1px solid #a5b1c2;
    padding-bottom: 3rem;
    margin: 3rem 0;
    h1 {
        font-size: 3rem;
        line-height: 1.5;
        margin: 0;
    }
`;

const PostContent = styled.div`
    margin-top: 3rem;
    font-size: 1.125rem;
    color: #778ca3;
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

const PostViewer = (post) => {
    
    const { title, body, username, publishedDate, tags } = post.post[0];
    
    const sanitizedBody = sanitizeHtml(body);

    return (
        <PostViewerBlock>
            <PostHead>
                <h1>{title}</h1>
                <SubInfoBlock hasMarginTop>
                    <span><b>{username}</b></span>
                    <span>{new Date(publishedDate).toLocaleDateString()}</span>
                </SubInfoBlock>
                <TagsBlock>
                    {tags.map((tag, index) => (
                        <div key={index} className='tag'>#{tag}</div>
                    ))}
                </TagsBlock>
                <PostContent dangerouslySetInnerHTML={{ __html: sanitizedBody }} />
            </PostHead>
                
        </PostViewerBlock>
    )
};

export default PostViewer;