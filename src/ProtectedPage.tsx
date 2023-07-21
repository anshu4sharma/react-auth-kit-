import { Outlet, Navigate } from "react-router-dom";
import { useIsAuthenticated } from "react-auth-kit";

export const ProtectedPages: any = () => {
  const isAuthenticated = useIsAuthenticated();
  console.log(isAuthenticated(), "isAuthenticated()");

  return isAuthenticated() ? <Outlet /> : <Navigate to={"/signin"} />;
};

export const ProtectedAuthPages = () => {
  const isAuthenticated = useIsAuthenticated();
  console.log(isAuthenticated(), "isAuthenticated()");
  return isAuthenticated() ? <Navigate to={"/dashboard"} /> : <Outlet />;
};
