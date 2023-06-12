import React from 'react';
import CountUp from 'react-countup';

const AllCounts = () => {
    return (
        <div className='text-center my-4'>
            <div className="stats stats-vertical lg:stats-horizontal shadow lg:w-full">
  
  <div className="stat">
    <div className="stat-title"> Total Student</div>
    <div className="stat-value"><CountUp end={14701} duration={20} delay={1}/></div>
    <div className="stat-desc">Jan 1st - Feb 1st</div>
  </div>
  
  <div className="stat">
    <div className="stat-title">New Enroll Student</div>
    <div className="stat-value"><CountUp end={1000} duration={20} delay={1}/></div>
    <div className="stat-desc">↗︎ 400 (22%)</div>
  </div>
  
  <div className="stat">
    <div className="stat-title">Total Instructor Registers</div>
    <div className="stat-value">< CountUp end={100} duration={30} delay={1}/> </div>
    <div className="stat-desc">↘︎ 90 (14%)</div>
  </div>
  
</div>
        </div>
    );
};

export default AllCounts;