import React from "react";
import Link from "next/link";
import Button from "../ui/Button";

interface SupplyCategory {
  id: number;
  title: string;
  description: string;
  image?: string;
  link: string;
}

interface FeaturedSupplySectionProps {
  className?: string;
}

export default function FeaturedSupplySection({
  className = "",
}: FeaturedSupplySectionProps) {
  const supplyCategories: SupplyCategory[] = [
    {
      id: 1,
      title: "Office Essentials Kit",
      description: "Cables, keyboards, and workspace tools.",
      link: "/category/office-essentials",
    },
    {
      id: 2,
      title: "Restaurant Starter Pack",
      description: "To-go boxes, foils, napkins, and sanitizers.",
      link: "/category/restaurant-supplies",
    },
    {
      id: 3,
      title: "Safety & Maintenance Gear",
      description: "Gloves, goggles, and protective clothing.",
      link: "/category/safety-gear",
    },
  ];

  return (
    <section className={`w-[90%] mx-auto px-4 sm:px-6 lg:px-4 py-16 bg-white ${className}`}>
      <div className="w-full">
        {/* Header Section */}
        <div className="flex justify-between items-end mb-12">
          <div className="flex-1">
            <p className="text-[#575757] text-[16px] mb-2 font-medium">
              Featured Supply Categories
            </p>
            <h2 className="text-[40px] lg:text-5xl font-semibold text-primary mb-2">
              Handpicked{" "}
              <span className="text-gray-900">Supplies</span>
            </h2>
            <h3 className="text-[40px] lg:text-5xl font-semibold text-gray-900 mb-6">
              for Your{" "}
              <span className="text-primary">Business</span>
            </h3>
            <p className="text-[#575757] text-[18px] leading-relaxed max-w-2xl">
              Explore our curated range of industrial and commercial supplies, ensuring top-quality and 
              reliability in every order.
            </p>
          </div>
          <div className="shrink-0 ml-8">
            <Link href="/quote">
              <Button variant="backgroundwhite" size="lg">
                Request a Quote
              </Button>
            </Link>
          </div>
        </div>

        {/* Supply Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {supplyCategories.map((category) => (
            <Link 
              key={category.id} 
              href={category.link}
              className="block group"
            >
              <div className="bg-linear-to-br from-gray-300 to-gray-500 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-1">
                {/* Image Placeholder */}
                <div className="h-100 bg-linear-to-br from-gray-400 to-gray-600 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent"></div>
                  {/* Image Icon Placeholder */}
                  <div className="relative z-10">
                    <svg 
                      className="w-16 h-16 text-white/70" 
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
                      <circle cx="12" cy="12" r="1" fill="currentColor" />
                    </svg>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6 bg-white">
                  <h4 className="text-[24px] font-semibold text-black mb-2 group-hover:text-primary transition-colors duration-300">
                    {category.title}
                  </h4>
                  <p className="text-[#575757] text-[14px] leading-relaxed">
                    {category.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
