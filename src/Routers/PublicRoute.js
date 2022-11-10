import React, { useContext } from "react";
import Loading from "../components/Loading";
import { AuthContext } from "../Context/AuthProvider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { loading } = useContext(AuthContext);

  if (loading) {
    return <Loading></Loading>;
  }
  else {
    return children;
  }

};

export default PrivateRoute;
