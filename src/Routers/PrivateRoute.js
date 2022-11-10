import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../components/Loading";
import { AuthContext } from "../Context/AuthProvider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <Loading></Loading>
    );
  }

  if (!user) {
    return (
      <Navigate to="/signin" state={{ from: location }} replace></Navigate>
    );
  }
  return children;
};

export default PrivateRoute;
