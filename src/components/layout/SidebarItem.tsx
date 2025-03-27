import React from 'react';
import { Icon } from '@iconify/react';
import { useLocation, useNavigate } from 'react-router-dom';

interface SidebarItemProps {
  path?: string;
  name?: string;
  icon?: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ path, name, icon }) => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <li
      onClick={() => navigate(path ?? '')}
      className={`flex items-center p-2 rounded-lg cursor-pointer text-sm md:text-base 
        ${
          location.pathname === path
            ? 'bg-indigo-50 text-indigo-600 hover:text-indigo-700'
            : 'bg-white text-gray-400 hover:text-indigo-600'
        }`}
    >
      <Icon icon={icon ?? ''} className="w-6 h-6 mr-3" />
      <span className="font-semibold text-xs sm:text-sm">{name}</span>
    </li>
  );
};

export default SidebarItem;
