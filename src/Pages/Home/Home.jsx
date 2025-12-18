import React from 'react';
import Banner from '../../Components/Banner/Banner';
import TrendingApps from '../../Components/trendinApps/TrendingApps';


const Home = () => {
    
    return (
        <div className='w-full '>
           <Banner></Banner>
           <TrendingApps></TrendingApps>
        </div>
    );
};

export default Home;