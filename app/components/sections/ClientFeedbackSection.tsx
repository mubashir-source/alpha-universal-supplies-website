'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface Testimonial {
  id: number;
  rating: number;
  feedback: string;
  clientName: string;
  position: string;
  company: string;
  image: string;
}

interface ClientFeedbackSectionProps {
  className?: string;
}

export default function ClientFeedbackSection({ className = '' }: ClientFeedbackSectionProps) {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      rating: 5,
      feedback: "Excellent Service & Reliable Quality. We've partnered with [Your Brand Name] for all our catering supplies. Their timely delivery and product quality have been outstanding. Excellent Service & Reliable Quality. We've partnered with [Your Brand Name] for all our catering supplies. Their timely delivery and product quality have been outstanding.",
      clientName: "Operations Manager",
      position: "Operations Manager",
      company: "FoodChain Pvt. Ltd.",
      image: "/a2febbb8c29cae9617056e08d9030046f22cc9d4.png"
    },
    {
      id: 2,
      rating: 5,
      feedback: "Excellent Service & Reliable Quality. We've partnered with [Your Brand Name] for all our catering supplies. Their timely delivery and product quality have been outstanding. Excellent Service & Reliable Quality. We've partnered with [Your Brand Name] for all our catering supplies. Their timely delivery and product quality have been outstanding.",
      clientName: "Procurement Head",
      position: "Procurement Head",
      company: "Industrial Equipment Co.",
      image: "/a2febbb8c29cae9617056e08d9030046f22cc9d4.png"
    },
    {
      id: 3,
      rating: 5,
      feedback: "Outstanding support and quality products. Their team understands our business needs and consistently delivers beyond expectations. The reliability of their supply chain has been crucial for our operations.",
      clientName: "Supply Chain Director",
      position: "Supply Chain Director",
      company: "Manufacturing Solutions Ltd.",
      image: "/a2febbb8c29cae9617056e08d9030046f22cc9d4.png"
    },
    {
      id: 4,
      rating: 5,
      feedback: "Professional service and competitive pricing. We've been working with them for over two years and they continue to exceed our expectations in both quality and delivery times.",
      clientName: "Purchasing Manager",
      position: "Purchasing Manager",
      company: "Corporate Services Inc.",
      image: "/a2febbb8c29cae9617056e08d9030046f22cc9d4.png"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        className={`w-5 h-5 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section className={`py-16 bg-white ${className}`}>
      <div className="w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-left mb-12">
          <h2 className="text-[48px] lg:text-[64px] font-bold text-black mb-4">
            Client & Partner Feedback
          </h2>
          <p className="text-[#575757] text-[18px] max-w-2xl">
            Hear from businesses who trust us for their daily supply needs.
          </p>
        </div>

        {/* Testimonials Slider */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={2}
            navigation={{
              nextEl: '.testimonial-button-next',
              prevEl: '.testimonial-button-prev',
            }}
            pagination={{
              el: '.testimonial-pagination',
              clickable: true,
              bulletClass: 'swiper-pagination-bullet testimonial-bullet',
              bulletActiveClass: 'swiper-pagination-bullet-active testimonial-bullet-active',
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 1,
                spaceBetween: 25,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
            }}
            className="testimonials-swiper"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 h-full">
                  {/* Star Rating */}
                  <div className="flex items-center mb-6">
                    {renderStars(testimonial.rating)}
                  </div>

                  {/* Feedback Text */}
                  <p className="text-[#575757] font-normal text-[18px] leading-relaxed mb-8 line-clamp-6">
                    {testimonial.feedback}
                  </p>

                  {/* Client Info */}
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-[18px] font-bold text-black mb-1">
                        {testimonial.clientName}
                      </h4>
                      <p className="text-[#575757] text-[14px]">
                        {testimonial.company}
                      </p>
                    </div>
                    
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8">
            {/* Pagination Dots */}
            <div className="testimonial-pagination flex items-center space-x-2"></div>

            {/* Navigation Arrows */}
            <div className="flex items-center space-x-4">
              <button className="testimonial-button-prev w-12 h-12 bg-white border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button className="testimonial-button-next w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx global>{`
        .testimonial-bullet {
          width: 12px;
          height: 12px;
          background: #d1d5db;
          border-radius: 50%;
          cursor: pointer;
          transition: all 0.3s ease;
          opacity: 1;
        }
        
        .testimonial-bullet-active {
          background: #0194F3;
          transform: scale(1.2);
        }
        
        .testimonials-swiper .swiper-slide {
          height: auto;
        }
        
        .line-clamp-6 {
          display: -webkit-box;
          -webkit-line-clamp: 6;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
}
