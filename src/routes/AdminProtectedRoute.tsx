import { ReactNode } from "react";

import { Navigate } from "react-router-dom";
import { useAppSelector } from "../redux/hook";
import { selectCurrentUser } from "../redux/features/auth/authSlice";

const AdminProtectedRoute = ({ children }: { children: ReactNode }) => {
  const user = useAppSelector(selectCurrentUser);

  if (user?.role !== "admin") {
    return <Navigate to="/login" replace={true} />;
  }

  return children;
};

export default AdminProtectedRoute;
