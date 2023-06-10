import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';

const DashboardLandingPage = () => {
    const {user} = useContext(AuthContext)
    return (
        <div className='absolute top-10'>
        <h2 className='text-4xl font-semibold'>Hello, <span className='text-accent font-bold uppercase'>{user?.displayName}</span> </h2>
        </div>
    );
};

export default DashboardLandingPage;