"use client";

import React from 'react';

export default function DiscoverWorldSection() {
  return (
    <section className="bg-white py-16">
      <div className="w-[90%] mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Text Content */}
          <div className="space-y-4">
            <h2 className="text-[48px] font-bold">
              <span className="text-blue-500">Discover</span>{" "}
              <span className="text-gray-900">the World <span className="text-primary">with Us</span></span>
            </h2>
            <p className="text-gray-600 text-[18px] leading-relaxed">
              Whether you're dreaming of a serene escape to an island paradise, 
              an adventurous trek through lush forests, or a cultural exploration of 
              historic cities, we're here to make your travel dreams a reality. 
              Your next unforgettable journey is just a click away.
            </p>
            <div className="bg-gray-300 rounded-lg h-150 flex items-center justify-center">
              <svg 
                className="w-12 h-12 text-gray-400" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={1.5} 
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
                />
              </svg>
            </div>
          </div>

          {/* Right Side - Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            {/* Top Row - Two smaller images */}
            <div className="bg-gray-300 rounded-lg h-70 flex items-center justify-center">
              <svg 
                className="w-12 h-12 text-gray-400" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={1.5} 
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
                />
              </svg>
            </div>
            
            <div className="bg-gray-300 rounded-lg h-70 flex items-center justify-center">
              <svg 
                className="w-12 h-12 text-gray-400" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={1.5} 
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
                />
              </svg>
            </div>

            {/* Bottom Row - One larger image spanning both columns */}
            <div className="col-span-2 bg-gray-300 rounded-lg h-130 flex items-center justify-center">
              <svg 
                className="w-16 h-16 text-gray-400" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={1.5} 
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
