import client from './client';

export const writePost = ({ title, body }) => client.post('/api/posts', { title, body });
export const updatePost = ({ id, title, body }) => client.post(`/api/posts/${id}`, { title, body });
export const listPosts = () => client.get('/api/list');
