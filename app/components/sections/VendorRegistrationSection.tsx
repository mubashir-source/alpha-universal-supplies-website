import React from "react";
import Link from "next/link";
import Button from "../ui/Button";

interface VendorRegistrationSectionProps {
  className?: string;
}

export default function VendorRegistrationSection({
  className = ""
}: VendorRegistrationSectionProps) {
  return (
    <section className={`w-full bg-gray-700 py-20 ${className}`}>
      <div className="w-[90%] mx-auto px-4 sm:px-6 lg:px-4">
        <div className="text-center">
          {/* Main Heading */}
          <h2 className="text-[64px] font-bold text-white mb-6">
            Become a Vendor with Us!
          </h2>
          
          {/* Description */}
          <p className="text-white/90 text-[24px] font-normal mx-auto mb-8 leading-relaxed">
            Join our network of trusted suppliers. Submit your details using our vendor registration form, and our team will 
            review and onboard you.
          </p>
          
          {/* Call to Action Button */}
          <Link href="/seller-register">
          <Button 
            variant="primary"
            size="lg"
          >
            Register Now
          </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
