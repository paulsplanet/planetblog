import React from "react";
import styled from "styled-components";
import Button from "./utils/Button";

const WriteActionButtonsBlock = styled.div`
    margin: 2rem auto;
    width: 1024px;
    
    @media (max-width: 1024px) {
        width: 768px;
    }
    @media (max-width: 768px) {
        width: 100%;
    }

    button + button {
        margin-left: 0.5rem;
    }
`;

const StyledButton = styled(Button)`
    height: 2.125rem;
    & + & {
        margin-left: 0.5rem;
    }
`;

const PostButtons = ({ onCancel, onPublish, isEdit }) => {
    return (
        <WriteActionButtonsBlock>
            <StyledButton orange onClick={onPublish}>Post {isEdit ? 'Edit' : 'Submit'}</StyledButton>
            <StyledButton onClick={onCancel}>Cancel</StyledButton>
        </WriteActionButtonsBlock>
    )
};

export default PostButtons;