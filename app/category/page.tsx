"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
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
      name: "Corporate & Office Supplies",
      description: "Office equipment, stationery, and workspace essentials",
      image: "/corporateofficesupplies/corporateofficesupplies.png",
      productCount: 150
    },
    {
      id: 2,
      name: "Restaurant & Catering Supplies",
      description: "Food service equipment and catering essentials",
      image: "/Restaurant & Catering Supplies/Restaurant & Catering Supplies.png",
      productCount: 200
    },
    {
      id: 3,
      name: "Construction & Maintenance",
      description: "Tools, safety equipment, and maintenance supplies",
      image: "/Construction & Maintenance/Construction & Maintenance.png",
      productCount: 120
    },
    {
      id: 4,
      name: "Medical Supplies & PPE",
      description: "Healthcare products and personal protective equipment",
      image: "/Medical Supplies & PPE/Medical Supplies & PPE.png",
      productCount: 80
    },
    {
      id: 5,
      name: "Cleaning Products",
      description: "Industrial and commercial cleaning supplies",
      image: "/Cleaning Products/Cleaning Products.png",
      productCount: 300
    },
    {
      id: 6,
      name: "Safety Equipment",
      description: "Workplace safety gear and protective equipment",
      image: "/Construction & Maintenance/Construction & Maintenance 2.png",
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
