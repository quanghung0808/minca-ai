import React from 'react';
import { Icon } from '@iconify/react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  paginate: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  paginate,
}) => {
  return (
    <div className="flex items-center justify-center space-x-4 p-4 mt-2">
      <button
        onClick={() => paginate(currentPage - 1)}
        disabled={currentPage === 1}
        className={`
          group flex items-center justify-center 
          w-10 h-10 rounded-full 
          transition-all duration-300 ease-in-out
          ${
            currentPage === 1
              ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
              : 'bg-blue-50 text-blue-600 hover:bg-blue-100 hover:shadow-md'
          }
        `}
      >
        <Icon
          icon={'material-symbols:chevron-left'}
          className={`w-6 h-6 
            ${
              currentPage === 1
                ? 'text-gray-400'
                : 'text-blue-600 group-hover:scale-110'
            }
          `}
        ></Icon>
      </button>

      <div className="flex items-center space-x-2">
        <span className="text-sm font-semibold text-gray-700">Page</span>
        <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-bold">
          {currentPage}
        </span>
        <span className="text-sm text-gray-500">of {totalPages}</span>
      </div>

      <button
        onClick={() => paginate(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`
          group flex items-center justify-center 
          w-10 h-10 rounded-full 
          transition-all duration-300 ease-in-out
          ${
            currentPage === totalPages
              ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
              : 'bg-blue-50 text-blue-600 hover:bg-blue-100 hover:shadow-md'
          }
        `}
      >
        <Icon
          icon={'material-symbols:chevron-right'}
          className={`w-6 h-6 
            ${
              currentPage === totalPages
                ? 'text-gray-400'
                : 'text-blue-600 group-hover:scale-110'
            }
          `}
        ></Icon>
      </button>
    </div>
  );
};

export default Pagination;
