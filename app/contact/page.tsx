import Navigation from "../components/Navigation";
import BreadcrumbBanner from "../components/BreadcrumbBanner";
import ContactSection from "../components/sections/ContactSection";
import { Metadata } from "next";
import Footer from "../components/Footer";
import MapSection from "../components/sections/Mapsection";

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Contact Us" }
];

export const metadata: Metadata = {
  title: "Contact Us - YKBR",
  description: "Contact us for any questions or inquiries. We're here to help!",
};

export default function Contact() {

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <div className="relative">
          <Navigation currentPage="/contact" />
          <BreadcrumbBanner 
            title="Contact Us" 
            breadcrumbs={breadcrumbs}
          />
        </div>
        <ContactSection />
        <MapSection />
      </div>
      <Footer />
    </>
  );
}
