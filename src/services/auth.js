import axios from "axios";

const API_URL = axios.create({
    baseURL: 'https://moon-glow-store.onrender.com/api/auth',
    withCredentials: true
})

const useAuthService = () => {
    const login = async ({ email, password }) => {
        try {
            const response = await API_URL.post('/login', { email, password });
            return response.data;
        } catch (error) {
            console.error("Error logging in:", error.message);
            return null;
        }
    };

    const logout = async () => {
        try {
            const response = await API_URL.post('/logout');
            return response.data;
        } catch (error) {
            console.error("Error logging out:", error.message);
            return null;
        }
    };

    const getMe = async () => {
        try {
            const response = await API_URL.get('/me');
            return response.data;
        } catch (error) {
            console.error("Error fetching user data:", error.message);
            return null;
        }
    };

    return {
        login,
        logout,
        getMe
    };
}

export default useAuthService