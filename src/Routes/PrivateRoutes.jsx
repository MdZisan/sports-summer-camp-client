import React, { useContext } from "react";

import { Navigate, useLocation } from "react-router-dom";

import { toast } from "react-hot-toast";
import { AuthContext } from "../Providers/AuthProvider";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  
  if (loading) {
    return (
      <div className="h-screen flex justify-center mt-4">
        <progress className="progress w-56 mx-auto"></progress>
      </div>
    );
  }
  if (user) {
    return children;
  }
  else{
      toast.error('You have to log in')
    return ( 
    <Navigate to={"/login"} state={{ from: location }} replace></Navigate>
    )
  }
};

export default PrivateRoutes;
