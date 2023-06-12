import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const {error} = useRouteError()
    return (
        <div className=''>

            <div className='w-[90%]  mx-auto m-10 text-center '>
            
                   
            <img src="https://i.ibb.co/kxp9kyp/2704891.jpg" alt="" className='mx-auto h-[60vh]  w-[60%] '/>
            </div>
            <div className='text-center'>
            <h2 className='text-2xl font-bold'>{error?.message}</h2>
            <Link to={'/'} className='btn text-center'>GO BACK TO HOME</Link>
            </div>

        </div>
    );
};

export default ErrorPage;