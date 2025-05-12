import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import PropTypes from "prop-types";

const PrivateRoute = ({ allowedRoles }) => {
    const { user, loading } = useAuth();

    // Khi đang load user từ API
    if (loading) {
        return <div className="text-center mt-10">Loading...</div>;
    }

    if (!user || !allowedRoles.includes(user.role)) {
        return <Navigate to="/login" />;
    }
    
    return <Outlet />;
};

PrivateRoute.propTypes = {
    allowedRoles: PropTypes.array,
};

export default PrivateRoute;
