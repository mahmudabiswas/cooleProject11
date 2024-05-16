import React, { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, isLoading } = useContext(AuthContext);
  if (isLoading) {
    return <span className="loading loading-infinity loading-lg"></span>;
  }

  if (!user?.email) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default PrivateRoute;
