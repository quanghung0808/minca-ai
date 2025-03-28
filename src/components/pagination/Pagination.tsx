import React from 'react';
import { Icon } from '@iconify/react';
import { Icons } from '@/constant/icons';

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
              : 'bg-indigo-50 text-indigo-600 hover:bg-indigo-100 hover:shadow-md'
          }
        `}
      >
        <Icon
          icon={Icons.ChevronLeft}
          className={`w-6 h-6 
            ${
              currentPage === 1
                ? 'text-gray-400'
                : 'text-indigo-600 group-hover:scale-110'
            }
          `}
        ></Icon>
      </button>

      <div className="flex items-center space-x-2">
        <span className="text-sm font-semibold text-gray-700">Page</span>
        <span className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-sm font-bold">
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
              : 'bg-indigo-50 text-blindigoue-600 hover:bg-indigo-100 hover:shadow-md'
          }
        `}
      >
        <Icon
          icon={Icons.ChevronRight}
          className={`w-6 h-6 
            ${
              currentPage === totalPages
                ? 'text-gray-400'
                : 'text-indigo-600 group-hover:scale-110'
            }
          `}
        ></Icon>
      </button>
    </div>
  );
};

export default Pagination;
