"use client";

import { useState } from "react";
import Link from "next/link";
import Navigation from "../components/Navigation";
import { BreadcrumbBanner } from "../components";
import Footer from "../components/Footer";
import ProductSearchSection from "../components/sections/ProductSearchSection";
import CategoryFilterSection from "../components/sections/CategoryFilterSection";

export default function Category() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResultsCount, setSearchResultsCount] = useState(0);
  const categories = [
    {
      id: 1,
      name: "Electronics",
      description: "Latest gadgets and electronic devices",
      image: "📱",
      productCount: 150
    },
    {
      id: 2,
      name: "Fashion",
      description: "Trendy clothing and accessories",
      image: "👕",
      productCount: 200
    },
    {
      id: 3,
      name: "Home & Garden",
      description: "Everything for your home and garden",
      image: "🏠",
      productCount: 120
    },
    {
      id: 4,
      name: "Sports & Fitness",
      description: "Sports equipment and fitness gear",
      image: "⚽",
      productCount: 80
    },
    {
      id: 5,
      name: "Books & Media",
      description: "Books, movies, and educational content",
      image: "📚",
      productCount: 300
    },
    {
      id: 6,
      name: "Health & Beauty",
      description: "Health products and beauty essentials",
      image: "💄",
      productCount: 90
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative">
        <Navigation currentPage="/category" />
        <BreadcrumbBanner title="Product Categories" breadcrumbs={[{ label: "Home", href: "/" }, { label: "Product Categories", href: "/category" }]} />
      </div>
      
      {/* Product Search Section */}
      <ProductSearchSection 
        onSearch={setSearchQuery}
        searchQuery={searchQuery}
        resultsCount={searchResultsCount}
      />
      
      {/* Category Filter Section */}
      <CategoryFilterSection 
        searchQuery={searchQuery}
        onSearchResults={setSearchResultsCount}
      />


      <Footer />
    </div>
  );
}
