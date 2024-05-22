/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../firebase/AuthProvider";

const Private_Route = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation()

    if (loading) {
        return <span className="loading loading-ring loading-6xl"></span>;
    }

    if (user) {
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace />;
};

export default Private_Route;
