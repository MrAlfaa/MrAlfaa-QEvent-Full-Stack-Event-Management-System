import axios from 'axios'

export const USER_NAME = "username"
export const USER_TC = "tc"
export const USER_AUTHORITY = "authority"
export const USER_TOKEN = "token"

class AuthenticationApi {

    async executeAuthentication(username, password) {
        const loginResponse = await axios.post("/api/login", {username, password});
        return loginResponse;
    }

    registerSuccessfulLogin(username, tc, authority, token) {
        sessionStorage.setItem(USER_NAME, username);
        sessionStorage.setItem(USER_TC, tc);
        sessionStorage.setItem(USER_AUTHORITY, authority);
        sessionStorage.setItem(USER_TOKEN, "Bearer " + token);
    }

    setAxiosInterceptors(token) {
        axios.interceptors.request.use(
            (config) => {
                if (this.isUserLoggedIn())
                    config.headers.authorization = token;
                return config;
            }
        );
    }

    isUserLoggedIn() {
        let user = sessionStorage.getItem(USER_NAME);
        return user !== null;
    }

    getToken() {
        let user = sessionStorage.getItem(USER_TOKEN);
        if (user === null) return "";
        return user;
    }

    getUsername() {
        let user = sessionStorage.getItem(USER_NAME);
        if (user === null) return "";
        return user;
    }

    getUserAuthentication() {
        let auth = sessionStorage.getItem(USER_AUTHORITY);
        if (auth === null) return "";
        return auth;
    }

    getUserTc() {
        let tc = sessionStorage.getItem(USER_TC);
        if (tc === null) return "";
        return tc;
    }

    logout() {
        sessionStorage.removeItem(USER_NAME);
        sessionStorage.removeItem(USER_AUTHORITY);
        sessionStorage.removeItem(USER_TC);
    }

}

export default new AuthenticationApi()