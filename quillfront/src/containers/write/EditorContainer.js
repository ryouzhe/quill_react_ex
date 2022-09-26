import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeField, initialize } from '../../modules/write';
import Editor from '../../components/write/Editor';
import { saveimg } from '../../modules/image';

const EditorContainer = () => {
    const dispatch = useDispatch();
    const { title, body } = useSelector(({write}) => ({
        title: write.title,
        body: write.body,
    }));
    const onChangeField = useCallback(payload => dispatch(changeField(payload)),[dispatch,]);
    const uploadFile = (files) => {
        const formData = new FormData();
        formData.append('file', files[0]);
        dispatch(saveimg({ formData }));
    };

    useEffect(() => {
        return () => {
            dispatch(initialize());
        };
    }, [dispatch]);

    return <Editor onChangeField={onChangeField} uploadFile={uploadFile} title={title} body={body} />;
};

export default EditorContainer;