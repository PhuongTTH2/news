import axios from 'axios'
import {getAccessToken, getRefreshToken} from '../../hooks/useAuth'

const axiosClients = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        'Content-Type': 'application/json',

    },
})

axiosClients.interceptors.response.use((response) => {
    console.log('response.data',response.data)
    if (response && response.data) {
        return response.data;
    }
    return response;
}, async (error) => {
    // axiosClients.defaults.headers.common['refresh_token'] = `${localStorage.getItem("RefreshToken")}`;
    // const response = await axiosClients.get('/auth/refresh-token')
    // console.log(response);
    // if (response.data.message === "ok") {

    // }
    if (error && error.response.data) {
        console.log(error)
        return error.response.data;
    }
});

export default axiosClients;

