import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import Responsive from '../components/common/Responsive';
import EditorContainer from '../containers/write/EditorContainer';
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
            </Responsive>
        </>
    );
};

export default WritePage;