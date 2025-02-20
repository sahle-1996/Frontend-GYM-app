import axios from 'axios';

// Fetch the token each time an API request is made
const axiosInstance = axios.create({
  baseURL: 'https://backend-gym-app.onrender.com/api/',
});

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosInstance;
//https://backend-gym-app.onrender.com