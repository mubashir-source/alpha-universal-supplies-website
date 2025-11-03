import Link from "next/link";
import Button from "./ui/Button";

interface NavigationProps {
  currentPage?: string;
}

export default function Navigation({ currentPage }: NavigationProps) {
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/category", label: "Products" },
    { href: "/contact", label: "Contact" }
  ];

  return (
    <div className="w-full flex justify-center absolute top-0 left-0 z-50">
    <nav className="backdrop-blur-[16.2px] mt-5 rounded-md bg-white/10 shadow-lg w-[90%]">
      <div className="mx-auto px-4 py-2 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Brand Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">Y</span>
              </div>
              <span className="text-xl font-bold text-white">Brand Name</span>
            </Link>
          </div>

          {/* Navigation Items */}
          <div className="hidden md:flex items-center space-x-15">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-white hover:text-primary transition-colors duration-200 text-sm font-semibold ${
                  currentPage === item.href ? "text-primary" : ""
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            <Link href="/seller-register">
              <Button size="lg">
                Vendor Registration
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-gray-700 hover:text-primary">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
    </div>
  );
}
