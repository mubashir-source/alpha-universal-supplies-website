"use client";

import React, { useState, useEffect } from 'react';
import ProductDetailModal from '../ui/ProductDetailModal';

interface Product {
  id: number;
  name: string;
  description: string;
  image?: string;
  category: string;
}

interface Category {
  id: string;
  label: string;
  count: number;
}

interface CategoryFilterSectionProps {
  searchQuery?: string;
  onSearchResults?: (count: number) => void;
}

export default function CategoryFilterSection({ searchQuery = '', onSearchResults }: CategoryFilterSectionProps) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewDetails = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const categories: Category[] = [
    { id: 'all', label: 'All Products', count: 48 },
    { id: 'electronics', label: 'Electronics', count: 12 },
    { id: 'accessories', label: 'Accessories', count: 15 },
    { id: 'smart-home', label: 'Smart Home', count: 8 },
    { id: 'gaming', label: 'Gaming', count: 6 },
    { id: 'office', label: 'Office Supplies', count: 7 }
  ];

  const allProducts: Product[] = [
    // Electronics
    { id: 1, name: 'Professional Laptop Stand', description: 'Ergonomic aluminum laptop stand for better posture and productivity.', category: 'electronics' },
    { id: 2, name: 'Wireless Charging Pad', description: 'Fast wireless charging for all compatible devices with LED indicator.', category: 'electronics' },
    { id: 3, name: 'Bluetooth Headphones', description: 'Premium noise-canceling headphones with 30-hour battery life.', category: 'electronics' },
    { id: 4, name: 'Smart Watch Series 8', description: 'Advanced fitness tracking with heart rate monitor and GPS.', category: 'electronics' },
    { id: 5, name: 'Portable Power Bank', description: '20000mAh high-capacity power bank with fast charging technology.', category: 'electronics' },
    { id: 6, name: 'USB-C Hub Adapter', description: 'Multi-port hub with HDMI, USB 3.0, and SD card reader.', category: 'electronics' },
    { id: 7, name: 'Webcam HD 1080p', description: 'High-definition webcam with auto-focus and noise reduction.', category: 'electronics' },
    { id: 8, name: 'Portable SSD Drive', description: '1TB portable SSD with USB-C connectivity and fast transfer.', category: 'electronics' },
    { id: 9, name: 'Bluetooth Speaker', description: 'Waterproof Bluetooth speaker with 360-degree sound.', category: 'electronics' },
    { id: 10, name: 'Laptop Cooling Pad', description: 'Laptop cooling pad with adjustable fans and LED lighting.', category: 'electronics' },
    { id: 11, name: 'USB Flash Drive', description: 'High-speed USB 3.0 flash drive with metal casing.', category: 'electronics' },
    { id: 12, name: 'Portable Monitor', description: 'USB-C portable monitor for dual-screen productivity.', category: 'electronics' },

    // Accessories
    { id: 13, name: 'Smartphone Case Pro', description: 'Military-grade protection with wireless charging compatibility.', category: 'accessories' },
    { id: 14, name: 'Tablet Stand Holder', description: 'Adjustable tablet stand for hands-free viewing and video calls.', category: 'accessories' },
    { id: 15, name: 'Phone Car Mount', description: 'Magnetic car mount with 360-degree rotation and secure grip.', category: 'accessories' },
    { id: 16, name: 'Screen Protector Kit', description: 'Tempered glass screen protector with installation kit.', category: 'accessories' },
    { id: 17, name: 'Wireless Charger Stand', description: 'Fast wireless charging stand with adjustable viewing angle.', category: 'accessories' },
    { id: 18, name: 'Cable Management Kit', description: 'Complete cable organization solution for clean workspace.', category: 'accessories' },
    { id: 19, name: 'Monitor Stand Riser', description: 'Adjustable monitor stand with storage drawer underneath.', category: 'accessories' },
    { id: 20, name: 'Wireless Car Charger', description: 'Fast wireless car charger with automatic clamping.', category: 'accessories' },
    { id: 21, name: 'Bluetooth Tracker', description: 'Small Bluetooth tracker for keys, wallet, and belongings.', category: 'accessories' },
    { id: 22, name: 'Desk Organizer Set', description: 'Bamboo desk organizer with multiple compartments.', category: 'accessories' },
    { id: 23, name: 'LED Desk Lamp', description: 'Adjustable LED desk lamp with touch control and USB charging.', category: 'accessories' },
    { id: 24, name: 'Wireless Keyboard', description: 'Slim wireless keyboard with backlight and long battery life.', category: 'accessories' },
    { id: 25, name: 'Wireless Mouse', description: 'Precision wireless mouse with ergonomic design and long battery.', category: 'accessories' },
    { id: 26, name: 'Mechanical Keyboard', description: 'RGB backlit mechanical keyboard with tactile switches.', category: 'accessories' },
    { id: 27, name: 'Gaming Mouse Pad', description: 'Large gaming mouse pad with RGB lighting and smooth surface.', category: 'accessories' },

    // Smart Home
    { id: 28, name: 'Smart Home Hub', description: 'Central control hub for all your smart home devices.', category: 'smart-home' },
    { id: 29, name: 'Smart Doorbell', description: 'WiFi video doorbell with motion detection and cloud storage.', category: 'smart-home' },
    { id: 30, name: 'Smart Light Bulbs', description: 'Color-changing smart bulbs with voice control compatibility.', category: 'smart-home' },
    { id: 31, name: 'Smart Thermostat', description: 'WiFi-enabled thermostat with energy-saving features.', category: 'smart-home' },
    { id: 32, name: 'Smart Plug Set', description: 'WiFi smart plugs with voice control and scheduling.', category: 'smart-home' },
    { id: 33, name: 'Smart Security Camera', description: 'Indoor security camera with night vision and two-way audio.', category: 'smart-home' },
    { id: 34, name: 'Robot Vacuum', description: 'Smart robot vacuum with mapping and app control.', category: 'smart-home' },
    { id: 35, name: 'Air Purifier Pro', description: 'HEPA air purifier with smart sensors and app control.', category: 'smart-home' },

    // Gaming
    { id: 36, name: 'Gaming Chair Pro', description: 'Ergonomic gaming chair with lumbar support and RGB lighting.', category: 'gaming' },
    { id: 37, name: 'VR Headset Pro', description: 'Next-generation VR headset with 4K display and spatial audio.', category: 'gaming' },
    { id: 38, name: 'Action Camera 4K', description: 'Waterproof action camera with image stabilization.', category: 'gaming' },
    { id: 39, name: 'Gaming Headset', description: 'Professional gaming headset with surround sound and noise cancellation.', category: 'gaming' },
    { id: 40, name: 'Gaming Controller', description: 'Wireless gaming controller with customizable buttons and RGB.', category: 'gaming' },
    { id: 41, name: 'Gaming Monitor 4K', description: '27-inch 4K gaming monitor with 144Hz refresh rate.', category: 'gaming' },

    // Office Supplies
    { id: 42, name: 'Standing Desk Converter', description: 'Height-adjustable desk converter for healthier work posture.', category: 'office' },
    { id: 43, name: 'Ergonomic Office Chair', description: 'Comfortable office chair with lumbar support and adjustable height.', category: 'office' },
    { id: 44, name: 'Wireless Charging Station', description: 'Multi-device wireless charging station with fast charging.', category: 'office' },
    { id: 45, name: 'Document Scanner', description: 'Portable document scanner with wireless connectivity.', category: 'office' },
    { id: 46, name: 'Label Printer', description: 'Compact label printer for office organization and shipping.', category: 'office' },
    { id: 47, name: 'Whiteboard Set', description: 'Magnetic whiteboard with markers and eraser included.', category: 'office' },
    { id: 48, name: 'Paper Shredder', description: 'Cross-cut paper shredder for secure document disposal.', category: 'office' }
  ];

  // Filter products based on category and search query
  const filteredProducts = allProducts.filter(product => {
    // Category filter
    const categoryMatch = activeCategory === 'all' || product.category === activeCategory;
    
    // Search filter
    const searchMatch = !searchQuery || 
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase());
    
    return categoryMatch && searchMatch;
  });

  // Update search results count
  useEffect(() => {
    if (onSearchResults) {
      onSearchResults(filteredProducts.length);
    }
  }, [filteredProducts.length, onSearchResults]);

  // Update category counts based on search
  const updatedCategories = categories.map(category => {
    if (category.id === 'all') {
      const searchFilteredProducts = searchQuery 
        ? allProducts.filter(product => 
            product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.category.toLowerCase().includes(searchQuery.toLowerCase())
          )
        : allProducts;
      return { ...category, count: searchFilteredProducts.length };
    } else {
      const categoryProducts = allProducts.filter(product => product.category === category.id);
      const searchFilteredProducts = searchQuery 
        ? categoryProducts.filter(product => 
            product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.description.toLowerCase().includes(searchQuery.toLowerCase())
          )
        : categoryProducts;
      return { ...category, count: searchFilteredProducts.length };
    }
  });

  return (
    <section className="bg-white py-16">
      <div className="w-[90%] mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Sidebar - Categories Filter */}
          <div className="lg:w-1/4">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
              <div className="space-y-2">
                {updatedCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-colors duration-200 flex justify-between items-center ${
                      activeCategory === category.id
                        ? 'bg-primary text-white'
                        : 'text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <span className="font-medium">{category.label}</span>
                    <span className={`text-sm px-2 py-1 rounded-full ${
                      activeCategory === category.id
                        ? 'bg-white text-primary'
                        : 'bg-gray-300 text-gray-600'
                    }`}>
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Products Grid */}
          <div className="lg:w-3/4">
            {/* Results Header */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                {updatedCategories.find(cat => cat.id === activeCategory)?.label || 'All Products'}
                {searchQuery && (
                  <span className="text-lg font-normal text-gray-600 ml-2">
                    - Search: "{searchQuery}"
                  </span>
                )}
              </h2>
              <p className="text-gray-600">
                Showing {filteredProducts.length} products
              </p>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  {/* Product Image Placeholder */}
                  <div className="bg-gray-300 h-48 flex items-center justify-center">
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

                  {/* Product Content */}
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-1">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {product.description}
                    </p>
                    
                    {/* Action Button */}
                    <div>
                      <button 
                        onClick={() => handleViewDetails(product)}
                        className="w-full bg-primary text-white px-3 py-2 rounded text-sm font-medium hover:bg-primary-hover transition-colors duration-200"
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* No Results */}
            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
                <p className="text-gray-600">
                  {searchQuery 
                    ? `No products match "${searchQuery}". Try a different search term or category.`
                    : 'Try selecting a different category.'
                  }
                </p>
                {searchQuery && (
                  <button
                    onClick={() => setActiveCategory('all')}
                    className="mt-4 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-hover transition-colors duration-200"
                  >
                    Clear Filters
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
}
