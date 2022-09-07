import React from 'react';
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import SubInfo from '../common/SubInfo';
import { Helmet } from 'react-helmet-async';

const PostViewerBlock = styled(Responsive)`
`;

const PostHead = styled.div`
    padding: 10px 40px;
`;

const PostContent = styled.div`
    padding: 10px 40px;
`;

const PostViewer = ({ post, error, loading, actionButtons }) => {

    if (error) {
        if (error.response && error.response.status === 404) {
            return <PostViewerBlock>Nothing!!</PostViewerBlock>
        }
        return <PostViewerBlock>Error!!</PostViewerBlock>
    }

    if (loading || !post) {
        return null;
    }

    const { title, body, createdDate, lastModifiedDate } = post;
    return (
        <PostViewerBlock>
            <Helmet>
                <title>{title}</title>
            </Helmet>
            <PostHead>
                <h1>{title}</h1>
                {lastModifiedDate === null ? 
                <SubInfo publishedDate={new Date(createdDate)} />
            :   <SubInfo publishedDate={new Date(lastModifiedDate)} />
                }
            </PostHead>
            {actionButtons}
            <PostContent dangerouslySetInnerHTML={{__html: body}} />
        </PostViewerBlock>
    );
};

export default PostViewer;