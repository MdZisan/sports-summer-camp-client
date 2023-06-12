import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';

const PaymentHistory = () => {
    const [history,setHistory]= useState([]);
    const {user} = useContext(AuthContext)
    useEffect(()=>{
        axios.get(`https://summersportcamp-production.up.railway.app/paymentHistory?email=${user?.email}`)
        .then(res=>{
            setHistory(res.data)
        })
    },[user])

    console.log(history);
    return (
        <div className='mt-[100px]'>
       
        <h2 className='text-2xl font-bold uppercase text-center'>Payment history: {history.length} </h2>
       
        
        <div className="divider h-[2px] bg-white"></div>

        <div>
        <div className="overflow-x-auto">
<table className="table">
{/* head */}
<thead className='text-white text-xl'>
  <tr>
    <th>#</th>
    <th>Transaction Id</th>
    <th>Date</th>
    <th>Time</th>
    <th>Paid</th>
    <th>Status</th>
   
  </tr>
</thead>
<tbody className='text-lg'>
  
  {
    history?.map((singleHistory,i)=><tr key={singleHistory._id}>
    <td>{i+1}</td>
    <td>
    {singleHistory.transactionId} 
    </td>
   
    <td>{singleHistory?.date.split('T')[0]}</td>
    <td>{singleHistory?.date?.split('T')[1]?.split('.')[0]}</td>
    <td>${singleHistory?.price}</td>
    
    <th>
      <button className="btn bg-green-600 border-none text-white btn-xs">paid</button>
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

export default PaymentHistory;