import axios from 'axios'
import {getAccessToken, getRefreshToken} from '../../hooks/useAuth'

const axiosAuth = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        'Content-Type': 'application/json',
        // Authorization : `Bearer ${localStorage.getItem("accessToken")}`
    },
})
axiosAuth.interceptors.request.use(
    (config) => {
      const token = getRefreshToken();
      if (token) {
        config.headers["Authorization"] = `Bearer ${localStorage.getItem("accessToken")}`;  // for Spring Boot back-end
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  axiosAuth.interceptors.response.use((response) => {
    if (response && response.data) {
        return response.data;
    }
    return response;
}, (error) => {
  if (error && error.response.data) {
    return error.response.data;
  }
    throw error;
});

export default axiosAuth;

