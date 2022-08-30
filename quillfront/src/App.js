import React from 'react';
import { Route, Routes } from 'react-router-dom'; 
import { Helmet } from 'react-helmet-async';
import TestPage from './pages/TestPage';
import PostListPage from './pages/PostListPage';
import WritePage from './pages/WritePage';


const App = () => {
    return (
        <>
            <Helmet>
                <title>Quill Editor</title>
            </Helmet>
            <Routes>
                <Route path="/" element={<TestPage />}/>
                <Route path="/list" element={<PostListPage />}/>
                <Route path="/write" element={<WritePage />}/>
            </Routes>
        </>
    )
};

export default App;