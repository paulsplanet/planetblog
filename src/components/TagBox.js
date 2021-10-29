import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";

const TagBoxBlock = styled.div`
    width: 100%;
    border-top: 1px solid #d1d8e0;
    padding-top: 2rem;
    width: 1024px;
    margin: 0 auto;

    @media (max-width: 1024px) {
        width: 768px;
    }
    @media (max-width: 768px) {
        width: 100%;
    }

    h4 {
        color: #778ca3;
        margin-top: 0;
        margin-bottom: 0.5rem;
    }
`;

const TagForm = styled.form`
    border-radius: 4px;
    overflow: hidden;
    display: flex;
    width: 256px;
    border: 1px solid #778ca3;
    input,
    button {
        outline: none;
        border: none;
        font-size: 1rem;
    }
    input {
        padding: 0.5rem;
        flex: 1;
        min-width: 0;
    }
    button {
        cursor: pointer;
        padding-right: 1rem;
        padding-left: 1rem;
        border: none;
        background-color: #d1d8e0;
        color: white;
        font-weight: bold;
        &:hover {
            background-color: #a5b1c2;
        }
    }
`;

const Tag = styled.div`
    margin-right: 0.5rem;
    color: #778ca3;
    cursor: pointer;
    display: flex; 
    &:hover {
        opacity: 0.5;
    }
`;

const RemoveButton = styled.div`
    display: flex;
    align-items: center;
    margin-left: 4px;
    font-size: 14px;
`;

const TagListBlock = styled.div`
    display: flex;
    margin-top: 0.5rem;
`;

const TagBox = ({ tags, onChangeTag }) => {
    const [input, setInput] = useState('');
    const [localTags, setLocalTags] = useState([]);
    
    const onChange = e => {
        setInput(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        insertTag(input);
        setInput('');
    }

    const insertTag = (tag) => {
        if(!tag) return;
        if(localTags.includes(tag)) return;
        const newTag = [...localTags, tag];
        setLocalTags(newTag);
        onChangeTag(newTag);
    }

    const onRemove = (id) => {    
        const refreshTags = localTags.filter(t => t !== id);
        setLocalTags(refreshTags);
        onChangeTag(refreshTags);
        //console.log("try remove", refreshTags)
    }

    return(
        <TagBoxBlock>
            <h4>Tag</h4>
            <TagForm onSubmit={onSubmit}>
                <input placeholder="write a tag here" value={input} onChange={onChange} />
                <button type="submit">ADD</button>
            </TagForm>
            <TagListBlock>
                {localTags.map((localTag, index) => (
                    <Tag key={index} >
                        #{localTag}
                        <RemoveButton onClick={() => onRemove(localTag)}>(❌)</RemoveButton>
                    </Tag>
                ))}
            </TagListBlock>
        </TagBoxBlock>
    );
};


export default TagBox;