'use client'
import { useState } from 'react';
import Link from 'next/link';
import Button from '../ui/Button';

interface Category {
  id: string;
  title: string;
  description: string;
  image: string;
  buttonText: string;
  buttonLink: string;
}

interface SupplyCategoriesSectionProps {
  className?: string;
}

export default function SupplyCategoriesSection({ className = '' }: SupplyCategoriesSectionProps) {
  const categories: Category[] = [
    {
      id: 'corporate',
      title: 'Corporate & Office Supplies',
      description: 'Equip your workspace with essential tools and technology. From office furniture and equipment to stationery and IT accessories, we supply everything that keeps your business running efficiently.',
      image: '/a2febbb8c29cae9617056e08d9030046f22cc9d4.png',
      buttonText: 'View Category',
      buttonLink: '/category'
    },
    {
      id: 'restaurant',
      title: 'Restaurant & Catering Supplies',
      description: 'Complete solutions for your food service business. From commercial kitchen equipment to dining essentials, we provide quality supplies that meet industry standards and help your restaurant succeed.',
      image: '/a2febbb8c29cae9617056e08d9030046f22cc9d4.png',
      buttonText: 'View Category',
      buttonLink: '/category'
    },
    {
      id: 'construction',
      title: 'Construction & Maintenance',
      description: 'Professional-grade tools and materials for construction and maintenance projects. Safety equipment, power tools, building materials, and maintenance supplies for all your project needs.',
      image: '/a2febbb8c29cae9617056e08d9030046f22cc9d4.png',
      buttonText: 'View Category',
      buttonLink: '/category'
    },
    {
      id: 'medical',
      title: 'Medical & Cleaning Products',
      description: 'Healthcare and hygiene solutions for medical facilities and businesses. Medical supplies, cleaning products, sanitization equipment, and safety gear to maintain health standards.',
      image: '/a2febbb8c29cae9617056e08d9030046f22cc9d4.png',
      buttonText: 'View Category',
      buttonLink: '/category'
    }
  ];

  const [activeCategory, setActiveCategory] = useState('corporate');
  const currentCategory = categories.find(cat => cat.id === activeCategory) || categories[0];

  return (
    <section className={`py-16 bg-white ${className}`}>
      <div className="w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-left mb-12">
          <h2 className="text-[64px] font-bold text-black mb-4">
            Explore Our Core Supply Categories
          </h2>
          <p className="text-[#575757] mx-auto text-[18px]">
            Discover a complete range of industrial, commercial, and corporate supplies — all carefully categorized to meet your business needs.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-between gap-0 mb-12 w-full border-b-1 border-[#EBEBEB]">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-[18px] transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-transparent text-primary border-b-1 border-primary rounded-none'
                  : 'bg-transparent text-[#575757] border-b-1 border-[#EBEBEB] hover:bg-transparent hover:border-b-primary hover:text-primary rounded-none'
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Category Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-lg shadow-lg h-[440px]">
              <img
                src={currentCategory.image}
                alt={currentCategory.title}
                className="w-full h-full object-cover"
              />
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center shadow-lg hover:bg-opacity-100 transition-all duration-300">
                  <svg className="w-6 h-6 text-gray-800 ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-6">
            <h3 className="text-[36px] font-bold text-black">
              {currentCategory.title}
            </h3>
            <p className="text-[#575757] font-[18px] leading-relaxed text-lg">
              {currentCategory.description}
            </p>
            <div>
              <Link href={currentCategory.buttonLink}>
                <Button variant="backgroundwhite" size="lg">
                  {currentCategory.buttonText}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
