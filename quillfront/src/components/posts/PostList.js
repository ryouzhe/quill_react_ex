import React from 'react';
import styled from 'styled-components';
import SubInfo from '../common/SubInfo';
import { Link } from 'react-router-dom';

const PostListBlock = styled.div``;
const PostItemBlock = styled.div``;

const PostItem = ({ post }) => {
    const { createdDate, lastModifiedDate, title, body, id } = post;

    return (
        <PostItemBlock>
            <Link to={`/${id}`}>{title}</Link>
            {lastModifiedDate === null ? 
                <SubInfo publishedDate={new Date(createdDate)} />
            :   <SubInfo publishedDate={new Date(lastModifiedDate)} />
            }
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
                        <PostItem post={post} key={post.id} />
                    ))}
                </div>
            )}
        </PostListBlock>
    );
};

export default PostList;
