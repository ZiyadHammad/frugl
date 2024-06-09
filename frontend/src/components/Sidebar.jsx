import React from 'react';
import { NavLink } from 'react-router-dom';
import { HomeIcon, ShoppingCartIcon } from '@heroicons/react/24/outline';

const Sidebar = () => {
  return (
    <div className="hidden md:flex h-screen bg-gray-800 text-white w-64">
      <nav className="mt-10">
        <NavLink
          to="scraper"
          className={({ isActive }) =>
            isActive
              ? 'flex items-center px-4 py-2 bg-gray-900'
              : 'flex items-center px-4 py-2 hover:bg-gray-700'
          }
        >
          <HomeIcon className="h-5 w-5 mr-3" />
          Scraper
        </NavLink>
        <NavLink
          to="products"
          className={({ isActive }) =>
            isActive
              ? 'flex items-center px-4 py-2 bg-gray-900'
              : 'flex items-center px-4 py-2 hover:bg-gray-700'
          }
        >
          <ShoppingCartIcon className="h-5 w-5 mr-3" />
          My Products
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
