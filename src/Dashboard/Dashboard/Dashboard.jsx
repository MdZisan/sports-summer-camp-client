import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import DashboardLandingPage from './DashboardLandingPage';

const Dashboard = () => {


    const instructorItems = <>
    <div className='font-semibold text-lg text-white'>
    
    <li><NavLink to={'addClass'}>Add Class</NavLink></li>
    <li><NavLink to={'myClass'}>My Class</NavLink></li>
   
    </div>
    </>
    return (
        <div>
          <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
    {/* Page content here */}

    <DashboardLandingPage></DashboardLandingPage>
    <Outlet></Outlet>
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 h-full bg-accent text-base-content">
      {/* Sidebar content here */}
      {instructorItems}
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