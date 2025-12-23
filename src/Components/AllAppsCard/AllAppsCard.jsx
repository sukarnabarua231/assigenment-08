import React from 'react';
import { FaDownload } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router';

const AllAppsCard = ({product}) => {
    return (
       <Link to={`/appDetails/${product.id}`}>
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
        </div></Link>
    );
};

export default AllAppsCard;