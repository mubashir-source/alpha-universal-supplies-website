"use client";

import React from 'react';
import Image from 'next/image';

export default function DiscoverWorldSection() {
  return (
    <section className="bg-white py-16">
      <div className="w-[90%] mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Text Content */}
          <div className="space-y-4">
            <h2 className="text-[48px] font-bold">
              <span className="text-blue-500">Discover</span>{" "}
              <span className="text-gray-900">the World <span className="text-primary">with Us</span></span>
            </h2>
            <p className="text-gray-600 text-[18px] leading-relaxed">
              Whether you're dreaming of a serene escape to an island paradise, 
              an adventurous trek through lush forests, or a cultural exploration of 
              historic cities, we're here to make your travel dreams a reality. 
              Your next unforgettable journey is just a click away.
            </p>
            <div className="rounded-lg h-150 overflow-hidden relative">
              <Image
                src="/corporateofficesupplies/corporateofficesupplies.png"
                alt="Corporate Office Supplies"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Side - Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            {/* Top Row - Two smaller images */}
            <div className="rounded-lg h-70 overflow-hidden relative">
              <Image
                src="/Restaurant & Catering Supplies/Restaurant & Catering Supplies.png"
                alt="Restaurant & Catering Supplies"
                fill
                className="object-cover"
              />
            </div>
            
            <div className="rounded-lg h-70 overflow-hidden relative">
              <Image
                src="/Medical Supplies & PPE/Medical Supplies & PPE.png"
                alt="Medical Supplies & PPE"
                fill
                className="object-cover"
              />
            </div>

            {/* Bottom Row - One larger image spanning both columns */}
            <div className="col-span-2 rounded-lg h-130 overflow-hidden relative">
              <Image
                src="/Construction & Maintenance/Construction & Maintenance.png"
                alt="Construction & Maintenance"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
