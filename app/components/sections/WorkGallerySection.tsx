import React from 'react';
import Link from 'next/link';
import Button from '../ui/Button';

interface WorkGallerySectionProps {
  className?: string;
}

export default function WorkGallerySection({ className = '' }: WorkGallerySectionProps) {
  return (
    <section className={`relative py-20 bg-white overflow-hidden h-[1000px] flex items-center justify-center ${className}`}>
      {/* Animated Background Images */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top Left Image */}
        <div className="absolute top-16 left-16 w-48 h-32 bg-gray-400 rounded-lg shadow-lg animate-float-1">
          <div className="w-full h-full flex items-center justify-center">
            <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
            </svg>
          </div>
        </div>

        {/* Top Center Image */}
        <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-40 h-28 bg-gray-400 rounded-lg shadow-lg animate-float-2">
          <div className="w-full h-full flex items-center justify-center">
            <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
            </svg>
          </div>
        </div>

        {/* Top Right Image */}
        <div className="absolute top-12 right-16 w-44 h-30 bg-gray-400 rounded-lg shadow-lg animate-float-3">
          <div className="w-full h-full flex items-center justify-center">
            <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
            </svg>
          </div>
        </div>

        {/* Far Right Image */}
        <div className="absolute top-1/3 right-4 w-36 h-48 bg-gray-400 rounded-lg shadow-lg animate-float-4">
          <div className="w-full h-full flex items-center justify-center">
            <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
            </svg>
          </div>
        </div>

        {/* Bottom Left Image */}
        <div className="absolute bottom-16 left-8 w-32 h-44 bg-gray-400 rounded-lg shadow-lg animate-float-5">
          <div className="w-full h-full flex items-center justify-center">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
            </svg>
          </div>
        </div>

        {/* Bottom Center Image */}
        <div className="absolute bottom-8 left-1/3 w-52 h-36 bg-gray-400 rounded-lg shadow-lg animate-float-6">
          <div className="w-full h-full flex items-center justify-center">
            <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
            </svg>
          </div>
        </div>

        {/* Bottom Right Image */}
        <div className="absolute bottom-20 right-1/4 w-38 h-28 bg-gray-400 rounded-lg shadow-lg animate-float-7">
          <div className="w-full h-full flex items-center justify-center">
            <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
            </svg>
          </div>
        </div>

        {/* Far Bottom Right Image */}
        <div className="absolute bottom-4 right-8 w-40 h-56 bg-gray-400 rounded-lg shadow-lg animate-float-8">
          <div className="w-full h-full flex items-center justify-center">
            <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
          See Our Work in Action
        </h2>
        <p className="text-[#575757] text-lg md:text-xl leading-relaxed mb-8 max-w-2xl mx-auto">
          Explore how we support industries with reliable supply chain management and quality control. Our growing network of vendors and clients showcases our commitment to excellence.
        </p>
        <Link href="/gallery">
          <Button variant="backgroundwhite" size="lg">
            View Full Gallery
          </Button>
        </Link>
      </div>
    </section>
  );
}
