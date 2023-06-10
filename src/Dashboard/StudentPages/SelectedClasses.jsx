import axios from 'axios';
import React, { useEffect, useState } from 'react';

const SelectedClasses = () => {
const [allClass,setAllClass] =useState([])
const [selectedClass,setSelectedClass]=useState([])
useEffect(()=>{
    axios.get('http://localhost:5000/classes')
    .then(res=>{
        setAllClass(res.data)
    })
    
},[])


    const selectedClassesId = JSON.parse(localStorage.getItem('selectedClasses'))
    useEffect(() => {
        if (selectedClassesId) {
            selectedClassesId.forEach(id => {
              const oneClass = allClass.find(classItem => classItem._id === id);
              if (oneClass && !selectedClass.some(classItem => classItem._id === id)) {
                setSelectedClass(prevState => [...prevState, oneClass]);
              }
            });
          }
        }, [selectedClassesId, allClass, selectedClass]);
console.log(selectedClass);
    // console.log(selectedClassesId);
    return (
        <div>
            <h2 className='text-2xl font-bold text-center uppercase'>selected Classes: {selectedClassesId.length}</h2>
            <div className="divider h-[2px] bg-white"></div>

            <div>
            

            </div>
        </div>
    );
};

export default SelectedClasses;