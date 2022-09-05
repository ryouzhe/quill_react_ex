import client from './client';

export const writePost = ({ title, body }) => client.post('http://localhost:8080/api/posts', null, { params: { title, body } });
export const updatePost = ({ id, title, body }) => client.post(`http://localhost:8080/api/posts/${id}`, null, { params: { title, body } });
export const listPosts = () => client.get('http://localhost:8080/api/list');
