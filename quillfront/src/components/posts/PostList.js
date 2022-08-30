import React from 'react';
import styled from 'styled-components';
import SubInfo from '../common/SubInfo';
import { Link } from 'react-router-dom';

const PostListBlock = styled.div``;
const PostItemBlock = styled.div``;

const PostItem = ({ post }) => {
    const { publishedDate, title, body, _id } = post;

    return (
        <PostItemBlock>
            <Link to={`/${_id}`}>{title}</Link>
            <SubInfo publishedDate={new Date(publishedDate)} />
            <p>{body}</p>
        </PostItemBlock>
    );
};

const PostList = ({ posts, loading, error }) => {
    if (error) {
        return <PostListBlock>Error !!</PostListBlock>
    }

    return (
        <PostListBlock>
            {!loading && posts && (
                <div>
                    {posts.map((post) => (
                        <PostItem post={post} key={post._id} />
                    ))}
                </div>
            )}
        </PostListBlock>
    );
};

export default PostList;
