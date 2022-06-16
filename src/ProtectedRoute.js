import React from "react";
import { Redirect, useLocation } from "react-router-dom";
import { useAppSelector } from "./redux/hooks/hooks";

const ProtectedRoute = ({ children }) => {
  debugger;
  const userLoginState = useAppSelector((state) => state.auth);
  let location = useLocation();
  if (!userLoginState.isLoggedIn) {
    return <Redirect to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectedRoute;
