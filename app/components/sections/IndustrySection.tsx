import React from "react";
import Link from "next/link";
import Button from "../ui/Button";

interface IndustryCategory {
  id: number;
  title: string;
  description: string;
  image?: string;
  link: string;
}

interface IndustrySectionProps {
  className?: string;
}

export default function IndustrySection({
  className = "",
}: IndustrySectionProps) {
  const industries: IndustryCategory[] = [
    {
      id: 1,
      title: "Corporate & Office Supplies",
      description: "keyboards, cables, and stationery",
      image: "/corporateofficesupplies/corporateofficesupplies2.png",
      link: "/category/office-supplies",
    },
    {
      id: 2,
      title: "Restaurant & Catering Supplies",
      description: "packaging, utensils, and sanitizers",
      image: "/Restaurant & Catering Supplies/Restaurant & Catering Supplies.png",
      link: "/category/restaurant-supplies",
    },
    {
      id: 3,
      title: "Cleaning Products",
      description: "disinfectants, sanitizers, and cleaning tools",
      image: "/Cleaning Products/Cleaning Products.png",
      link: "/category/cleaning-products",
    },
    {
      id: 4,
      title: "Construction & Maintenance",
      description: "gloves, helmets, and safety tools",
      image: "/Construction & Maintenance/Construction & Maintenance.png",
      link: "/category/construction",
    },
    {
      id: 5,
      title: "Medical Supplies & PPE",
      description: "masks, gloves, and medical equipment",
      image: "/Medical Supplies & PPE/Medical Supplies & PPE.png",
      link: "/category/medical-supplies",
    },
  ];

  return (
    <section className="w-[90%] mx-auto px-4 sm:px-6 lg:px-4 py-16 bg-white">
      <div className="w-full">
        <div className="space-y-6 grid grid-cols-2 gap-4 items-start">
          <div>
            <h2 className="text-[40px] lg:text-5xl font-semibold text-gray-900 mb-4">
              Supplying Every Industry
            </h2>
            <h3 className="text-[40px] lg:text-5xl font-semibold text-primary mb-6">
              With Excellence
            </h3>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-[#575757] text-[18px] leading-relaxed">
              From restaurants to construction sites and offices to medical
              facilities — we connect businesses with the products they need to
              operate efficiently.
            </p>
            <Link href="/category">
              <Button variant="backgroundwhite" size="lg">
                View All Categories
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="grid grid-cols-3 gap-4">
          <div className="row-span-2 bg-cover bg-center bg-no-repeat rounded-lg p-6 flex flex-col justify-end min-h-[800px] relative overflow-hidden group hover:shadow-lg transition-shadow duration-300" style={{backgroundImage: `url('${industries[0].image}')`}}>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
            <p className="text-[19px] font-normal text-white">
                {industries[0].description}
              </p>
              <h4 className="text-[22px] font-semibold text-white mb-2">
                {industries[0].title}
              </h4>

            </div>
          </div>

          {/* Small card - top right */}
          <div className="bg-cover bg-center bg-no-repeat rounded-lg p-4 flex flex-col justify-end min-h-[140px] relative overflow-hidden group hover:shadow-lg transition-shadow duration-300" style={{backgroundImage: `url('${industries[1].image}')`}}>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
            <p className="text-[19px] font-normal text-white">
                {industries[1].description}
              </p>
              <h4 className="text-[22px] font-semibold text-white mb-1">
                {industries[1].title}
              </h4>

            </div>
          </div>

          {/* Small card - middle right */}
          <div className="bg-cover bg-center bg-no-repeat rounded-lg p-4 flex flex-col justify-end min-h-[140px] relative overflow-hidden group hover:shadow-lg transition-shadow duration-300" style={{backgroundImage: `url('${industries[2].image}')`}}>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
            <p className="text-[19px] font-normal text-white">
                {industries[2].description}
              </p>
              <h4 className="text-[22px] font-semibold text-white mb-1">
                {industries[2].title}
              </h4>

            </div>
          </div>

          {/* Bottom row - 2 cards */}
          <div className="bg-cover bg-center bg-no-repeat rounded-lg p-4 flex flex-col justify-end min-h-[140px] relative overflow-hidden group hover:shadow-lg transition-shadow duration-300" style={{backgroundImage: `url('${industries[3].image}')`}}>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
            <p className="text-[19px] font-normal text-white">
                {industries[3].description}
              </p>
              <h4 className="text-[22px] font-semibold text-white mb-1">
                {industries[3].title}
              </h4>

            </div>
          </div>

          <div className="bg-cover bg-center bg-no-repeat rounded-lg p-4 flex flex-col justify-end min-h-[140px] relative overflow-hidden group hover:shadow-lg transition-shadow duration-300" style={{backgroundImage: `url('${industries[4].image}')`}}>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
            <p className="text-[19px] font-normal text-white">
                {industries[4].description}
              </p>
              <h4 className="text-[22px] font-semibold text-white mb-1">
                {industries[4].title}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
