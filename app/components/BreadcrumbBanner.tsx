import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbBannerProps {
  title: string;
  breadcrumbs: BreadcrumbItem[];
  backgroundImage?: string;
  className?: string;
}

export default function BreadcrumbBanner({ 
  title, 
  breadcrumbs, 
  backgroundImage = '/a2febbb8c29cae9617056e08d9030046f22cc9d4.png',
  className = '' 
}: BreadcrumbBannerProps) {
  return (
    <section className={`relative py-16 h-[400px] flex items-center justify-center ${className}`}>
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#000000d6] to-[#000000]/0 z-10"></div>
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${backgroundImage})`
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-20">
        <div className="text-center">
          {/* Page Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {title}
          </h1>
          
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center justify-center space-x-2 text-sm">
            {breadcrumbs.map((item, index) => (
              <div key={index} className="flex items-center">
                {index > 0 && (
                  <svg 
                    className="w-4 h-4 text-gray-300 mx-2" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M9 5l7 7-7 7" 
                    />
                  </svg>
                )}
                
                {item.href ? (
                  <Link 
                    href={item.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors font-medium"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-white font-medium">
                    {item.label}
                  </span>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>
    </section>
  );
}
