import React from 'react';
import { Icon } from '@iconify/react';
import { useLocation, useNavigate } from 'react-router-dom';

interface SidebarItemProps {
  path?: string;
  name?: string;
  icon?: string;
  toggleSidebar: () => void;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  path,
  name,
  icon,
  toggleSidebar,
}) => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <li
      onClick={() => {
        navigate(path ?? '');
        toggleSidebar();
      }}
      className={`flex items-center p-2 rounded-lg cursor-pointer text-sm md:text-base 
        transition-all duration-300 ease-in-out group
        ${
          location.pathname === path
            ? 'bg-indigo-50 text-indigo-600 shadow-sm'
            : 'bg-white text-gray-400 hover:bg-indigo-50 hover:text-indigo-600 hover:shadow-md'
        }`}
    >
      <Icon
        icon={icon ?? ''}
        className={`w-6 h-6 mr-3 
          transition-transform duration-300 
          ${
            location.pathname === path
              ? 'text-indigo-600'
              : 'text-gray-400 group-hover:text-indigo-600 group-hover:scale-110'
          }`}
      />
      <span
        className={`font-semibold text-xs sm:text-sm 
          transition-colors duration-300 
          ${
            location.pathname === path
              ? 'text-indigo-600'
              : 'group-hover:text-indigo-600'
          }`}
      >
        {name}
      </span>
    </li>
  );
};

export default SidebarItem;
