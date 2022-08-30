import client from './client';

export const listPosts = () => {
    return client.get('/api/posts');
};
