import React from 'react';
import { Link, useLoaderData } from 'react-router';  

import TrendingAppsCard from '../trandingAppsCard/TrendingAppsCard';

const TrendingApps = () => {
    const products = useLoaderData();
    const featuredProducts = products.slice(0,8)
    return (
        <div className=" p-2.5 max-w-[88%] mx-auto">
           <div className='text-center py-8'>
             <h1 className='text-3xl font-bold'>Trending Apps</h1>
            <p className='pt-3'>Explore All Trending Apps on the Market developed by us</p>

           </div>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-5 '>
              {
                featuredProducts.map(product => (<TrendingAppsCard key={product.id} product= {product}></TrendingAppsCard>))
            }
          </div>
          <div className='flex justify-center items-center py-8'>
           <Link to='/AllApps'> <button className=
           'btn px-[50px] py-2 bg-[linear-gradient(125deg,#632ee3,#9f62f2)] text-white hover:scale-105'>Show All</button></Link>
          </div>
        </div>
    );
};

export default TrendingApps;