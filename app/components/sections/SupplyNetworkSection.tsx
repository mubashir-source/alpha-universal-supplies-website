import React from "react";

interface SupplyNetworkSectionProps {
  className?: string;
}

export default function SupplyNetworkSection({
  className = "",
}: SupplyNetworkSectionProps) {
  return (
    <section className={`py-16 bg-gray-50 ${className}`}>
      <div className="w-[90%] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 gap-12">
        <div className="">
          <h2 className="text-[48px] lg:text-[64px] font-bold text-black leading-tight">
            Visualize Your Supply Network
          </h2>
        </div>
        <div className="">
          <p className="text-[#575757] mx-auto text-[18px]">
            We connect businesses with verified vendors and manage end-to-end
            delivery across all major cities.
          </p>
        </div>
      </div>
      <div className="w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 items-center">
          {/* Left Side - Title */}

          {/* Center - Map */}
          <div className="">
            <div className="relative bg-white rounded-lg shadow-lg p-6 h-[500px]">
              {/* Map Container */}
              <div className="relative w-full h-full bg-gray-100 rounded-lg overflow-hidden">
                {/* Map Background - Using SVG for a simple map representation */}
                <svg
                  viewBox="0 0 600 400"
                  className="w-full h-full"
                  style={{ background: "#f8f9fa" }}
                >
                  {/* Map Outline - Simple representation */}
                  <path
                    d="M50 50 L550 50 L550 350 L50 350 Z"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="2"
                  />

                  {/* Region shapes - representing different areas */}
                  <path
                    d="M80 80 L200 80 L200 150 L80 150 Z"
                    fill="#e5e7eb"
                    stroke="#d1d5db"
                    strokeWidth="1"
                  />
                  <path
                    d="M220 100 L350 100 L350 180 L220 180 Z"
                    fill="#f3f4f6"
                    stroke="#d1d5db"
                    strokeWidth="1"
                  />
                  <path
                    d="M370 90 L500 90 L500 170 L370 170 Z"
                    fill="#e5e7eb"
                    stroke="#d1d5db"
                    strokeWidth="1"
                  />
                  <path
                    d="M100 200 L280 200 L280 300 L100 300 Z"
                    fill="#f9fafb"
                    stroke="#d1d5db"
                    strokeWidth="1"
                  />
                  <path
                    d="M300 220 L480 220 L480 320 L300 320 Z"
                    fill="#e5e7eb"
                    stroke="#d1d5db"
                    strokeWidth="1"
                  />

                  {/* Location Pins */}
                  {/* Pin 1 - Polokwane */}
                  <g>
                    <circle cx="150" cy="120" r="8" fill="#0194F3" />
                    <circle cx="150" cy="120" r="4" fill="white" />
                    <text
                      x="160"
                      y="115"
                      fontSize="10"
                      fill="#374151"
                      fontWeight="500"
                    >
                      Polokwane
                    </text>
                  </g>

                  {/* Pin 2 - Johannesburg */}
                  <g>
                    <circle cx="280" cy="250" r="8" fill="#0194F3" />
                    <circle cx="280" cy="250" r="4" fill="white" />
                    <text
                      x="290"
                      y="245"
                      fontSize="10"
                      fill="#374151"
                      fontWeight="500"
                    >
                      Johannesburg
                    </text>
                  </g>

                  {/* Pin 3 - Cape Town */}
                  <g>
                    <circle cx="200" cy="320" r="8" fill="#0194F3" />
                    <circle cx="200" cy="320" r="4" fill="white" />
                    <text
                      x="210"
                      y="315"
                      fontSize="10"
                      fill="#374151"
                      fontWeight="500"
                    >
                      Cape Town
                    </text>
                  </g>

                  {/* Pin 4 - Durban */}
                  <g>
                    <circle cx="420" cy="280" r="8" fill="#0194F3" />
                    <circle cx="420" cy="280" r="4" fill="white" />
                    <text
                      x="430"
                      y="275"
                      fontSize="10"
                      fill="#374151"
                      fontWeight="500"
                    >
                      Durban
                    </text>
                  </g>

                  {/* Pin 5 - Pretoria */}
                  <g>
                    <circle cx="290" cy="230" r="8" fill="#0194F3" />
                    <circle cx="290" cy="230" r="4" fill="white" />
                    <text
                      x="300"
                      y="225"
                      fontSize="10"
                      fill="#374151"
                      fontWeight="500"
                    >
                      Pretoria
                    </text>
                  </g>

                  {/* Pin 6 - Port Elizabeth */}
                  <g>
                    <circle cx="350" cy="300" r="8" fill="#0194F3" />
                    <circle cx="350" cy="300" r="4" fill="white" />
                    <text
                      x="360"
                      y="295"
                      fontSize="10"
                      fill="#374151"
                      fontWeight="500"
                    >
                      Port Elizabeth
                    </text>
                  </g>

                  {/* Pin 7 - Bloemfontein */}
                  <g>
                    <circle cx="250" cy="200" r="8" fill="#0194F3" />
                    <circle cx="250" cy="200" r="4" fill="white" />
                    <text
                      x="260"
                      y="195"
                      fontSize="10"
                      fill="#374151"
                      fontWeight="500"
                    >
                      Bloemfontein
                    </text>
                  </g>

                  {/* Pin 8 - East London */}
                  <g>
                    <circle cx="380" cy="310" r="8" fill="#0194F3" />
                    <circle cx="380" cy="310" r="4" fill="white" />
                    <text
                      x="390"
                      y="305"
                      fontSize="10"
                      fill="#374151"
                      fontWeight="500"
                    >
                      East London
                    </text>
                  </g>

                  {/* Connection Lines */}
                  <line
                    x1="150"
                    y1="120"
                    x2="280"
                    y2="250"
                    stroke="#0194F3"
                    strokeWidth="2"
                    opacity="0.3"
                    strokeDasharray="5,5"
                  />
                  <line
                    x1="280"
                    y1="250"
                    x2="420"
                    y2="280"
                    stroke="#0194F3"
                    strokeWidth="2"
                    opacity="0.3"
                    strokeDasharray="5,5"
                  />
                  <line
                    x1="200"
                    y1="320"
                    x2="350"
                    y2="300"
                    stroke="#0194F3"
                    strokeWidth="2"
                    opacity="0.3"
                    strokeDasharray="5,5"
                  />
                  <line
                    x1="290"
                    y1="230"
                    x2="250"
                    y2="200"
                    stroke="#0194F3"
                    strokeWidth="2"
                    opacity="0.3"
                    strokeDasharray="5,5"
                  />
                </svg>

                {/* Map Legend */}
                <div className="absolute bottom-4 left-4 bg-white p-3 rounded-lg shadow-md">
                  <p className="text-xs text-gray-600 mb-2 font-medium">
                    Supply Network
                  </p>
                  <div className="flex items-center space-x-2 mb-1">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-xs text-gray-600">
                      Distribution Centers
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-0.5 bg-blue-500 opacity-50"></div>
                    <span className="text-xs text-gray-600">Supply Routes</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="">
            {/* Top Right Text */}

            {/* Streamlined Procurement Section */}
            <div className="space-y-4">
              <h3 className="text-[24px] font-bold text-black">
                Streamlined Procurement and Reliable Delivery
              </h3>
              <div className="space-y-3">
                <p className="text-[#575757] text-[16px] leading-relaxed">
                  We connect businesses with verified vendors and manage
                  end-to-end delivery across all major cities.
                </p>
                <p className="text-[#575757] text-[16px] leading-relaxed">
                  Our smart logistics ensure that your supplies arrive on time,
                  every time, whether it's a single box or bulk industrial
                  order.
                </p>
              </div>
            </div>

            {/* Vendor Management Section */}
            <div className="space-y-4">
              <h3 className="text-[28px] font-bold text-black">
                Vendor Management Made Simple
              </h3>
              <p className="text-[#575757] text-[16px] leading-relaxed">
                Our vendor registration process ensures only qualified suppliers
                are added to our network. Businesses can rely on genuine,
                verified, and quality-assured products.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
