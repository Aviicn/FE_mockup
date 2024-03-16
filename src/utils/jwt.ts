import jwtDecode from 'jwt-decode';
import { api } from './api';

export const setToken = (token: string) => {
  localStorage.setItem('token', token);
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const getToken = () => localStorage.getItem('token');

export const removeToken = () => {
  localStorage.removeItem('token');
  api.defaults.headers.common.Authorization = '';
};

export const isAuthenticated = () => {
  const token = getToken();
  if (!token) {
    return false;
  }
  try {
    const decoded: { exp: number } = jwtDecode(token);
    if (decoded.exp < Date.now() / 1000) {
      removeToken();
      return false;
    } else {
      return true;
    }
  } catch (err) {
    removeToken();
    return false;
  }
};