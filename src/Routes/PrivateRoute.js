import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({ children }) => {
  const { pathname } = useLocation();
  const {isLoading, email} = useSelector((state)=>state.auth.user)

  if (isLoading) {
    return <p>Loading..</p>;
  }

  if (!isLoading && !email) {
    return <Navigate to='/login' state={{ path: pathname }} />;
  }

  return children;
};

export default PrivateRoute;
