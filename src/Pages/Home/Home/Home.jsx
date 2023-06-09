import React from 'react';
import Banner from '../Banner/Banner';
import PopulerClasses from '../PopulerClasses/PopulerClasses';
import PopulerInstructors from '../PopulerInstructors/PopulerInstructors';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopulerClasses></PopulerClasses>
            <PopulerInstructors></PopulerInstructors>
        </div>
    );
};

export default Home;    