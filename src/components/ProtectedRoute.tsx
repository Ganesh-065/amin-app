import React from "react";
import { Navigate } from "react-router-dom";
import useUserStore from "../redux/userStore"; // Assuming you're using Zustand for state management

interface ProtectedRouteProps {
  children: React.ReactElement; // The children that should be rendered if authenticated
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { firstName, password } = useUserStore((state) => state.user); // Replace with your actual state structure

  const isAuthenticated = !!firstName && !!password; // Basic check for authentication

  if (!isAuthenticated) {
    return <Navigate to="/register" replace />; // Redirect to login if not authenticated
  }

  return children; // Render the children (protected content) if authenticated
};

export default ProtectedRoute;
