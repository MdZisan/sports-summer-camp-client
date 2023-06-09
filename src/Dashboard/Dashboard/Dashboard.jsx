import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {


    const instructorItems = <>
    <div className='font-semibold text-lg text-white'>
    <li><Link>Add Class</Link></li>
    <li><Link>My Class</Link></li>
    <div className='divider bg-white h-[2px]'></div>
    </div>
    </>
    return (
        <div>
          <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
    {/* Page content here */}
    
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 h-full bg-accent text-base-content">
      {/* Sidebar content here */}
      {instructorItems}
    </ul>
  
  </div>
</div>
        </div>
    );
};

export default Dashboard;