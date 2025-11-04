"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
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
    { id: 'office', label: 'Office Supplies', count: 12 },
    { id: 'restaurant', label: 'Restaurant Supplies', count: 15 },
    { id: 'construction', label: 'Construction & Maintenance', count: 8 },
    { id: 'medical', label: 'Medical Supplies', count: 6 },
    { id: 'cleaning', label: 'Cleaning Products', count: 7 }
  ];

  const allProducts: Product[] = [
    // Office Supplies
    { id: 1, name: 'Professional Laptop Stand', description: 'Ergonomic aluminum laptop stand for better posture and productivity.', category: 'office', image: '/corporateofficesupplies/corporateofficesupplies.png' },
    { id: 2, name: 'Wireless Charging Pad', description: 'Fast wireless charging for all compatible devices with LED indicator.', category: 'office', image: '/corporateofficesupplies/corporateofficesupplies2.png' },
    { id: 3, name: 'Office Desk Organizer', description: 'Premium desk organizer with multiple compartments for office supplies.', category: 'office', image: '/corporateofficesupplies/corporateofficesupplies.png' },
    { id: 4, name: 'Ergonomic Office Chair', description: 'Adjustable office chair with lumbar support and breathable mesh.', category: 'office', image: '/corporateofficesupplies/corporateofficesupplies2.png' },
    { id: 5, name: 'Portable Power Bank', description: '20000mAh high-capacity power bank with fast charging technology.', category: 'office', image: '/corporateofficesupplies/corporateofficesupplies.png' },
    { id: 6, name: 'USB-C Hub Adapter', description: 'Multi-port hub with HDMI, USB 3.0, and SD card reader.', category: 'office', image: '/corporateofficesupplies/corporateofficesupplies2.png' },
    { id: 7, name: 'Webcam HD 1080p', description: 'High-definition webcam with auto-focus and noise reduction.', category: 'office', image: '/corporateofficesupplies/corporateofficesupplies.png' },
    { id: 8, name: 'Portable SSD Drive', description: '1TB portable SSD with USB-C connectivity and fast transfer.', category: 'office', image: '/corporateofficesupplies/corporateofficesupplies2.png' },
    { id: 9, name: 'Wireless Keyboard & Mouse', description: 'Professional wireless keyboard and mouse combo for office use.', category: 'office', image: '/corporateofficesupplies/corporateofficesupplies.png' },
    { id: 10, name: 'Laptop Cooling Pad', description: 'Laptop cooling pad with adjustable fans and LED lighting.', category: 'office', image: '/corporateofficesupplies/corporateofficesupplies2.png' },
    { id: 11, name: 'USB Flash Drive', description: 'High-speed USB 3.0 flash drive with metal casing.', category: 'office', image: '/corporateofficesupplies/corporateofficesupplies.png' },
    { id: 12, name: 'Portable Monitor', description: 'USB-C portable monitor for dual-screen productivity.', category: 'office', image: '/corporateofficesupplies/corporateofficesupplies2.png' },

    // Restaurant Supplies
    { id: 13, name: 'Commercial Food Containers', description: 'Durable food storage containers for restaurant use.', category: 'restaurant', image: '/Restaurant & Catering Supplies/Restaurant & Catering Supplies.png' },
    { id: 14, name: 'Disposable Plates & Cups', description: 'Eco-friendly disposable plates and cups for catering.', category: 'restaurant', image: '/Restaurant & Catering Supplies/Restaurant & Catering Supplies 2.png' },
    { id: 15, name: 'Kitchen Utensil Set', description: 'Professional kitchen utensils for commercial use.', category: 'restaurant', image: '/Restaurant & Catering Supplies/Restaurant & Catering Supplies.png' },
    { id: 16, name: 'Food Service Gloves', description: 'Disposable food service gloves for hygiene and safety.', category: 'restaurant', image: '/Restaurant & Catering Supplies/Restaurant & Catering Supplies 2.png' },
    { id: 17, name: 'Takeout Containers', description: 'Leak-proof takeout containers with secure lids.', category: 'restaurant', image: '/Restaurant & Catering Supplies/Restaurant & Catering Supplies.png' },
    { id: 18, name: 'Commercial Napkins', description: 'High-quality napkins for restaurant and catering use.', category: 'restaurant', image: '/Restaurant & Catering Supplies/Restaurant & Catering Supplies 2.png' },
    { id: 19, name: 'Food Packaging Bags', description: 'Durable food packaging bags for delivery and takeout.', category: 'restaurant', image: '/Restaurant & Catering Supplies/Restaurant & Catering Supplies.png' },
    { id: 20, name: 'Sanitizer Dispensers', description: 'Automatic hand sanitizer dispensers for restaurants.', category: 'restaurant', image: '/Restaurant & Catering Supplies/Restaurant & Catering Supplies 2.png' },
    { id: 21, name: 'Chef Aprons', description: 'Professional chef aprons with adjustable straps.', category: 'restaurant', image: '/Restaurant & Catering Supplies/Restaurant & Catering Supplies.png' },
    { id: 22, name: 'Food Thermometers', description: 'Digital food thermometers for safe cooking temperatures.', category: 'restaurant', image: '/Restaurant & Catering Supplies/Restaurant & Catering Supplies 2.png' },
    { id: 23, name: 'Aluminum Foil Rolls', description: 'Heavy-duty aluminum foil for food service and storage.', category: 'restaurant', image: '/Restaurant & Catering Supplies/Restaurant & Catering Supplies.png' },
    { id: 24, name: 'Paper Towel Dispensers', description: 'Wall-mounted paper towel dispensers for kitchens.', category: 'restaurant', image: '/Restaurant & Catering Supplies/Restaurant & Catering Supplies 2.png' },
    { id: 25, name: 'Food Storage Labels', description: 'Date and storage labels for food safety compliance.', category: 'restaurant', image: '/Restaurant & Catering Supplies/Restaurant & Catering Supplies.png' },
    { id: 26, name: 'Cutting Board Set', description: 'Color-coded cutting boards for food safety.', category: 'restaurant', image: '/Restaurant & Catering Supplies/Restaurant & Catering Supplies 2.png' },
    { id: 27, name: 'Serving Trays', description: 'Non-slip serving trays for professional food service.', category: 'restaurant', image: '/Restaurant & Catering Supplies/Restaurant & Catering Supplies.png' },

    // Construction & Maintenance
    { id: 28, name: 'Safety Hard Hats', description: 'OSHA-compliant hard hats for construction site safety.', category: 'construction', image: '/Construction & Maintenance/Construction & Maintenance.png' },
    { id: 29, name: 'Work Gloves Set', description: 'Cut-resistant work gloves for construction and maintenance.', category: 'construction', image: '/Construction & Maintenance/Construction & Maintenance 2.png' },
    { id: 30, name: 'Safety Goggles', description: 'Impact-resistant safety goggles with anti-fog coating.', category: 'construction', image: '/Construction & Maintenance/Construction & Maintenance.png' },
    { id: 31, name: 'High-Vis Safety Vests', description: 'Reflective safety vests for construction workers.', category: 'construction', image: '/Construction & Maintenance/Construction & Maintenance 2.png' },
    { id: 32, name: 'Tool Belt Set', description: 'Heavy-duty tool belt with multiple pouches and holders.', category: 'construction', image: '/Construction & Maintenance/Construction & Maintenance.png' },
    { id: 33, name: 'Safety Boots', description: 'Steel-toe safety boots with slip-resistant soles.', category: 'construction', image: '/Construction & Maintenance/Construction & Maintenance 2.png' },
    { id: 34, name: 'Measuring Tape Set', description: 'Professional measuring tapes for construction projects.', category: 'construction', image: '/Construction & Maintenance/Construction & Maintenance.png' },
    { id: 35, name: 'Power Tool Accessories', description: 'Drill bits, saw blades, and power tool accessories.', category: 'construction', image: '/Construction & Maintenance/Construction & Maintenance 2.png' },

    // Medical Supplies
    { id: 36, name: 'Disposable Face Masks', description: 'Medical-grade disposable face masks for healthcare.', category: 'medical', image: '/Medical Supplies & PPE/Medical Supplies & PPE.png' },
    { id: 37, name: 'Nitrile Gloves', description: 'Powder-free nitrile gloves for medical and laboratory use.', category: 'medical', image: '/Medical Supplies & PPE/Medical Supplies & PPE 2.png' },
    { id: 38, name: 'Hand Sanitizer', description: 'Medical-grade hand sanitizer with 70% alcohol content.', category: 'medical', image: '/Medical Supplies & PPE/Medical Supplies & PPE.png' },
    { id: 39, name: 'Digital Thermometers', description: 'Non-contact infrared thermometers for health screening.', category: 'medical', image: '/Medical Supplies & PPE/Medical Supplies & PPE 2.png' },
    { id: 40, name: 'First Aid Kits', description: 'Comprehensive first aid kits for workplace safety.', category: 'medical', image: '/Medical Supplies & PPE/Medical Supplies & PPE.png' },
    { id: 41, name: 'Medical Scrubs', description: 'Comfortable and durable medical scrubs for healthcare workers.', category: 'medical', image: '/Medical Supplies & PPE/Medical Supplies & PPE 2.png' },

    // Cleaning Products
    { id: 42, name: 'Industrial Floor Cleaner', description: 'Heavy-duty floor cleaner for commercial and industrial use.', category: 'cleaning', image: '/Cleaning Products/Cleaning Products.png' },
    { id: 43, name: 'Disinfectant Wipes', description: 'EPA-approved disinfectant wipes for surface cleaning.', category: 'cleaning', image: '/Cleaning Products/Cleaning Products 2.png' },
    { id: 44, name: 'All-Purpose Cleaner', description: 'Multi-surface cleaner for offices and commercial spaces.', category: 'cleaning', image: '/Cleaning Products/Cleaning Products.png' },
    { id: 45, name: 'Microfiber Cleaning Cloths', description: 'Lint-free microfiber cloths for streak-free cleaning.', category: 'cleaning', image: '/Cleaning Products/Cleaning Products 2.png' },
    { id: 46, name: 'Toilet Paper Bulk Pack', description: 'Commercial-grade toilet paper for high-traffic facilities.', category: 'cleaning', image: '/Cleaning Products/Cleaning Products.png' },
    { id: 47, name: 'Trash Bags Heavy Duty', description: 'Extra-strong trash bags for commercial waste disposal.', category: 'cleaning', image: '/Cleaning Products/Cleaning Products 2.png' },
    { id: 48, name: 'Glass Cleaner Spray', description: 'Streak-free glass cleaner for windows and mirrors.', category: 'cleaning', image: '/Cleaning Products/Cleaning Products.png' }
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
                  {/* Product Image */}
                  <div className="h-48 relative overflow-hidden">
                    <Image
                      src={product.image || "/a2febbb8c29cae9617056e08d9030046f22cc9d4.png"}
                      alt={product.name}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
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
