import React from 'react';
import Button from './Button';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  showInfo?: boolean;
  totalItems?: number;
  itemsPerPage?: number;
  className?: string;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  showInfo = true,
  totalItems,
  itemsPerPage,
  className = ''
}: PaginationProps) {
  const startItem = ((currentPage - 1) * (itemsPerPage || 10)) + 1;
  const endItem = Math.min(currentPage * (itemsPerPage || 10), totalItems || 0);

  const getVisiblePages = () => {
    const pages = [];
    const maxVisible = 5;
    
    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      const start = Math.max(1, currentPage - Math.floor(maxVisible / 2));
      const end = Math.min(totalPages, start + maxVisible - 1);
      
      for (let i = start; i <= end; i++) {
        pages.push(i);
      }
    }
    
    return pages;
  };

  return (
    <div className={`flex items-center justify-between ${className}`}>
      {showInfo && totalItems && itemsPerPage && (
        <div className="flex-1 flex justify-between sm:hidden">
          <p className="text-sm text-gray-700">
            Showing {startItem} to {endItem} of {totalItems} results
          </p>
        </div>
      )}
      
      <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
        {showInfo && totalItems && itemsPerPage && (
          <div>
            <p className="text-sm text-gray-700">
              Showing <span className="font-medium">{startItem}</span> to{' '}
              <span className="font-medium">{endItem}</span> of{' '}
              <span className="font-medium">{totalItems}</span> results
            </p>
          </div>
        )}
        
        <div>
          <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">
            <Button
              onClick={() => onPageChange(currentPage - 1)}
              disabled={currentPage === 1}
              variant="secondary"
              size="sm"
              className="rounded-l-md"
            >
              Previous
            </Button>
            
            {getVisiblePages().map((page) => (
              <Button
                key={page}
                onClick={() => onPageChange(page)}
                variant={currentPage === page ? 'primary' : 'secondary'}
                size="sm"
                className="rounded-none"
              >
                {page}
              </Button>
            ))}
            
            <Button
              onClick={() => onPageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              variant="secondary"
              size="sm"
              className="rounded-r-md"
            >
              Next
            </Button>
          </nav>
        </div>
      </div>
      
      <div className="flex-1 flex justify-between sm:hidden">
        <Button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          variant="secondary"
          size="sm"
        >
          Previous
        </Button>
        <Button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          variant="secondary"
          size="sm"
        >
          Next
        </Button>
      </div>
    </div>
  );
}
