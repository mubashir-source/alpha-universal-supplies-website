import { Metadata } from "next";
import Navigation from "../components/Navigation";
import BreadcrumbBanner from "../components/BreadcrumbBanner";
import SupplyCategoriesSection from "../components/sections/SupplyCategoriesSection";
import SupplyNetworkSection from "../components/sections/SupplyNetworkSection";
import WorkGallerySection from "../components/sections/WorkGallerySection";
import ClientFeedbackSection from "../components/sections/ClientFeedbackSection";
import FAQSection from "../components/sections/FAQSection";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "About Us - YKBR",
  description: "Learn about YKBR - Your premier destination for quality products and services. Discover our story, mission, and commitment to excellence.",
};

export default function About() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "About Us" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative">
        <Navigation currentPage="/about" />
        <BreadcrumbBanner 
          title="About Us" 
          breadcrumbs={breadcrumbs}
        />
      </div>

      <SupplyCategoriesSection />

      <SupplyNetworkSection />

      <WorkGallerySection />

      <ClientFeedbackSection />

<FAQSection />
<Footer />
    </div>
  );
}
