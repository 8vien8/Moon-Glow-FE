import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivateRoute = () => {
    const { user, loading } = useAuth();

    // Khi đang load user từ API
    if (loading) {
        return <div className="text-center mt-10">Loading...</div>;
    }

    if (!user) {
        return <Navigate to="/login" />;
    }
    return <Outlet />;
};

export default PrivateRoute;
