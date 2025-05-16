import axios from "axios";

const API_URL = axios.create({
    baseURL: 'https://moon-glow-store.onrender.com/api/auth',
    withCredentials: true
})

let logoutCallback = null

export const registerLogoutCallback = (callback) => {
    logoutCallback = callback
}

API_URL.interceptors.response.use(
    response => response,
    error => {
        if (error.response?.status === 401) {
            if (logoutCallback) logoutCallback();
        }
        return Promise.reject(error);
    }
);


const useAuthService = () => {
    const login = async ({ email, password }) => {
        try {
            const response = await API_URL.post('/login', { email, password });
            return response.data;
        } catch (error) {
            console.error("Error logging in:", error.message);
            throw error
        }
    };

    const logout = async () => {
        try {
            const response = await API_URL.post('/logout');
            return response.data;
        } catch (error) {
            console.error("Error logging out:", error.message);
            throw error
        }
    };

    const getMe = async () => {
        try {
            const response = await API_URL.get('/me');
            return response.data;
        } catch (error) {
            console.error("Error fetching user data:", error.message);
            throw error
        }
    };

    const refreshToken = async () => {
        try {
            const response = await API_URL.post('/refresh-token', null);
            return response.data;
        } catch (error) {
            console.error("Error refreshing token:", error.message);
            throw error
        }
    }

    return {
        login,
        logout,
        getMe,
        refreshToken,
        registerLogoutCallback
    };
}

export default useAuthService