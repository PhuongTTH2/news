import axios from 'axios'
import {headerRefreshToken} from 'api/rest/header'
import { isEmpty } from "lodash";
const axiosClients = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        'Content-Type': 'application/json',

    }
})
axiosClients.interceptors.request.use(
    async (config) => {
        const date = new Date();
        const isExpired = localStorage.getItem("ExpiresIn") > date.getTime()
        if(isEmpty(localStorage.getItem("ExpiresIn"))){
            return config;
        }else{
            if (isExpired ) {
                return config
            }else{
                const data = await axios.get(process.env.REACT_APP_API_URL + '/auth/refresh-token',{ headers: headerRefreshToken(localStorage.getItem("RefreshToken")) });
                if(data.data.message === 'ok'){
                    axiosClients.defaults.headers.common['access_token'] = `${data.data.access_token}`
                    localStorage.setItem("AccessToken",data.data.access_token)
                    localStorage.setItem("ExpiresIn", Date.now() + 86400)
                    return config;
                }
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

