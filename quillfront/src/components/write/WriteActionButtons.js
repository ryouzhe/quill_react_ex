import React from 'react';
import styled from 'styled-components';
import Button from '../common/Button';

const WriteActionButtonsBlock = styled.div`
    margin-top: 1rem;
    margin-button: 1rem;
    button + button {
        margin-left: 0.5rem;
    }
`;

const StyledButton = styled(Button)`
    height: 2.125rem;
    & + & {
        margint-left: 0.5rem;
    }
`;

const WriteActionButtons = ({ onCancel, onPublish, isEdit }) => {
    return (
        <WriteActionButtonsBlock>
            <StyledButton cyan onClick={onPublish}>
                Post {isEdit ? 'Modify' : 'Enroll'}
            </StyledButton>
            <StyledButton onClick={onCancel}>
                Cancel
            </StyledButton>
        </WriteActionButtonsBlock>
    );
};

export default WriteActionButtons;