import React from 'react';
import styled from 'styled-components';

const SubInfoBlock = styled.div``;

const SubInfo = ({ publishedDate }) => {
    return (
        <SubInfoBlock>
            <span>{new Date(publishedDate).toLocaleDateString()}</span>
        </SubInfoBlock>
    );
};

export default SubInfo;