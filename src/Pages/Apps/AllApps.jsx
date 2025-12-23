import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import AllAppsCard from '../../Components/AllAppsCard/AllAppsCard';

const AllApps = () => {
    
    const loaderData = useLoaderData();
    const products = Array.isArray(loaderData) ? loaderData : [];

    const [search, setSearch] = useState('');
    const term = search.trim().toLocaleLowerCase();

    const filteredItem = term
    ? products.filter(product =>
        product?.title?.toLowerCase().includes(term) 
      )
    : products;
   
    console.log(products)
    return (
        <div className=" px-2.5 py-[60px] max-w-[88%] mx-auto">
            <div className='text-center py-8'>
                <h1 className='text-3xl font-bold'>Our All Applications</h1>
            <p>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>
            <div className='flex justify-between items-center '>
                <h1 className='text-2xl font-semibold py-4'>({filteredItem.length})Total Apps Found</h1>
                <label className="input">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g strokeLinejoin="round"strokeLinecap="round"strokeWidth="2.5"fill="none"stroke="currentColor">
      <circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></g></svg>
      <input value={search} onChange={e => setSearch(e.target.value)} type="search" required placeholder="Search" /></label>
            </div>

        {filteredItem.length === 0 ? ( <p className="text-center py-10 text-gray-500">No apps found</p>) :
         ( <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {filteredItem.map(product => (
            <AllAppsCard key={product.id} product={product}/>))}
        </div>)}

        </div>
    );
};

export default AllApps;