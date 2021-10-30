import React from "react";
import styled from "styled-components";
import Button from "./utils/Button";
import { useSelector } from "react-redux";

const WriteActionButtonsBlock = styled.div`
    margin: 1.5rem auto;
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

const PostButtons = ({ title, body, tags, onPostWriting, onInitializeField, history }) => {
    const user = useSelector(state => state.auth.user.id)
    const date = new Date();

    const onSubmit = (title, body, tags) => {
        onPostWriting({
            title: title,
            body: body,
            tags: tags,
            username: user,
            publishedDate: date,
        });
        onInitializeField();
        history.push('/');
    }

    const onCancel = () => {
        onInitializeField();
        history.push('/');
    }

    return (
        <WriteActionButtonsBlock>
            <StyledButton orange onClick={() => onSubmit(title, body, tags)}>Post Submit</StyledButton>
            <StyledButton onClick={onCancel}>Cancel</StyledButton>
        </WriteActionButtonsBlock>
    )
};

export default PostButtons;