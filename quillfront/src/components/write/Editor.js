import React, { useRef, useEffect, useState } from 'react';
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

const ImgInput = styled.input`
    display: none;
`;

const Editor = ({ title, body, onChangeField, uploadFile }) => {
    const quillElement = useRef(null);
    const quillInstance = useRef(null);
    const imgInputRef = useRef();
    const [files, setFiles] = useState('');
    const [imgBit, setImgBit] = useState('');

    useEffect(() => {
        quillInstance.current = new Quill(quillElement.current, {
            theme: 'snow',
            placeholder: 'Input Text...',
            modules: {
                toolbar:{ 
                    container: [
                    [{ header: '1' }, { header: '2' }],
                    ['bold', 'italic', 'underline', 'strike'],
                    [{ list: 'orderd' }, { list: 'bullet' }],
                    ['blockquote', 'code-block', 'link', 'image'],
                    ],
               },
        }});
        const quill = quillInstance.current;
        // Editor Text Event
        quill.on('text-change', (delta, oldDelta, source) => {
            if(source === 'user') {
                onChangeField({ key: 'body', value: quill.root.innerHTML });
            }
        });
        // Editor Image Event
        quill.getModule('toolbar').addHandler('image', () => {
            console.log("image add event handler");
            imgEventHandler();       
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

    const imgEventHandler = () => {
        imgInputRef.current.click();
    }

    const onLoadFile = e => {
        const file = e.target.files;
        const range = quillElement.current.getSelection();
        setFiles(file);
        setImgBit(URL.createObjectURL(e.target.files[0]));
        quillElement.current.insertEmbed(range.index, 'image', "/display?filePath=" + imgBit);

        uploadFile(e.target.files);
    }

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
            <ImgInput
                type="file"
                accept="image/*"
                ref={imgInputRef}
                onChange={onLoadFile}
            />
        </EditorBlock>
    );
};

export default Editor;