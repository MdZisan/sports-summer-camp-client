import React, { useContext, useEffect, useState } from "react";

import { Navigate, useLocation } from "react-router-dom";

import { toast } from "react-hot-toast";
import { AuthContext } from "../Providers/AuthProvider";


const StudentRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [load,setload] = useState(true)
  const location = useLocation();
  const [role,setRole]= useState('')
  const token = localStorage.getItem('access-token');
  useEffect(()=>{
    fetch(`https://sports-summer-camp-server-three.vercel.app/users?email=${user?.email}`,{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
     .then(res=>res.json())
     .then(data=>{
         // console.log(data[0]?.role);
         setRole(data[0]?.role);
         if(role){
             setload(false)
         }
     })
   },[user,role])
 // console.log(role);
   
   if (loading||load) {
     return (
       <div className="h-screen flex justify-center mt-4">
         <p className="text-red-400 font-bold text-xl">ARE YOU A student? </p>
         <br />
         <progress className="progress w-56 mx-auto"></progress>
       </div>
     );
   }
   if ( role === 'student' &&user) {
     return children;
   } else if(role !== 'student'){
     toast.error(`You have to log in as admin/student`);
     return (
       <Navigate to="/login" state={{ from: location }} replace />
     );
   }
};

export default StudentRoutes;
