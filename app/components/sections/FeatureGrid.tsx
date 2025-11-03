import React from 'react';
import Link from 'next/link';
import Card from '../ui/Card';

interface Feature {
  title: string;
  description: string;
  icon?: string;
  link?: {
    href: string;
    label: string;
  };
}

interface FeatureGridProps {
  features: Feature[];
  columns?: 2 | 3 | 4;
  className?: string;
}

export default function FeatureGrid({ 
  features, 
  columns = 3, 
  className = '' 
}: FeatureGridProps) {
  const gridClasses = {
    2: 'grid md:grid-cols-2 gap-8',
    3: 'grid md:grid-cols-3 gap-8',
    4: 'grid md:grid-cols-2 lg:grid-cols-4 gap-8'
  };

  return (
    <section className={`max-w-7xl mx-auto px-4 ${className}`}>
      <div className={gridClasses[columns]}>
        {features.map((feature, index) => (
          <Card key={index} hover className="text-center">
            {feature.icon && (
              <div className="text-4xl mb-4">{feature.icon}</div>
            )}
            <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
            <p className="text-gray-600 mb-4">{feature.description}</p>
            {feature.link && (
              <Link 
                href={feature.link.href} 
                className="text-blue-600 hover:underline mt-2 inline-block"
              >
                {feature.link.label} →
              </Link>
            )}
          </Card>
        ))}
      </div>
    </section>
  );
}
