import React, { useEffect, useRef } from "react";
import Quill from "quill";
import "quill/dist/quill.bubble.css";
import styled from "styled-components";


const EditorBlock = styled.div`
    padding: 5rem 1rem;
    width: 1024px;
    margin: 0 auto;

    @media (max-width: 1024px) {
        width: 768px;
    }
    @media (max-width: 768px) {
        width: 100%;
    }
`;

const TitleInput = styled.input`
    font-size: 3rem;
    outline: none;
    padding-bottom: 0.5rem;
    border: none;
    border-bottom: 1px solid #a5b1c2;
    margin-bottom: 2rem;
    width: 100%;
`;

const QuillWrapper = styled.div`
    .ql-editor {
        padding: 0;
        min-height: 320px;
        font-size: 1.125rem;
        line-height: 1.5;
    }
    .ql-editor.ql-blank::before {
        left: 0px;
    }
`;

const Editor = ({ title, body, onChangeField }) => {
    const quillElement = useRef(null); // set up DivElement to apply Quill
    const quillInstance = useRef(null); // set up Quill Instance

    useEffect(() => {
        quillInstance.current = new Quill(quillElement.current, {
            theme: 'bubble',
            placeholder: 'Write a comment here',
            modules: {
                toolbar: [
                    [{ header: '1' }, { header: '2' }],
                    ['bold', 'italic', 'underline', 'strike'],
                    [{ list: 'ordered' }, { list: 'bullet' }],
                    ['blockquote', 'code-block', 'link', 'image'],
                ],
            },
        });

        const quill = quillInstance.current;
        quill.on('text-change', (delta, oldDelta, source) => {
            if (source === 'user') {
                //onChangeField({ key: 'body', value: quill.root.innerHTML });
            }
        });
    }, [onChangeField]);

    // const mounted = useRef(false);
    useEffect(() => {
        quillInstance.current.root.innerHTML = body;
    }, [])

    const onChangeTitle = e => {
        onChangeField({ key: 'title', value: e.target.value });
    };

    return (
        <EditorBlock>
            <TitleInput placeholder="Write a title here" onChange={onChangeTitle} value={title}/>
            <QuillWrapper>
                <div ref={quillElement} />
            </QuillWrapper>
        </EditorBlock>
    );
};

export default Editor;