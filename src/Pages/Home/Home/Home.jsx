import React from 'react';
import Banner from '../Banner/Banner';
import PopulerClasses from '../PopulerClasses/PopulerClasses';
import PopulerInstructors from '../PopulerInstructors/PopulerInstructors';
import AllCounts from '../AllCounts/AllCounts';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopulerClasses></PopulerClasses>
            <PopulerInstructors></PopulerInstructors>
            <AllCounts></AllCounts>
        </div>
    );
};

export default Home;    