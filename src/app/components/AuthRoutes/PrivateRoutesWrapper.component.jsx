import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRoutesWrapper({ isAuthenticated }) {
  return isAuthenticated ? <Outlet /> : <Navigate to="/landing" replace />;
}
