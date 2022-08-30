import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listPosts } from '../../modules/posts';
import PostList from '../../components/posts/PostList';

const PostListContainer = () => {
    const dispatch = useDispatch();
    const { posts, error, loading } = useSelector(
        ({ posts, loading }) => ({
            posts: posts.posts,
            error: posts.error,
            loading: loading['posts/LIST_POSTS'],
        }),
    );

    useEffect(() => {
        dispatch(listPosts());
    }, [dispatch]);

    return (
        <PostList
            loading={loading}
            error={error}
            posts={posts}
        />
    );
};

export default PostListContainer;
