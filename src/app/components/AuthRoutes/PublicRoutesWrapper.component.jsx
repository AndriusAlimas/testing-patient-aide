import { Navigate, Outlet } from "react-router-dom";

export default function PublicRoutesWrapper({ isAuthenticated }) {
  return isAuthenticated ? <Navigate to="/dashboard" replace /> : <Outlet />;
}
