import axios from 'axios';
import React from 'react';
import { toast } from 'react-hot-toast';
import { Navigate, useLoaderData, useNavigate, useParams } from 'react-router-dom';


const UpdateClass = () => {
    const data = useLoaderData();
    // console.log(data);
    const {id} = useParams()
    const Navigate = useNavigate()

    const handleSubmit=(event)=>{
        event.preventDefault();
      
const seats = parseInt(event.target.seats.value)
        axios.patch(`https://summersportcamp-production.up.railway.app/updateClasses/${id}`,{seats:seats})
        .then(res=>{
            console.log(res.data);
            if(res.data.modifiedCount>0){
                toast.success('update Successful')
                Navigate('/dashboard/myClass')
            }
        })

        console.log(parseInt(event.target.seats.value));

    }


    return (
        <div className='w-full text-center text-2xl font-semibold'>
           {data.map(name=><>
           <h2>Update: {name.name}</h2>
            <h2>Current Seat: {name.availableSeats}</h2>
           </>)}


<div className='w-3/4 mx-auto mt-2'>
        <form onSubmit={handleSubmit}>

        <input type="number" className='w-1/2 rounded-lg p-2 text-black' name="seats" id="" required placeholder='Updated Seats' />
        
<br />
            <input type="submit" value="Update" className='btn mt-2 btn-accent text-white' />
        </form>

</div>

        </div>
    );
};

export default UpdateClass;