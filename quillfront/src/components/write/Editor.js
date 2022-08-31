import React, { useRef, useEffect } from 'react';
import Responsive from '../common/Responsive';
import styled from 'styled-components';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';

const EditorBlock = styled(Responsive)`
    padding-top: 5rem;
    padding-bottom: 5rem;
`;

const TitleInput = styled.input`
    font-size: 3rem;
    outline: none;
    padding-bottom: 0.5rem;
    border: none;
    border-bottom: 1px solid gray;
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
    .ql-editor.ql-black::before{
        left: 0px;
    }
`;

const Editor = ({ title, body, onChangeField }) => {
    const quillElement = useRef(null);
    const quillInstance = useRef(null);

    useEffect(() => {
        quillInstance.current = new Quill(quillElement.current, {
            theme: 'snow',
            placeholder: 'Input Text...',
            modules: {
                toolbar: [
                    [{ header: '1' }, { header: '2' }],
                    ['bold', 'italic', 'underline', 'strike'],
                    [{ list: 'orderd' }, { list: 'bullet' }],
                    ['blockquote', 'code-block', 'link', 'image'],
                ],
            },
        });
        const quill = quillInstance.current;
        quill.on('text-change', (delta, oldDelta, source) => {
            if(source === 'user') {
                onChangeField({ key: 'body', value: quill.root.innerHTML });
            }
        });
    }, [onChangeField]);

    const mounted = useRef(false);
    useEffect(() => {
        if(mounted.current) return;
        mounted.current = true;
        quillInstance.current.root.innerHTML = body;
    }, [body]);

    const onChangeTitle = e => {
        onChangeField({ key: 'title', value: e.target.value });
    };

    return (
        <EditorBlock>
            <TitleInput 
                placeholder="Input Title..."
                onChange={onChangeTitle}
                value={title}
            />
            <QuillWrapper>
                <div ref={quillElement} />
            </QuillWrapper>
        </EditorBlock>
    );
};

export default Editor;