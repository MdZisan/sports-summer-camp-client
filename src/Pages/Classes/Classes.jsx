import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Classes = () => {
    const [classes,setClasses] = useState([]);

    useEffect(()=>{
        axios.get(`http://localhost:5000/classes?status=accept`)
        .then(res=>{
            setClasses(res.data)
        })
        .catch(err=>{
            console.log(err);
        })
    },[])


    return (
        <div>
              <h2 className='text-2xl font-bold text-center'> Total Classes: {classes.length}</h2>
            <div className='divider'></div>
            <div className='p-10 grid grid-cols-1 md:grid-cols-4 gap-y-4'>
       
       {
           classes?.map(classs=><>
                 <div className="card w-72 bg-base-100 shadow-xl">
 <figure className="px-10 pt-10">
   <img src={classs?.image} alt="Shoes" className="rounded-xl h-[200px]" />
 </figure>
 <div className="card-body items-center text-center">
   <h2 className="card-title">{classs?.name}</h2>
  <p> <span className='font-bold'>Instructor</span>  <br /> {classs?.instructorName}</p>
  <p> <span className='font-bold'>Available Seats</span> <br /> {classs?.availableSeats}</p>
  <p> <span className='font-bold'>Price</span> <br />$ {classs?.price}</p>
   <div className="card-actions">
     <button className="btn btn-accent text-white" title='Coming soon' >select</button>
   </div>
 </div>
</div>  
           
           </>)
       }

       </div>

        </div>
    );
};

export default Classes;