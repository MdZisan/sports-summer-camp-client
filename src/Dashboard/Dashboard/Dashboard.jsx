import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import DashboardLandingPage from './DashboardLandingPage';
import axios from 'axios';
import { AuthContext } from '../../Providers/AuthProvider';
import { MdArticle, MdAssignmentAdd, MdDashboard, MdDoneAll, MdHome, MdOutlineClass, MdOutlineManageAccounts, MdOutlineManageSearch, MdPayment, MdPendingActions, MdPeopleOutline, MdSelectAll } from "react-icons/md";

const Dashboard = () => {
  //TODO: tenstack use for data
  const token = localStorage.getItem('access-token');
  const [users,setusers]= useState('');
  const [role,setRole] =useState('')
  const {user} = useContext(AuthContext)

  useEffect(()=>{
    axios.get(`http://localhost:5000/users?email=${user?.email}`,{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then(res=>{
      // console.log(res.data[0].role);

      setusers(res);
      if(res?.data[0]?.role){
        setRole(res?.data[0]?.role)
      }
    })
  },[user]) 



const {pathname} = useLocation()
// console.log(pathname);
const dashboardLi =<>
 <li>
     {pathname==='/dashboard'|| <Link to={'/dashboard'}><MdDashboard/>Dashboard</Link>}
     {pathname==='/dashboard' && <NavLink to={'/dashboard'}><MdDashboard/>Dashboard</NavLink>}
    

    </li>

</>
    const instructorItems = <>
    <div className='font-semibold text-lg text-white'>
   {dashboardLi}
    <li><NavLink to={'addClass'}><MdAssignmentAdd/> Add Class</NavLink></li>
    <li><NavLink to={'myClass'}><MdArticle/> My Classes</NavLink></li>
   
    </div>
    </>

const studentItems = <>
        <div className='font-semibold text-lg text-white'>
        {dashboardLi}
        <li><NavLink to={'selectedClasses'}><MdSelectAll/> My Selected Classes</NavLink></li>
        <li><NavLink to={'enrolledClasses'}><MdDoneAll/> My Enrolled Classes</NavLink></li>
        <li><NavLink to={'payment'}><MdPayment/> Payment</NavLink></li>
        <li><NavLink to={'paymentHistory'}><MdPendingActions/> Payment History</NavLink></li>
         </div>


</>

const adminItems = <>
    <div className='font-semibold text-lg text-white'>
   {dashboardLi}
        <li><NavLink to={'manageClasses'}><MdOutlineManageSearch/> Manage Classes</NavLink></li>
        <li><NavLink to={'manageUsers'}><MdOutlineManageAccounts/>Manage Users</NavLink></li>
         </div>

</>



    return (
        <div>
          <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
    {/* Page content here */}

   <DashboardLandingPage/>
   
    <Outlet></Outlet>
   
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 h-full bg-accent text-base-content">
      {/* Sidebar content here */}
      { role==='instructor' && instructorItems}
      {role==='student' && studentItems}
      {role==='admin' && adminItems}
      <div className='divider bg-white h-[2px]'></div>
      <div className='font-semibold text-lg text-white'>
            <li><NavLink to={'/'}><MdHome/> Home</NavLink></li>
      <li><NavLink to={'/instructors'}><MdPeopleOutline/> Instructors</NavLink></li>
            <li><NavLink to={'/classes'}><MdOutlineClass/> Classes</NavLink></li>
      </div>
    </ul>
  
  </div>
</div>
        </div>
    );
};

export default Dashboard;