import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import axios from 'axios';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutPayment from './CheckoutPayment';


const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
    const {user} = useContext(AuthContext)
const [allClass,setAllClass] =useState([])
const [reload,setReload] = useState(true)
const [allIDs, setAllIDs] = useState([]);
const [classId, setClassId] = useState([]);

useEffect(()=>{
    axios.get(`https://summersportcamp-production.up.railway.app/selectedClass?email=${user?.email}&classStatus=selected`)
    .then(res=>{
        setAllClass(res.data)
    })
 
},[reload,user])

useEffect(() => {
  const ids = allClass.map(item => item._id);
  const classesId =  allClass.map(item => item.classId);
  setAllIDs(ids);
  setClassId(classesId)
}, [allClass]);


console.log(allIDs);

const total = allClass?.reduce((accumulator, currentClass) => accumulator + currentClass.price, 0);

 

// console.log(total);
    return (
        <div>
           <h2 className='text-2xl font-semibold uppercase'>Total Amount to pay: $<span className='text-green-400 font-bold'>{total}</span></h2>
          <div className='w-full'>
          <Elements stripe={stripePromise}>
            <CheckoutPayment price={total} allIDs={allIDs} classId={classId}></CheckoutPayment>
           </Elements>
          </div>
        </div>
    );
};

export default Payment;