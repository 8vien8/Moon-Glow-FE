import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Loading from "../components/Loading";

const PrivateRoute = () => {
    const { isAuthenticated, loading } = useAuth();

    // Khi đang load user từ API
    if (loading && isAuthenticated) {
        return <Loading />;
    }

    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }
    
    return <Outlet />;
};

export default PrivateRoute;
