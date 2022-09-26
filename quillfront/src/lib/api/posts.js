import client from './client';

export const writePost = ({ title, body }) => client.post('http://localhost:8080/api/write', null, { params: { title, body } });
export const updatePost = ({ id, title, body }) => client.post(`http://localhost:8080/api/update/${id}`, null, { params: { title, body } });
export const listPosts = () => client.get('http://localhost:8080/api/list');
export const readPost = ({ postId }) => client.get(`http://localhost:8080/api/view/${postId}`);
export const removePost = ({ postId }) => client.get(`http://localhost:8080/api/delete/${postId}`);

export const saveimg = ({ formData }) => client.post('http//localhost:8080/api/imageUpload', formData, { headers: {'content-type': 'multipart/form-data'}} );
