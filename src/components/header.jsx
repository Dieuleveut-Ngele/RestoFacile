/*import React from "react";
import { NavLink } from "react-router-dom";
function Header() {
    return (
        <>

<nav className="navbar bg-white shadow-sm">
      <div className="container mx-auto flex items-center justify-between">

        <div className="w-full fixed top-0 left-0 z-50 bg-white shadow-sm">
        <div className="space-y-6 border-t border-gray-200 px-4 py-6">

             <NavLink to="/" className="text-gray-600 hover:text-gray-900">Accueil</NavLink>
             <NavLink to="/about">About</NavLink>
             <NavLink to="/register">Sign in</NavLink>
             <NavLink to="/login"><button className="rounded-md">Se connecter</button></NavLink>
            
         </div>        
        </div>
        </div>
        </nav>
        
                  
        
        </>
    )
    
}
export default Header;*/

import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    
      <div className="container mx-auto flex items-center justify-between">
      <div className="w-full fixed top-0 right-0 z-50 bg-white shadow-sm"> 
        <div className="space-y-6 border-t border-gray-200 px-4 py-6"> 
        
        {/* Logo or Brand Name */}
        <div className="">Logo</div>

        {/* Navigation Links */}
        <ul className="nav-links flex space-x-4">
          <li className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
            <Link to="/" className="text-gray-600 hover:text-gray-900">Home</Link>
          </li>
          <li>
            <Link to="/about" className="text-gray-600 hover:text-gray-900">About</Link>
          </li>
          <li>
            <Link to="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link>
          </li>
          <li>
            <Link to="/restaurant" className="text-gray-600 hover:text-gray-900">Restaurant</Link>
          </li>
          <li>
            <Link to="/login" className="text-gray-600 hover:text-gray-900">Se connecter</Link>
          </li>
          
        </ul>
      </div>
      </div>
      </div>
  );
};

export default Header;
