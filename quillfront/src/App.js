import React from 'react';
import { Route, Routes } from 'react-router-dom'; 
import { Helmet } from 'react-helmet-async';
import TestPage from './pages/TestPage';
import PostListPage from './pages/PostListPage';
import WritePage from './pages/WritePage';
import PostPage from './pages/PostPage';


const App = () => {
    return (
        <>
            <Helmet>
                <title>Quill Editor</title>
            </Helmet>
            <Routes>
                <Route path="/" element={<TestPage />}/>
                <Route path="/list">
                    <Route index element={<PostListPage />} />
                    <Route path=":postId" element={<PostPage />} />
                </Route>
                <Route path="/write" element={<WritePage />}/>
            </Routes>
        </>
    )
};

export default App;