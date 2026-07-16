import { apiRequest } from './api';

export const sendMessage = (formData) =>
  apiRequest('/messages', { method: 'POST', body: formData });

export const getMessages = (token) =>
  apiRequest('/messages', { method: 'GET', token });

export const deleteMessage = (id, token) =>
  apiRequest(`/messages/${id}`, { method: 'DELETE', token });
