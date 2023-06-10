import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import DashboardLandingPage from './DashboardLandingPage';
import axios from 'axios';
import { AuthContext } from '../../Providers/AuthProvider';

const Dashboard = () => {
  //TODO: tenstack use for data
  //TODO: react icon set for dashboard items
  const [users,setusers]= useState('');
  const [role,setRole] =useState('')
  const {user} = useContext(AuthContext)

  useEffect(()=>{
    axios.get(`http://localhost:5000/users?email=${user?.email}`)
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
    const instructorItems = <>
    <div className='font-semibold text-lg text-white'>
    <li>
     {pathname==='/dashboard'|| <Link to={'/dashboard'}>Dashboard</Link>}
     {pathname==='/dashboard' && <NavLink to={'/dashboard'}>Dashboard</NavLink>}
    

    </li>
    <li><NavLink to={'addClass'}>Add Class</NavLink></li>
    <li><NavLink to={'myClass'}>My Classes</NavLink></li>
   
    </div>
    </>

const studentItems = <>
        <div className='font-semibold text-lg text-white'>
        <li><NavLink to={'selectedClasses'}>My Selected Classes</NavLink></li>
        <li><NavLink to={'enrolledClasses'}>My Enrolled Classes</NavLink></li>
         </div>


</>

const adminItems = <>
    <div className='font-semibold text-lg text-white'>
        <li><NavLink to={'manageClasses'}>Manage Classes</NavLink></li>
        <li><NavLink to={'manageUsers'}>Manage Users</NavLink></li>
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
            <li><NavLink to={'/'}>Home</NavLink></li>
      <li><NavLink to={'/instructors'}>Instructors</NavLink></li>
            <li><NavLink to={'/classes'}>Classes</NavLink></li>
      </div>
    </ul>
  
  </div>
</div>
        </div>
    );
};

export default Dashboard;