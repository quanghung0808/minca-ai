import React from 'react';
import { routes } from '@/constant/routes';
import SidebarItem from './SidebarItem';

const Sidebar: React.FC<{ isOpen: boolean; toggleSidebar: () => void }> = ({
  isOpen,
  toggleSidebar,
}) => {
  return (
    <nav
      className={`fixed inset-y-0 left-0 z-50 w-64 bg-white text-gray-700 p-4 transform transition-transform duration-300 border-r border-gray-200
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
        sm:relative sm:translate-x-0 sm:w-1/5
        md:relative md:w-1/6 md:translate-x-0
        lg:w-1/5 lg:translate-x-0`}
    >
      {/* Logo */}
      <div className="flex items-center mb-8">
        <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold mr-2">
          M
        </div>
        <h1 className="text-lg md:text-xl font-extrabold text-gray-800">
          MincaAI
        </h1>
      </div>

      {/* Navigation Items */}
      <ul className="space-y-2">
        {routes.map((item, index) => (
          <SidebarItem
            key={index}
            path={item.path}
            name={item.name}
            icon={item.icon}
            toggleSidebar={toggleSidebar}
          />
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
