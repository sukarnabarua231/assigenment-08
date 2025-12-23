import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { FaDownload } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { TbFileLike } from "react-icons/tb";


const AppDetailsPage = () => {
    const {id} = useParams();
const data = useLoaderData();
const product = data.find(p => String(p.id) === id)
if (!product) {
    return <p className="text-center font-bold">App not found</p>;
  }
    return (
      <div className='w-[80%] mx-auto grid grid-rows-3 py-5'>
         <div className='flex gap-10 items-center'>
          <div><img src={product.image} alt="" /></div>
          <div className=''>
            <div>
              <h1 className='font-semibold text-2xl'>{product.title}: {product.description}</h1>
              <p className='font-semibold'>Developed by: <span className='text-violet-600'>{product.companyName}</span></p>
            </div>
           <div className='mt-5 text-gray-400'> < hr /></div>
           <div className='flex gap-6 mt-5'>
            <div>
              <p className='text-green-800 text-3xl'><FaDownload /></p>
              <p>Downloads</p> 
              <p className='text-2xl font-bold'>{product.downloads}k</p>
            </div>
            <div>
              <p className='text-orange-400 text-3xl'><FaRegStar /></p>
              <p>Average Ratings</p> 
              <p className='text-2xl font-bold'>{product.ratingAvg}</p>
            </div>
            <div>
              <p className='text-purple-500 text-3xl'><TbFileLike /></p>
              <p>Total Reviews</p> 
              <p className='text-2xl font-bold'>{product.reviews}k</p>
            </div>
           </div>
           <button className='btn text-white p-3 bg-[#00d390] mt-4'>Install Now</button>
          </div>
         </div>
         <div></div>
         <div>
          <p className='font-bold'>Description:</p>
          <p> {product.longDescription}</p>
         </div>
      </div>
    );
};

export default AppDetailsPage;