import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { FaDownload } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";

const AppDetailsPage = () => {
    const {id} = useParams();
const data = useLoaderData();
const product = data.find(p => String(p.id) === id)
if (!product) {
    return <p className="text-center font-bold">App not found</p>;
  }
    return (
      <div className='w-[80%] mx-auto'>
         <div className="card bg-base-100 p-5 shadow-sm hover:scale-105 transition ease-in-out">
                 <figure>
                   <img  className='w-full rounded-lg' src= {product.image} alt={product.title} />
                 </figure>
                 <div >
                   <p className='py-2'><span className='font-bold'>{product.title}: </span>{product.description}</p>
                   <div className='flex justify-between py-2'>
                       <div className='flex items-center font-bold gap-1'><p><FaDownload /></p><p>{product.downloads}</p></div>
                      <div className='flex items-center font-bold gap-1'><p><FaStar /></p><p>{product.ratingAvg}</p></div>
                   </div>
                 </div>
               </div>
      </div>
    );
};

export default AppDetailsPage;