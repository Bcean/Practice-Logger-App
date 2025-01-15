import React from "react";
import { Navigate } from "react-router-dom";
export const PrivateRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem("token"); //check if user has a token

  return isAuthenticated ? children : <Navigate to="/Login" />; //if user has token, show the children, else redirect to login page
};
