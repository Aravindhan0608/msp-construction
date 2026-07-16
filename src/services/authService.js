import { apiRequest } from './api';

export const login = (username, password) =>
  apiRequest('/auth/login', { method: 'POST', body: { username, password } });
