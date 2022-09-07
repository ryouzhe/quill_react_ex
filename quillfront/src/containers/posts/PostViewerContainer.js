import React, { useEffect } from 'react';
import PostViewer from '../../components/posts/PostViewer';
import PostActionButtons from '../../components/posts/PostActionButtons';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { readPost, unloadPost } from '../../modules/post';
import { setOriginalPost } from '../../modules/write';
import { removePost } from '../../lib/api/posts';

const PostViewerContainer = () => {
    const { postId } = useParams();
    const dispatch = useDispatch();
    const { post, error, loading } = useSelector(({ post, loading }) => ({
        post: post.post,
        error: post.error,
        loading: loading['post/READ_POST'],
    }));

    useEffect(() => {
        dispatch(readPost({ postId }));
        return () => {
            dispatch(unloadPost());
        }
    }, [dispatch, postId]);

    const navigate = useNavigate();
    const onEdit = () => {
        dispatch(setOriginalPost(post));
        navigate('/write');
    }
    const onRemove = async () => {
        try {
            await removePost(postId);
            navigate('/');
        } catch (e) {
            console.log(e);
        }
    }

    return <PostViewer
        post={post}
        loading={loading}
        error={error}
        actionButtons={<PostActionButtons onEdit={onEdit} onRemove={onRemove} />}
        />;
};

export default PostViewerContainer;