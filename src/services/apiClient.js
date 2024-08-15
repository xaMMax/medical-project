import axios from 'axios';
import router from '../router';

const API_URL = process.env.VUE_APP_DJANGO_API || 'https://xammax.pythonanywhere.com/api/';

const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  }
});

apiClient.interceptors.request.use(config => {
  const token = localStorage.getItem('accessToken');
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
});

apiClient.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const refreshToken = localStorage.getItem('refreshToken');

      if (refreshToken) {
        try {
          const { data } = await axios.post(`${API_URL}token/refresh/`, { refresh: refreshToken });
          localStorage.setItem('accessToken', data.access);
          originalRequest.headers['Authorization'] = `Bearer ${data.access}`;
          return apiClient(originalRequest);
        } catch (err) {
          console.error('Refresh token failed', err);
          localStorage.removeItem('accessToken');
          localStorage.removeItem('refreshToken');
          await router.push('/login');  // Використання маршрутизатора
        }
      } else {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        await router.push('/login');  // Використання маршрутизатора
      }
    }
    return Promise.reject(error);
  }
);

export default apiClient;
