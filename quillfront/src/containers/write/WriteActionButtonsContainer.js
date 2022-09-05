import React, { useEffect } from 'react';
import WriteActionButtons from '../../components/write/WriteActionButtons';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { writePost, updatePost } from '../../modules/write';

const WriteActionButtonsContainer = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { title, body, post, postError, originalPostId } = useSelector(({ write }) => ({
        title: write.title,
        body: write.body,
        post: write.post,
        postError: write.postError,
        originalPostId: write.originalPostId
    }));

    // Post Enroll
    const onPublish = () => {
        if(originalPostId) {
            dispatch(updatePost({ title, body, id: originalPostId }));
            return;
        }
        dispatch(
            writePost({
                title,
                body,
            }),
        );
    };

    // Post Cancel
    const onCancel = () => {
        navigate(-1);
    };

    useEffect(() => {
        if(post) {
            navigate('/list');
        }
        if(postError) {
            console.log(postError);
        }
    }, [navigate, post, postError]);

    return (
        <WriteActionButtons
        onPublish={onPublish}
        onCancel={onCancel}
        isEdit={!!originalPostId}
        />
    );
};

export default WriteActionButtonsContainer;