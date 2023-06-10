import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';

const ManageUsers = () => {
    const [users,setUsers] = useState([]);
    const [updaterole,setRole]=useState(true)
    useEffect(()=>{
        axios.get('http://localhost:5000/users')
        .then(res=>{
            setUsers(res?.data);
        })
    },[updaterole])

const handleRole =(id,role)=>{
console.log(id,role);
        fetch(`http://localhost:5000/users/${id}?role=${role}`,{
    method:'PATCH',
    headers:{'content-type':'application/json'},
        })
        .then(res=>res.json())
        .then(data=>{
            console.log('update role',data);
            if(data.modifiedCount){
                toast.success(`user updated as ${role}`);
                setRole(!updaterole)
            }
        })


}


    return (
        <div className='1/3  mt-20'>
            <div className="divider h-[2px] bg-white"></div>
            <h2 className='text-3xl font-semibold text-center'>Total Users: {users.length}</h2>
            <div className="divider h-[2px] bg-white"></div>
            
      
    
       <div>
       {users &&
            users.map(user=><div key={user?._id}>
            
            <div className='w-[97%] mx-auto mb-3 '>
             <div className='bg-white flex p-2 rounded-lg  items-center'> 
                <div className='w-1/4'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSXIp9M5Q4rT_1ehshgdUGg5E9NnDZgYEG-w&usqp=CAU" alt=""  className='w-full'/>
                </div>
                <div className='text-black flex w-4/5 px-5'>
                    <div className='flex-1 my-auto'>
                        <p>{user?.name}</p>
                            <p>{user?.role}</p>
                        </div>
                    <div className='flex flex-col w-1/2 gap-2' >
                <button className="btn btn-error text-white btn-sm" disabled={user?.role==='admin'} onClick={()=>handleRole(user?._id,'admin')}>
                    Make Admin
                    </button>
                    <button className="btn btn-success text-white btn-sm" disabled={user?.role==='instructor'|| user?.role==='admin'} onClick={()=>handleRole(user?._id,'instructor')}>Make Instructor</button>

                    </div>


                </div>

                
                </div>   
       

        </div>
            
            </div>)
        }
       </div>
        
        </div>
    );
};

export default ManageUsers;