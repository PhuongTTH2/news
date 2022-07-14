import axios from 'axios'
import {getAccessToken, getRefreshToken} from '../../hooks/useAuth'
import {headerRefreshToken} from 'api/rest/header'
import { refreshTokenSuccess } from "slices";
import { useAppDispatch } from "app/hooks";

const axiosClients = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        'Content-Type': 'application/json',

    },
    // body: {
    //     mode: 'raw'
    // }
})
axiosClients.interceptors.request.use(
    (config) => {
          // if(error.response.status ===401){
    //     // originalRequest._retry = true;
    //     const data = await axios.get(process.env.REACT_APP_API_URL + '/auth/refresh-token',{ headers: headerRefreshToken() });
    //     if(data.data.message === 'ok'){
    //         axiosClients.defaults.headers.common['access_token'] = `${data.data.access_token}`
    //         return axiosClients(originalRequest);
    //     }
    // }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );


axiosClients.interceptors.response.use((response) => {
    if (response && response.data) {
        return response.data;
    }
    return response;
}, async (error) => {
    console.log('error',error)
    const originalRequest = error.config;
    if(error.response.status ===401){
        const data = await axios.get(process.env.REACT_APP_API_URL + '/auth/refresh-token',{ headers: headerRefreshToken() });
        if(data.data.message === 'ok'){
            useAppDispatch()(refreshTokenSuccess(data.data.access_token));
            axiosClients.defaults.headers.common['access_token'] = `${data.data.access_token}`
            return axiosClients(originalRequest);
        }
    }

    if (error && error.response.data) {
        return error.response.data;
    }
});

export default axiosClients;

