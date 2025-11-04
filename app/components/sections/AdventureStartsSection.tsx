"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function AdventureStartsSection() {
  return (
    <section className="bg-gray-600 py-16  bg-vector bg-cover bg-left bg-no-repeat">
      <div className="w-[90%] mx-auto px-4  ">
        <div className="grid grid-cols-2 gap-0 items-center gap-x-10">

          {/* Center - Image */}
          <div className="w-full h-full justify-center items-center flex">
            <div className="h-70 w-[100%] rounded-lg overflow-hidden relative">
              <Image
                src="/Construction & Maintenance/Construction & Maintenance 2.png"
                alt="Industrial Supplies and Equipment"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="">
            <div className="text-white">
              <h2 className="text-3xl font-bold mb-4">
                Your Adventure Starts Here!
              </h2>
              <p className="text-gray-300 mb-6 text-lg">
                Ready to explore the world? Start your journey with Voyagify today.
              </p>
              
              {/* Action Buttons */}
              <div className="flex space-x-4">
                <Link href="/category">
                  <button className="bg-primary text-white px-6 py-3 rounded font-medium hover:bg-primary-hover transition-colors duration-200">
                    Start Exploring
                  </button>
                </Link>
                <Link href="/contact">
                  <button className="bg-gray-500 text-white px-6 py-3 rounded font-medium hover:bg-gray-600 transition-colors duration-200">
                    Contact Us
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
