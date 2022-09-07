import React from 'react';
import styled from 'styled-components';
import SubInfo from '../common/SubInfo';
import { Link } from 'react-router-dom';

const PostListBlock = styled.div`
    display: flex;
    flex-direction: column;
    margin: 15px 0px;
`;

const PostItemBlock = styled.div`
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 60px;
`;

const StyledSpan = styled.p`
    margin: 0;
`;

const PostItem = ({ post }) => {
    const { createdDate, lastModifiedDate, title, body, id } = post;
    return (
        <PostItemBlock>
            <Link to={`/list/${id}`}>{title}</Link>
            {lastModifiedDate === null ? 
                <SubInfo publishedDate={new Date(createdDate)} />
            :   <SubInfo publishedDate={new Date(lastModifiedDate)} />
            }
            <StyledSpan dangerouslySetInnerHTML={{__html: body}} />
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
