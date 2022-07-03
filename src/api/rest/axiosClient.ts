import axios from 'axios'
import {getAccessToken} from '../../hooks/useAuth'

const axiosClient = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        'content-type': 'application/json',
        Authorization : `Bearer ${localStorage.getItem("accessToken")}`
    },
})

axiosClient.interceptors.response.use((response) => {
    if (response && response.data) {
        return response.data;
    }
    return response;
}, (error) => {

    throw error;
});

export default axiosClient;
