

import React from 'react';
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-full bg-gray-900 overflow-hidden shadow-lg p-5 m-1 bg-white font-sans">
      <nav className="flex flex-col md:flex-row justify-between w-full p-1 text-blue bg-opacity-50">
        <div className="flex items-center justify-between w-full md:w-auto">
          {/* Placeholder pour le logo */}
          <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
          <span className="text-xl font-bold">Logo RestoFacile</span>
        </div>

        <div className="flex flex-col md:flex-row items-center md:space-x-4 mt-4 md:mt-0">
          <NavLink to="/" className="hover:text-[#AF631D]">ACCEUIL</NavLink>
          <NavLink to="/about" className="hover:text-[#AF631D]">À PROPOS</NavLink>
          <NavLink to="/restaurant" className="hover:text-[#AF631D]">NOS RESTAURANTS</NavLink>
          <NavLink to="/registerform" className="hover:text-[#AF631D]">INSCRIRE MON RESTAURANT</NavLink>
          <NavLink to="/contact" className="hover:text-[#AF631D]">CONTACT</NavLink>

          <NavLink to='/login' className="flex items-center gap-2 border border-gray-300 rounded-full py-2 px-4 mt-4 md:mt-0 bg-gray-800 drop-shadow-md hover:drop-shadow-xl" >
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </div>
            <div className="bg-gray-500 text-white rounded-full border border-gray-500 overflow-hidden">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 relative top-1 decoration-sky-500">
                <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
              </svg>
            </div>
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Header;




/*import React from 'react';
import {NavLink} from "react-router-dom";

const Header = () => {
  return (
    <div className=" w-full bg-gray-900 bg-gray-900 overflow-hidden shadow-lg p-5 m-1 bg-white">
    <nav className="flex justify-between w-full p-1 text-blue bg-opacity-50 ">
        <div className="flex items-center space-x-4">
             {/* Placeholder pour le logo }
            <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
             <span className="text-xl font-bold">Logo RestoFacile</span>
        </div>

        <div className="flex items-center space-x-4 ">
                    <NavLink to="/" className="hover:text-[#AF631D]">ACCEUIL</NavLink>
                    <NavLink to="/about" className="hover:text-[#AF631D]">À PROPOS</NavLink>
                    <NavLink to="/restaurant" className="hover:text-[#AF631D]">NOS RESTAURANTS</NavLink>
                    <NavLink to="/registerform" className="hover:text-[#AF631D]">INSCRIRE MON RESTAURANT</NavLink>
                    <NavLink to="/contact" className="hover:text-[#AF631D]">CONTACT</NavLink>

                  <NavLink to='/login' className="flex items-center gap-2 border border-gray-300 rounded-full py-2 px-4 ">

           <div className="">             
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 color-white">
               <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
             </svg>
             </div>

        <div className="bg-gray-500 text-white rounded-full border border-gray-500 overflow-hidden">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 relative top-1 decoration-sky-500">
            <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
          </svg>
        </div>

      </NavLink>           
    </div>
   </nav>
           
 </div> 
           
  );
};

export default Header;



/*
      
        <NavLink to={user?'/account':'/login'} className="flex items-center gap-2 border border-gray-300 rounded-full py-2 px-4 ">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
        <div className="bg-gray-500 text-white rounded-full border border-gray-500 overflow-hidden">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 relative top-1">
            <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
          </svg>
        </div>
        {!!user && (
          <div>
            {user.name}
          </div>
        )}
      </NavLink>
      
      
      */