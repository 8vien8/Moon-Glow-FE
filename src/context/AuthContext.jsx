import { createContext, useEffect, useState, useCallback } from "react";
import PropTypes from "prop-types";
import useAuthService from "../services/auth";

// Tạo Context
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true); // true để đợi getMe chạy lần đầu
    const [error, setError] = useState(null);
    const [dataFetched, setDataFetched] = useState(false);

    const authService = useAuthService();

    // Gọi API /getMe để kiểm tra user hiện tại
    const fetchUser = useCallback(async () => {
        try {
            setLoading(true);
            const res = await authService.getMe();
            if (!res || !res.user) {
                setUser(null);
                throw new Error("Failed to fetch user");
            }
            setUser(res.user);
            console.log("User data:", res.user);
            setDataFetched(true); // Đánh dấu là đã lấy dữ liệu
        } catch (err) {
            setUser(null);
            setDataFetched(true);
            setError(err.response?.data?.error || "Failed to fetch user");
        } finally {
            setLoading(false);
        }
    }, [authService]);

    // Login
    const login = async ({ email, password }) => {
        try {
            const res = await authService.login({ email, password });
            setUser(res);
            setError(null);
        } catch (err) {
            setError(err.response?.data?.error || "Login failed");
            throw err;
        }
    };

    // Logout
    const logout = async () => {
        try {
            await authService.logout();
            setUser(null);
        } catch (err) {
            console.error("Logout error", err);
        }
    };

    useEffect(() => {
        if (!dataFetched) {
            fetchUser();  // Gọi API fetch user
        }
    }, [fetchUser, dataFetched, user]);

    return (
        <AuthContext.Provider value={{ user, login, logout, loading, error }}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export { AuthContext };
