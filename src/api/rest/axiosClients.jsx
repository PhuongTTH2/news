import axios from 'axios'
import {headerRefreshToken} from 'api/rest/header'
import { isEmpty } from "lodash";
import { STORAGE_KEY } from 'constants/index'
const axiosClients = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        'Content-Type': 'application/json',

    }
})

axiosClients.interceptors.request.use(
    async (config) => {
        let dateExpired = localStorage.getItem(STORAGE_KEY.EXPIRES_IN);
        let isExpired = Number(dateExpired) > Number(Date.now()/1000)
        if (isExpired) {
            return config
        }else{
            const data = await axios.get(process.env.REACT_APP_API_URL + '/auth/refresh-token',{ headers: headerRefreshToken() });
            if(data.data.message === 'ok'){
                axiosClients.defaults.headers.common['access_token'] = `${data.data.access_token}`
                localStorage.setItem(STORAGE_KEY.ACCESS_TOKEN, data.data.access_token)
                localStorage.setItem(STORAGE_KEY.EXPIRES_IN, Number(Date.now()/1000) + Number(86400))
                return config;
            }
        }
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
    if (error && error.response.data) {
        return error.response.data;
    }
});

export default axiosClients;

