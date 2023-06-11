import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';

const SelectedClasses = () => {
    const {user} = useContext(AuthContext)
const [allClass,setAllClass] =useState([])
const [selectedClass,setSelectedClass]=useState([])
useEffect(()=>{
    axios.get(`http://localhost:5000/selectedClass?email=${user?.email}`)
    .then(res=>{
        setAllClass(res.data)
    })
    
},[])



console.log(allClass);

// for Local storage 
    // const selectedClassesId = JSON.parse(localStorage.getItem('selectedClasses'))
    // useEffect(() => {
    //     if (selectedClassesId) {
    //         selectedClassesId.forEach(id => {
    //           const oneClass = allClass.find(classItem => classItem._id === id);
    //           if (oneClass && !selectedClass.some(classItem => classItem._id === id)) {
    //             setSelectedClass(prevState => [...prevState, oneClass]);
    //           }
    //         });
    //       }
    //     }, [selectedClassesId, allClass, selectedClass]);
// console.log(selectedClass);


// if(selectedClass.length>0){
   

//     const total = selectedClass?.reduce((pre,current)=>pre+current.price,0)

//    console.log(total);
// }
    return (
        <div>
            <h2 className='text-2xl font-bold text-center uppercase'>selected Classes: </h2>
            <div className="divider h-[2px] bg-white"></div>

            <div>
                    

            </div>
        </div>
    );
};

export default SelectedClasses;