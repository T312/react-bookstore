import { Navigate, Outlet } from "react-router-dom";
import { React } from "react";
const ProtectedRoute = () => {
  const token = window.localStorage.getItem("accessToken");
  return token ? (
    <>
      <Outlet />
    </>
  ) : (
    <Navigate to="/login" />
  );
};

export default ProtectedRoute;
