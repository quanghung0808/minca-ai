import React from 'react';
import { Icon } from '@iconify/react';

const Header: React.FC<{ toggleSidebar: () => void }> = ({ toggleSidebar }) => {
  const hasNotifications = true;

  return (
    <header className="bg-white p-4 shadow flex items-center justify-between border-b border-gray-200">
      <div className="flex items-center">
        <button
          onClick={toggleSidebar}
          className="md:hidden text-gray-800 hover:text-gray-600 mr-4"
        >
          <Icon icon="material-symbols:menu" className="w-6 h-6" />
        </button>
        <h2 className="text-lg  md:text-xl font-semibold text-gray-800">
          Live Agent Board
        </h2>
      </div>
      <div className="flex items-center space-x-3">
        <div className="relative">
          <button className="text-gray-600 hover:text-gray-800 relative flex justify-center items-center">
            <Icon icon="material-symbols:notifications" className="w-6 h-6" />
            {hasNotifications && (
              <span className="absolute -top-1 right-0 w-2 h-2 bg-indigo-500 rounded-full"></span>
            )}
          </button>
        </div>
        <div className="flex items-center">
          <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-semibold">
            JD
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
