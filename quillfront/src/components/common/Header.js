import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderBlock = styled.div`
    width: 100%;
    height: 5vh;
    display: flex;
    justify-content: space-between;
`;

const HeaderText = styled.p`
    padding: 0px 15px;
`;

const Header = () => {
    return (
        <>
            <HeaderBlock>
                <HeaderText><Link to="/" className='logo'>Home</Link></HeaderText>
                <HeaderText><Link to="/write" className='logo'>Write</Link></HeaderText>
            </HeaderBlock>
        </>
    );
};

export default Header;