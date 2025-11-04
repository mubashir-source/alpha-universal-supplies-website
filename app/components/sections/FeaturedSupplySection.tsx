import React from "react";
import Link from "next/link";
import Image from "next/image";
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
      image: "/corporateofficesupplies/corporateofficesupplies.png",
      link: "/category/office-essentials",
    },
    {
      id: 2,
      title: "Restaurant Starter Pack",
      description: "To-go boxes, foils, napkins, and sanitizers.",
      image: "/Restaurant & Catering Supplies/Restaurant & Catering Supplies.png",
      link: "/category/restaurant-supplies",
    },
    {
      id: 3,
      title: "Safety & Maintenance Gear",
      description: "Gloves, goggles, and protective clothing.",
      image: "/Construction & Maintenance/Construction & Maintenance.png",
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
              <div className="bg-white rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-1 border border-gray-200">
                {/* Category Image */}
                <div className="h-100 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10"></div>
                  <Image
                    src={category.image || "/a2febbb8c29cae9617056e08d9030046f22cc9d4.png"}
                    alt={category.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
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
