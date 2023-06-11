import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import axios from 'axios';

const EnrolledClasses = () => {
    const [enrollClasses,setEnrollClasses]= useState([])
    const {user}= useContext(AuthContext);
    useEffect(()=>{
        axios.get(`http://localhost:5000/selectedClass?email=${user?.email}&classStatus=enrolled`)
        .then(res=>{
            console.log(res);
            setEnrollClasses(res.data)
        })
    },[user])
console.log(enrollClasses);
    return (
        <div>
            <h2>Enrolled Classes: {enrollClasses.length}</h2>
        </div>
    );
};

export default EnrolledClasses;