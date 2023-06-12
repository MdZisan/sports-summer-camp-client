import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import { Link } from 'react-router-dom';

const MyClass = () => {
    const [classes,setClasses] = useState([]);

    const {user} = useContext(AuthContext)

    useEffect(()=>{
        fetch(`https://summersportcamp-production.up.railway.app/classes?email=${user?.email}`)
        .then(res=>res.json())
        .then(data=>{
            setClasses(data);
        })
    },[])

console.log(classes);

    return (
        <div className='mt-[100px] w-[95%]'>
           <div className="text-3xl font-bold text-center">My Classes</div>
      <div className="divider  h-[2px] bg-white"></div>
{/* Table  */}
        <div>
        <div className="overflow-x-auto">
  <table className="table text-xl">
    {/* head */}
    <thead className='text-white text-xl' >
      <tr>
        <th>#</th>
        <th>Class Name</th>
        <th>Status</th>
        <th>Total enrolled</th>
        <th>Available seats</th>
        <th>FeedBack</th>
        <th>Action</th>
      
      </tr>
    </thead>
    <tbody>
        {
            classes&&
            classes.map((clas,i)=><>
            
            <tr className='hover'>
        <th>{i+1}</th>
        <td>{clas?.name}</td>
        <td>{clas?.status}</td>
        <td>{clas?.studentEnrolled}</td>
        <td>{clas?.availableSeats}</td>
        <td>{clas?.feedback}</td>
        <td><button className="btn btn-sm btn-primary"><Link to={`/dashboard/updateClass/${clas?._id}`}>Update</Link></button></td>
      </tr>
            
            </>)
        }
      
    </tbody>
  </table>
</div>
        </div>
{/* Table  */}

        </div>
    );
};

export default MyClass;