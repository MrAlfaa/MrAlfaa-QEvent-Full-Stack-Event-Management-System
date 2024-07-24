import axios from "axios"
import AuthenticationApi from "./AuthenticationApi";

const AxiosWithInterceptor = axios.create({
    baseURL: "/api",
})

AxiosWithInterceptor.interceptors.request.use((config) => {
    if (AuthenticationApi.isUserLoggedIn()) {
        config.headers.Authorization = AuthenticationApi.getToken();
    }
    return config
}, (err) => {
    console.log(err)
    return Promise.reject(err)
})

export default AxiosWithInterceptor;