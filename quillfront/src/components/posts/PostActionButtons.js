import React from 'react';
import styled from 'styled-components';

const PostActionButtonBlock = styled.div`
    padding: 10px 40px;
`;

const ActionButton = styled.button`
    padding: 10px 20px;
    margin-right: 10px;
    border: none;
    border-radius: 3px;
    background-color: lightcyan;
`;

const PostActionButtons = ({ onEdit, onRemove }) => {
    return (
        <>
            <PostActionButtonBlock>
                <ActionButton onClick={onEdit}>Modify</ActionButton>
                <ActionButton onClick={onRemove}>Remove</ActionButton>
            </PostActionButtonBlock>
        </>
    );
};

export default PostActionButtons;