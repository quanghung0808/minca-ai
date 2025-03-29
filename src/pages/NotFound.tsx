import React from 'react';
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';

const NotFound: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center h-full bg-gray-50 p-4">
      <div className="text-center">
        <Icon
          icon="mdi:magnify-close"
          className="w-16 h-16 mx-auto text-gray-400 mb-4 transition-transform duration-300 hover:scale-110 hover:text-gray-500"
        />

        <h2 className="text-xl md:text-2xl font-semibold text-gray-700 mb-2">
          Page Not Found
        </h2>
        <p className="text-sm md:text-base text-gray-500 max-w-md">
          Oops! It seems we've wandered off the map. The page you're looking for
          doesn't exist or has been moved.
        </p>
        <button
          className="mt-6 px-4 py-2 bg-indigo-600 text-white rounded-lg 
            hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 
            transition-all duration-300 ease-in-out"
          onClick={() => navigate('/')}
        >
          Return Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
