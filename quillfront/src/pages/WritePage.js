import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import Responsive from '../components/common/Responsive';
import EditorContainer from '../containers/write/EditorContainer';
import WriteActionButtonsContainer from '../containers/write/WriteActionButtonsContainer';
import { Helmet } from 'react-helmet-async';

const WritePage = () => {
    return (
        <>
            <HeaderContainer />
            <Responsive>
                <Helmet>
                    <title>Write Page</title>
                </Helmet>
                <EditorContainer />
                <WriteActionButtonsContainer />
            </Responsive>
        </>
    );
};

export default WritePage;