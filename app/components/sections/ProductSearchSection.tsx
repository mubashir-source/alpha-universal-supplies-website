"use client";

import React, { useState } from 'react';

interface ProductSearchSectionProps {
  onSearch?: (query: string) => void;
  searchQuery?: string;
  resultsCount?: number;
}

export default function ProductSearchSection({ onSearch, searchQuery: externalSearchQuery = '', resultsCount }: ProductSearchSectionProps) {
  const [localSearchQuery, setLocalSearchQuery] = useState(externalSearchQuery);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(localSearchQuery);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setLocalSearchQuery(value);
    // Real-time search as user types
    if (onSearch) {
      onSearch(value);
    }
  };

  return (
    <section className="bg-primary py-8">
      <div className="w-[90%] mx-auto px-4">
        <div className="text-center">
          <h2 className="text-white text-[48px] font-bold mb-2">
            Find Products or Categories
          </h2>
          {localSearchQuery && resultsCount !== undefined && (
            <p className="text-white/80 text-lg mb-4">
              Found {resultsCount} products matching "{localSearchQuery}"
            </p>
          )}
          
            <form onSubmit={handleSearch} className="flex w-full mx-auto">
              <input
                type="text"
                value={localSearchQuery}
                onChange={handleInputChange}
                placeholder="Search for products, brands, or categories..."
                className="flex-1 px-4 py-3 rounded-l-md border-0 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            <button
              type="submit"
              className="bg-white hover:bg-primary-hover hover:text-white text-primary px-6 py-3 rounded-r-md border-l border-primary font-medium transition-all duration-200 flex items-center space-x-2"
            >
              <svg 
                className="w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
                />
              </svg>
              <span className="text-primary hover:text-white text-[18px] font-bold transition-colors duration-200">Search</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
