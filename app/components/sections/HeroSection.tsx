import React from 'react';
import Link from 'next/link';
import Button from '../ui/Button';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  primaryAction?: {
    label: string;
    href: string;
  };
  secondaryAction?: {
    label: string;
    href: string;
  };
  className?: string;
}

export default function HeroSection({
  title,
  subtitle,
  primaryAction,
  secondaryAction,
  className = ''
}: HeroSectionProps) {
  return (
    <section className={`relative min-h-screen flex items-center justify-center ${className}`}>
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-800/60 z-10"></div>
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800"><defs><linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:%23374151;stop-opacity:1" /><stop offset="100%" style="stop-color:%231f2937;stop-opacity:1" /></linearGradient></defs><rect width="1200" height="800" fill="url(%23bg)"/></svg>')`
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
          
          {(primaryAction || secondaryAction) && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {primaryAction && (
                <Link href={primaryAction.href}>
                  <Button size="lg" className="w-full sm:w-auto px-8 py-4 text-lg font-semibold">
                    {primaryAction.label}
                  </Button>
                </Link>
              )}
              {secondaryAction && (
                <Link href={secondaryAction.href}>
                  <Button 
                    variant="secondary" 
                    size="lg" 
                    className="w-full sm:w-auto px-8 py-4 text-lg font-semibold bg-white/10 text-white border border-white/20 hover:bg-white/20 backdrop-blur-sm"
                  >
                    {secondaryAction.label}
                  </Button>
                </Link>
              )}
            </div>
          )}
        </div>

        {/* Floating Elements */}
        <div className="absolute top-1/4 right-10 w-16 h-16 bg-white/10 rounded-full backdrop-blur-sm hidden lg:block animate-pulse"></div>
        <div className="absolute bottom-1/3 left-10 w-12 h-12 bg-blue-400/20 rounded-full backdrop-blur-sm hidden lg:block animate-pulse delay-1000"></div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
