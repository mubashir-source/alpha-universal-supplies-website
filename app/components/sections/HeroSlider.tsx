'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectFade } from 'swiper/modules';
import Link from 'next/link';
import Button from '../ui/Button';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

interface SlideContent {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  primaryAction: {
    label: string;
    href: string;
  };
  secondaryAction: {
    label: string;
    href: string;
  };
  backgroundImage: string;
}

interface HeroSliderProps {
  slides: SlideContent[];
  className?: string;
}

export default function HeroSlider({ slides, className = '' }: HeroSliderProps) {
  return (
    <section className={`relative min-h-screen ${className}`}>
      <Swiper
        modules={[Navigation, Autoplay, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        navigation={{
          nextEl: '.swiper-button-next-custom',
          prevEl: '.swiper-button-prev-custom',
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        speed={1000}
        effect="fade"
        fadeEffect={{
          crossFade: true,
        }}
        loop={true}
        className="h-screen"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} >
            <div className="relative w-full h-full flex items-center justify-start">
              {/* Background */}
              <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-[#000000d6] to-[#000000]/0 z-10"></div>
                <div 
                  className="w-full h-full bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: `url(${slide.backgroundImage})`
                  }}
                ></div>
              </div>

              {/* Content */}
              <div className="relative z-20 pl-8 sm:pl-12 lg:pl-27 pr-4 text-left w-[50%] flex items-center h-full">
                <div className="w-full">
                  <h1 className="text-[64px] md:text-5xl lg:text-[64px] font-semibold text-white mb-6 leading-tight">
                    {slide.title}
                  </h1>
                  <p className="text-[18px] md:text-[18px] text-[#C2BEBE] mb-8 w-full">
                    {slide.description}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 items-start">
                    <Link href={slide.primaryAction.href}>
                      <Button
                        variant="primary"
                        size="xl"
                      >
                        {slide.primaryAction.label}
                      </Button>
                    </Link>
                    <Link href={slide.secondaryAction.href}>
                      <Button 
                        variant="transparent" 
                        size="xl" 
                      >
                        {slide.secondaryAction.label}
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <div className="swiper-button-prev-custom absolute right-32 top-1/2 transform -translate-y-8 z-30 w-15 h-15 bg-white rounded-full flex items-center justify-center text-black  hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </div>
      
      <div className="swiper-button-next-custom absolute right-32 top-1/2 transform translate-y-8 z-30 w-15 h-15 bg-primary rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300 cursor-pointer">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>


      {/* Floating Elements */}
      <div className="absolute top-1/4 right-24 w-16 h-16 bg-white/10 rounded-full backdrop-blur-sm hidden lg:block animate-pulse"></div>
      <div className="absolute bottom-1/3 left-10 w-12 h-12 bg-blue-400/20 rounded-full backdrop-blur-sm hidden lg:block animate-pulse delay-1000"></div>
    </section>
  );
}
