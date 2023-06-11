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
        <div className='mt-[100px]'>
       
        <h2 className='text-2xl font-bold uppercase text-center'>Enrolled Classes: {enrollClasses.length} </h2>
       
        
        <div className="divider h-[2px] bg-white"></div>

        <div>
        <div className="overflow-x-auto">
<table className="table">
{/* head */}
<thead className='text-white text-xl'>
  <tr>
    <th>#</th>
    <th>photo</th>
    <th>Name</th>
    <th>Paid</th>
    <th>Status</th>
   
  </tr>
</thead>
<tbody className='text-lg'>
  
  {
    enrollClasses?.map((singleClass,i)=><tr key={singleClass._id}>
    <td>{i+1}</td>
    <td>
      <div className="flex items-center space-x-3">
        <div className="avatar">
          <div className="mask mask-squircle w-12 h-12">
            <img src={singleClass.image} />
          </div>
        </div>
       
      </div>
    </td>
    <td>{singleClass?.name}</td>
    <td>${singleClass?.price}</td>
    
    <th>
      <button className="btn bg-green-600 border-none text-white btn-xs">enrolled</button>
    </th>
  </tr>
 )
  }
</tbody>

</table>
</div>

        </div>
    </div>
    );
};

export default EnrolledClasses;