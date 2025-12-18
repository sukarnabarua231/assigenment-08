import React from 'react';
import logoImg from '../../assets/logo.png'
import { FaGithub } from "react-icons/fa";
import { Link } from 'react-router';

const Navbar = () => {
    return (
        <div className=''> 
            <div className="navbar p-2.5 max-w-[88%] mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> 
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                           <li> <Link to ='/'>Home</Link></li>
                           <li> <Link to ='/allApps'>Apps</Link></li>
                           <li> <Link to ='/'>Installation</Link></li>
                        </ul>
                    </div>
                    <img className='w-[40px] h-[40px]' src={logoImg} alt="" />
                    <p className=" text-xl  text-transparent bg-clip-text bg-[linear-gradient(125deg,#632ee3,#9f62f2)]">HERO.IO</p>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li> <Link to ='/'>Home</Link></li>
                           <li> <Link to ='/allApps'>Apps</Link></li>
                           <li> <Link to ='/'>Installation</Link></li>
                    </ul>
                    </div>
                    <div className="navbar-end">
                        <a className="btn bg-[linear-gradient(125deg,#632ee3,#9f62f2)] text-white font-semibold"><FaGithub />Contribution</a>
                     </div>
                 </div>
        </div>
    );
};

export default Navbar;