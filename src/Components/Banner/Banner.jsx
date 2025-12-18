import React from 'react';
import bannarImg from '../../assets/hero.png'
import { FaGooglePlay } from "react-icons/fa6";
import { FaAppStoreIos } from "react-icons/fa";

const Banner = () => {
    return (
        <div>
            <div className='text-center'>
                <h1 className='text-4xl font-bold '>We Build <br/>
                <span className='text-transparent bg-clip-text bg-[linear-gradient(125deg,#632ee3,#9f62f2)]'>Productive</span>Apps</h1>
                <p className='py-4'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br />
                Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
            </div>
            <div className='flex  justify-center items-center py-4 gap-5'>
                <a href="https://play.google.com/store"target="_blank" rel="noopener noreferrer" >
                <button className='btn'><FaGooglePlay /> Google Play</button> </a>
               <a href="https://www.apple.com/app-store/"target="_blank"rel="noopener noreferrer">
               <button className='btn'><FaAppStoreIos /> App Store</button></a>
            </div>
            <div className='flex justify-center items-center'>
                <img className='w-[600px]' src={bannarImg} alt="" />
            </div>
            <div className='bg-[linear-gradient(125deg,#632ee3,#9f62f2)] text-white p-8 w-full'>
                <h1 className='text-3xl font-bold text-center'>Trusted by Millions, Built for You</h1>
                <div className='flex md:flex-row flex-col  justify-center items-center  py-12 gap-[100px]'>
                    <div>
                        <p>Total Downloads</p>
                        <p className='text-5xl font-bold'>29.6M</p>
                        <p>21% more than last month</p>
                    </div>
                    <div>
                        <p>Total Reviews</p>
                        <p className='text-5xl font-bold'>906K</p>
                        <p>46% more than last month</p>
                    </div>
                    <div>
                        <p>Active Apps</p>
                        <p className='text-5xl font-bold'>132+</p>
                        <p>31 more will Launch</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;