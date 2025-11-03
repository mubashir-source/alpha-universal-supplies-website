"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function AdventureStartsSection() {
  return (
    <section className="bg-gray-600 py-16  bg-vector bg-cover bg-left bg-no-repeat">
      <div className="w-[90%] mx-auto px-4  ">
        <div className="grid grid-cols-2 gap-0 items-center gap-x-10">

          {/* Center - Image Placeholder */}
          <div className="w-full h-full justify-center items-center flex">
            <div className="bg-gray-400 h-70 w-[100%] rounded-lg flex items-center justify-center">
              <svg 
                className="w-16 h-30 text-gray-300" 
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

          {/* Right Side - Content */}
          <div className="">
            <div className="text-white">
              <h2 className="text-3xl font-bold mb-4">
                Your Adventure Starts Here!
              </h2>
              <p className="text-gray-300 mb-6 text-lg">
                Ready to explore the world? Start your journey with Voyagify today.
              </p>
              
              {/* Action Buttons */}
              <div className="flex space-x-4">
                <Link href="/category">
                  <button className="bg-primary text-white px-6 py-3 rounded font-medium hover:bg-primary-hover transition-colors duration-200">
                    Start Exploring
                  </button>
                </Link>
                <Link href="/contact">
                  <button className="bg-gray-500 text-white px-6 py-3 rounded font-medium hover:bg-gray-600 transition-colors duration-200">
                    Contact Us
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
