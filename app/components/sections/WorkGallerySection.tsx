import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from '../ui/Button';

interface WorkGallerySectionProps {
  className?: string;
}

export default function WorkGallerySection({ className = '' }: WorkGallerySectionProps) {
  return (
    <section className={`relative py-20 bg-white overflow-hidden h-[1000px] flex items-center justify-center ${className}`}>
      {/* Animated Background Images */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top Left Image */}
        <div className="absolute top-16 left-16 w-48 h-32 rounded-lg shadow-lg animate-float-1 overflow-hidden">
          <Image
            src="/corporateofficesupplies/corporateofficesupplies.png"
            alt="Corporate Office Supplies"
            fill
            className="object-cover"
          />
        </div>

        {/* Top Center Image */}
        <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-40 h-28 rounded-lg shadow-lg animate-float-2 overflow-hidden">
          <Image
            src="/Restaurant & Catering Supplies/Restaurant & Catering Supplies.png"
            alt="Restaurant & Catering Supplies"
            fill
            className="object-cover"
          />
        </div>

        {/* Top Right Image */}
        <div className="absolute top-12 right-16 w-44 h-30 rounded-lg shadow-lg animate-float-3 overflow-hidden">
          <Image
            src="/Construction & Maintenance/Construction & Maintenance.png"
            alt="Construction & Maintenance"
            fill
            className="object-cover"
          />
        </div>

        {/* Far Right Image */}
        <div className="absolute top-1/3 right-4 w-36 h-48 rounded-lg shadow-lg animate-float-4 overflow-hidden">
          <Image
            src="/Medical Supplies & PPE/Medical Supplies & PPE.png"
            alt="Medical Supplies & PPE"
            fill
            className="object-cover"
          />
        </div>

        {/* Bottom Left Image */}
        <div className="absolute bottom-16 left-8 w-32 h-44 rounded-lg shadow-lg animate-float-5 overflow-hidden">
          <Image
            src="/Cleaning Products/Cleaning Products.png"
            alt="Cleaning Products"
            fill
            className="object-cover"
          />
        </div>

        {/* Bottom Center Image */}
        <div className="absolute bottom-8 left-1/3 w-52 h-36 rounded-lg shadow-lg animate-float-6 overflow-hidden">
          <Image
            src="/corporateofficesupplies/corporateofficesupplies2.png"
            alt="Corporate Office Supplies"
            fill
            className="object-cover"
          />
        </div>

        {/* Bottom Right Image */}
        <div className="absolute bottom-20 right-1/4 w-38 h-28 rounded-lg shadow-lg animate-float-7 overflow-hidden">
          <Image
            src="/Restaurant & Catering Supplies/Restaurant & Catering Supplies 2.png"
            alt="Restaurant & Catering Supplies"
            fill
            className="object-cover"
          />
        </div>

        {/* Far Bottom Right Image */}
        <div className="absolute bottom-4 right-8 w-40 h-56 rounded-lg shadow-lg animate-float-8 overflow-hidden">
          <Image
            src="/Medical Supplies & PPE/Medical Supplies & PPE 2.png"
            alt="Medical Supplies & PPE"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
          See Our Work in Action
        </h2>
        <p className="text-[#575757] text-lg md:text-xl leading-relaxed mb-8 max-w-2xl mx-auto">
          Explore how we support industries with reliable supply chain management and quality control. Our growing network of vendors and clients showcases our commitment to excellence.
        </p>
        <Link href="/gallery">
          <Button variant="backgroundwhite" size="lg">
            View Full Gallery
          </Button>
        </Link>
      </div>
    </section>
  );
}
