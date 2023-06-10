import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { toast } from 'react-hot-toast';

const Classes = () => {
    const [classes,setClasses] = useState([]);
    const {user} = useContext(AuthContext);
    const [role,setRole] = useState('')
    const [selectedClasses, setSelectedClasses] = useState([]);
    useEffect(()=>{
        axios.get(`http://localhost:5000/users?email=${user?.email}`)
        .then(res=>{
            const rol=  res?.data?.forEach(res=>{
                setRole(res);
            })
            
        })
    },[user,role])

    useEffect(()=>{
        axios.get(`http://localhost:5000/classes?status=accept`)
        .then(res=>{
            setClasses(res.data)
        })
        .catch(err=>{
            console.log(err);
        })
    },[])


    useEffect(() => {
        const storedClasses = JSON.parse(localStorage.getItem('selectedClasses')) || [];
        setSelectedClasses(storedClasses);
      }, []);
    
      const handleSelect = classId => {
        setSelectedClasses(prevSelectedClasses => [...prevSelectedClasses, classId]);
      };
    
      const handleButtonClick = classId => {
        handleSelect(classId);
        // Disable the select button
        const buttons = document.querySelectorAll('.select-button');
        buttons.forEach(button => {
          if (button.getAttribute('data-id') === classId) {
            button.disabled = true;
          }
        });
        // Store the selected class IDs in local storage
        localStorage.setItem('selectedClasses', JSON.stringify([...selectedClasses, classId]));
        toast.success('class is successfully selected')
      };


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

     <button className="btn btn-accent text-white"     title={classs._id}
                  data-id={classs._id} disabled={role?.role !== 'student' || selectedClasses.includes(classs._id)} onClick={() => handleButtonClick(classs._id)} >select</button>
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