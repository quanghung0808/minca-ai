import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import Overlay from './Overlay';

const Layout: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen((prev) => !prev);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar Navigation */}
      <Sidebar isOpen={isOpen} />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <Header toggleSidebar={toggleSidebar} />

        {/* Main Content */}
        <main className="flex-1 p-6 bg-gray-50 overflow-y-auto">
          <div className="max-w-4xl mx-auto">{children}</div>
        </main>
      </div>

      {/* Overlay for Mobile Sidebar */}
      {isOpen && <Overlay onClick={toggleSidebar} />}
    </div>
  );
};

export default Layout;
