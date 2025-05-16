import { createContext, useEffect, useState, useCallback } from "react";
import PropTypes from "prop-types";
import useAuthService, { registerLogoutCallback } from "../services/auth";

// Tạo Context
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [dataFetched, setDataFetched] = useState(false);

    const [isAuthenticated, setIsAuthenticated] = useState(() => {
        return sessionStorage.getItem("isAuthenticated") === "true";
    });

    const authService = useAuthService();

    // Gọi API /getMe để kiểm tra user hiện tại
    const fetchUser = useCallback(async () => {
        if (!isAuthenticated) return;

        try {
            setLoading(true);
            const res = await authService.getMe();
            setUser(res.user);
            setError(null);
            setDataFetched(true);
        } catch (err) {
            if (err.response?.status === 401) {
                try {
                    await authService.refreshToken();
                    const res = await authService.getMe();
                    setUser(res.user);
                    setError(null);
                } catch (refreshErr) {
                    console.error("Refresh failed:", refreshErr);
                    setUser(null);
                    setError("Session expired. Please log in again.");
                    setIsAuthenticated(false);
                    sessionStorage.removeItem("isAuthenticated");
                }
            } else {
                setError("Failed to fetch user");
            }
            setUser(null);
            setDataFetched(true);
        } finally {
            setLoading(false);
        }
    }, [authService, isAuthenticated]);


    // Login
    const login = async ({ email, password }) => {
        try {
            const res = await authService.login({ email, password });
            setUser(res.user);
            setIsAuthenticated(true);
            sessionStorage.setItem("isAuthenticated", "true");
            setError(null);
        } catch (err) {
            setError(err.response?.data?.error || "Login failed");
            throw err;
        }
    };

    // Logout
    const logout = useCallback(async () => {
        try {
            await authService.logout();
        } catch (err) {
            console.error("Logout error", err);
        } finally {
            setUser(null);
            setIsAuthenticated(false);
            sessionStorage.removeItem("isAuthenticated");
            setDataFetched(true);
            setError(null);
        }
    }, [authService]);

    useEffect(() => {
        registerLogoutCallback(logout)

        if (!dataFetched) {
            fetchUser();  // Gọi API fetch user
        }
    }, [fetchUser, dataFetched, logout]);

    return (
        <AuthContext.Provider value={{ user, login, logout, loading, error, isAuthenticated }}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export { AuthContext };
