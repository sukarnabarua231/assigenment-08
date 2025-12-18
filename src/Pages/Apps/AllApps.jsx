import React from 'react';
import { useLoaderData } from 'react-router';
import AllAppsCard from '../../Components/AllAppsCard/AllAppsCard';

const AllApps = () => {
    const products = useLoaderData();
    console.log(products)
    return (
        <div className=" px-2.5 py-[60px] max-w-[88%] mx-auto">
            <div className='text-center py-8'>
                <h1 className='text-3xl font-bold'>Our All Applications</h1>
            <p>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>
            <div className='flex justify-between'>
                <h1 className='text-2xl font-semibold py-4'>({products.length})Total Apps Found</h1>
                
            </div>
            <div  className='grid grid-cols-2 md:grid-cols-4 gap-5 '>
           {
            products.map(product => (<AllAppsCard key={product.id} product = {product}></AllAppsCard>))
           }
        </div>
        </div>
    );
};

export default AllApps;