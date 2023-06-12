import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';

const SelectedClasses = () => {
  // const [selectedClass,setSelectedClass]=useState([])
    const {user} = useContext(AuthContext)
const [allClass,setAllClass] =useState([])
const [reload,setReload] = useState(true)
const [allIDs, setAllIDs] = useState([]);
useEffect(()=>{
    axios.get(`https://summersportcamp-production.up.railway.app/selectedClass?email=${user?.email}&classStatus=selected`)
    .then(res=>{
        setAllClass(res.data)
    })
 
},[reload,user])

useEffect(() => {
  const ids = allClass.map(item => item._id);
  setAllIDs(ids);
}, [allClass]);


console.log(allIDs);




const handleDelete=(id)=>{
   axios.delete(`https://summersportcamp-production.up.railway.app/selectedClass/${id}`)
    .then(res=>{
        console.log(res);
        if(res.data.deletedCount>0){
            toast.success('deleted done')
            setReload(!reload)
        }
    })
    .catch(err=>{
        console.log(err);
    })

}
const total = allClass.reduce((accumulator, currentClass) => accumulator + currentClass.price, 0);


// console.log(allClass);


    return (
        <div className='mt-[100px]'>
            <div className='flex justify-between items-center'>
            <h2 className='text-2xl font-bold uppercase'>selected Classes: {allClass.length} </h2>
            <h2 className='text-xl font-semibold uppercase'>Total Price: <span className='font-bold text-success'>{total}</span></h2>
            </div>
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
        <th>Status</th>
        <th>Action</th>
        <th><button className="btn btn-warning btn-sm w-full text-white"><Link to={'/dashboard/payment'}>Pay</Link></button></th>
      </tr>
    </thead>
    <tbody className='text-lg'>
      
      {
        allClass?.map((singleClass,i)=><tr key={singleClass._id}>
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
          <button className="btn btn-error text-white btn-xs" onClick={()=>handleDelete(singleClass?._id)}>Delete</button>
        </th>
        <th>
          <button className="btn bg-red-600 border-none text-white btn-xs">Not enrolled</button>
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

export default SelectedClasses;













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