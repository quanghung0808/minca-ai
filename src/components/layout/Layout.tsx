import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import Overlay from './Overlay';
import { Outlet } from 'react-router-dom';

const Layout: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen((prev) => !prev);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar Navigation */}
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <Header toggleSidebar={toggleSidebar} />

        {/* Main Content */}
        <main className="flex-1 p-8 bg-gray-50 overflow-y-auto">
          <div className="max-w-7xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>

      {/* Overlay for Mobile Sidebar */}
      {isOpen && <Overlay onClick={toggleSidebar} />}
    </div>
  );
};

export default Layout;
