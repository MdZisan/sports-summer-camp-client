import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Instructors = () => {
    const [instructors,setInstructors]=useState([])
    const token = localStorage.getItem('access-token');
    useEffect(()=>{
        axios.get('http://localhost:5000/users?role=instructor',{
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(res=>{
            setInstructors(res.data)
        })
        .catch(err=>{
            console.log(err);
        })
    },[])



    return (
        <div>
            
            <h2 className='text-2xl font-bold text-center'> Total Instructors: {instructors.length}</h2>
            <div className='divider'></div>

        <div className='p-10 grid grid-cols-1 md:grid-cols-4 gap-y-4'>
       
        {
            instructors?.map(instructor=><>
                  <div className="card w-72 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={instructor?.photo} alt="Shoes" className="rounded-xl h-[200px]" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{instructor?.name}</h2>
    <p>{instructor?.email }</p>
    <div className="card-actions">
      <button className="btn btn-primary" title='Coming soon' >see all classes</button>
    </div>
  </div>
</div>  
            
            </>)
        }

        </div>
        </div>
    );
};

export default Instructors;