import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Responsive from './Responsive';

const HeaderBlock = styled.div`
    display: flex;
    margin-left: 40px;
`;

const HeaderText = styled.p`
    padding: 10px 30px 10px 0px;
`;

const Header = () => {
    return (
        <Responsive>
            <HeaderBlock>
                <HeaderText><Link to="/" className='logo'>Home</Link></HeaderText>
                <HeaderText><Link to="/write" className='logo'>Write</Link></HeaderText>
            </HeaderBlock>
        </Responsive>
    );
};

export default Header;