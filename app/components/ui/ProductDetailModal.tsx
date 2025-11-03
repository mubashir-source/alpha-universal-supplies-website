"use client";

import React from 'react';
import Link from 'next/link';

interface Product {
  id: number;
  name: string;
  description: string;
  image?: string;
  category: string;
}

interface ProductDetailModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProductDetailModal({ product, isOpen, onClose }: ProductDetailModalProps) {
  if (!isOpen || !product) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const categoryLabels: { [key: string]: string } = {
    'electronics': 'Electronics',
    'accessories': 'Accessories',
    'smart-home': 'Smart Home',
    'gaming': 'Gaming',
    'office': 'Office Supplies'
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-10 flex items-center justify-center z-50 p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-lg w-[70%] overflow-y-auto">
        {/* Modal Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900">Product Details</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 grid grid-cols-2 gap-4">
          {/* Product Image */}
          <div className="bg-gray-300 h-full rounded-lg flex items-center justify-center mb-6">
            <svg 
              className="w-20 h-20 text-gray-400" 
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

          {/* Product Info */}
          <div className="space-y-4">
            {/* Category Badge */}
            <div className="inline-block">
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                {categoryLabels[product.category] || product.category}
              </span>
            </div>

            {/* Product Name */}
            <h3 className="text-3xl font-bold text-gray-900">
              {product.name}
            </h3>

            {/* Product Description */}
            <div className="space-y-3">
              <h4 className="text-lg font-semibold text-gray-800">Description</h4>
              <p className="text-gray-600 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Additional Details */}
            <div className="space-y-3">
              <h4 className="text-lg font-semibold text-gray-800">Product Details</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h5 className="font-medium text-gray-800 mb-2">Product ID</h5>
                  <p className="text-gray-600">#{product.id.toString().padStart(6, '0')}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h5 className="font-medium text-gray-800 mb-2">Category</h5>
                  <p className="text-gray-600">{categoryLabels[product.category] || product.category}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h5 className="font-medium text-gray-800 mb-2">Availability</h5>
                  <p className="text-green-600 font-medium">Available for Quote</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h5 className="font-medium text-gray-800 mb-2">Shipping</h5>
                  <p className="text-gray-600">Contact for Details</p>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="space-y-3">
              <h4 className="text-lg font-semibold text-gray-800">Key Features</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>High-quality construction and materials</li>
                <li>Professional grade performance</li>
                <li>Warranty and support included</li>
                <li>Fast and reliable shipping</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="flex flex-col sm:flex-row gap-3 p-6 border-t border-gray-200 bg-gray-50">
          <button
            onClick={onClose}
            className="flex-1 bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-medium hover:bg-gray-300 transition-colors duration-200"
          >
            Close
          </button>
          <Link
            href="/contact"
            className="flex-1 bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-hover transition-colors duration-200 text-center"
            onClick={onClose}
          >
            Contact Us for Quote
          </Link>
        </div>
      </div>
    </div>
  );
}
