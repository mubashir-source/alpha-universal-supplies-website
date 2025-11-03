import React from "react";

interface WhyChooseFeature {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface WhyChooseSectionProps {
  className?: string;
  brandName?: string;
}

export default function WhyChooseSection({
  className = "",
  brandName = "Your Brand Name"
}: WhyChooseSectionProps) {
  const features: WhyChooseFeature[] = [
    {
      id: 1,
      title: "Wide Product Range",
      description: "At [Your Brand Name], we don't just provide products — we deliver reliability, efficiency, and exceptional business value. Our goal is to make your procurement process smooth, cost-effective, and trustworthy.",
      icon: (
        <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      )
    },
    {
      id: 2,
      title: "Verified Vendors",
      description: "Whether you run a restaurant, a construction company, a hospital, or a corporate office — we've got you covered.",
      icon: (
        <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      )
    },
    {
      id: 3,
      title: "Easy Vendor Registration",
      description: "We work only with pre-approved and verified suppliers to ensure every product meets industry standards. Our team reviews each vendor before listing, ensuring authenticity, durability, and industry compliance.",
      icon: (
        <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
        </svg>
      )
    }
  ];

  return (
    <section className={`w-[90%] mx-auto px-4 sm:px-6 lg:px-4 py-16 bg-white ${className}`}>
      <div className="w-full">
        {/* Header Section */}
        <div className="text-left mb-12">
          <h2 className="text-[40px] lg:text-5xl font-semibold text-gray-900 mb-6">
            Why Choose{" "}
            <span className="text-primary">[{brandName}]?</span>
          </h2>
          <p className="text-[#575757] text-[16px] mb-2 font-medium">
            Trusted by Businesses Across Industries
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div 
              key={feature.id}
              className="bg-primary rounded-lg p-8 text-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="mb-6">
                {feature.icon}
              </div>
              
              {/* Content */}
              <div>
                <h3 className="text-[24px] font-semibold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-white/90 text-[16px] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
