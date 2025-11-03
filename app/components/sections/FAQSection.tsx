'use client';

import React, { useState, useEffect } from "react";
import Button from "../ui/Button";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  className?: string;
}

const faqData: FAQItem[] = [
  {
    question: "How can I become a vendor on your platform?",
    answer: "Becoming a vendor with [Your Brand Name] is simple. Just visit our Vendor Registration section and fill out the online form with your company details, product categories, and contact information. Once submitted, our verification team will review your application. If your business meets our quality and compliance standards, we'll get in touch to complete the onboarding process."
  },
  {
    question: "Can I manage or update my product listings after registration?",
    answer: "Yes, once you're registered as a vendor, you'll have access to a comprehensive vendor dashboard where you can manage your product listings, update inventory, modify pricing, and track your sales performance in real-time."
  },
  {
    question: "Do you deliver products nationwide?",
    answer: "Yes, we provide nationwide delivery services through our extensive logistics network. We work with trusted shipping partners to ensure your products reach customers safely and on time, regardless of their location."
  },
  {
    question: "What type of products do you supply?",
    answer: "We supply a wide range of industrial and commercial products including machinery, tools, safety equipment, raw materials, office supplies, and specialized equipment for various industries such as manufacturing, construction, healthcare, and more."
  }
];

const partnerTexts = [
  {
    text: "Your Reliable Partner for Industrial and Commercial Supplies.",
    image: "/a2febbb8c29cae9617056e08d9030046f22cc9d4.png"
  },
  {
    text: "Trusted Solutions for Every Business Need.",
    image: "/a2febbb8c29cae9617056e08d9030046f22cc9d4.png"
  },
  {
    text: "Quality Products, Exceptional Service, Nationwide Delivery.",
    image: "/a2febbb8c29cae9617056e08d9030046f22cc9d4.png"
  },
  {
    text: "Empowering Industries with Premium Supplies.",
    image: "/a2febbb8c29cae9617056e08d9030046f22cc9d4.png"
  },
  {
    text: "Your One-Stop Shop for Professional Equipment.",
    image: "/a2febbb8c29cae9617056e08d9030046f22cc9d4.png"
  }
];

export default function FAQSection({ className = "" }: FAQSectionProps) {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);
  const [currentPartnerIndex, setCurrentPartnerIndex] = useState(0);

  // Rotate partner text every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPartnerIndex((prevIndex) => 
        (prevIndex + 1) % partnerTexts.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className={`w-full bg-gray-50 py-20 ${className}`}>
      <div className="w-[90%] mx-auto px-4 sm:px-6 lg:px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - FAQ */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Got Questions?
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                Find quick answers to the most common questions about our products, 
                services, and vendor registration process.
              </p>
              <Button variant="backgroundwhite" size="md">
                Visit FAQ Page
              </Button>
            </div>

            {/* FAQ Items */}
            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-lg bg-white">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-medium text-gray-900 text-base">
                      {faq.question}
                    </span>
                    <svg
                      className={`w-5 h-5 text-gray-500 transform transition-transform ${
                        openFAQ === index ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {openFAQ === index && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Image and Quote */}
          <div className="space-y-6">
            {/* Image Placeholder */}
            <div className="bg-gray-300 rounded-lg h-150 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <svg
                  className="w-16 h-16 mx-auto mb-4 opacity-50"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <p className="text-sm">Image Placeholder</p>
              </div>
            </div>

            {/* Quote Box */}
            <div className="bg-blue-500 rounded-lg p-8 text-white relative overflow-hidden mt-[-90px] w-[80%]">
              <div className="relative z-10">
                <div className="text-4xl mb-4 opacity-20">"</div>
                <p className="text-lg font-medium leading-relaxed transition-all duration-500">
                  {partnerTexts[currentPartnerIndex].text}
                </p>
              </div>
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full -mr-16 -mt-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white opacity-5 rounded-full -ml-12 -mb-12"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
