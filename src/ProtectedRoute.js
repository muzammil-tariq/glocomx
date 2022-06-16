import jwtDecode from "jwt-decode";
import React from "react";
import { Redirect, useLocation } from "react-router-dom";
import { useAppSelector } from "./redux/hooks/hooks";
import { useHistory } from "react-router-dom";
const ProtectedRoute = ({ children }) => {
  const history = useHistory();
  React.useEffect(() => {
    decoded();
  }, []);
  const decoded = () => {
    try {
      const token = localStorage.getItem("token");
      let decoded = jwtDecode(token);
      if (Date.now() >= decoded.exp * 1000 || !token) {
        throw Error("token expired");
      }
    } catch (error) {
      localStorage.removeItem("token");
      history.push("/");
    }
  };

  const userLoginState = useAppSelector((state) => state.auth);
  let location = useLocation();
  if (!userLoginState.isLoggedIn) {
    return <Redirect to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectedRoute;
