import Navigation from "../components/Navigation";
import SellerRegistrationForm from "../components/forms/SellerRegistrationForm";
import FeatureGrid from "../components/sections/FeatureGrid";
import Card from "../components/ui/Card";
import BreadcrumbBanner from "../components/BreadcrumbBanner";
import VendorPartnershipSection from "../components/sections/VendorPartnershipSection";
import DiscoverWorldSection from "../components/sections/DiscoverWorldSection";
import ClientFeedbackSection from "../components/sections/ClientFeedbackSection";
import AdventureStartsSection from "../components/sections/AdventureStartsSection";
import Footer from "../components/Footer";

export default function SellerRegister() {
  const benefits = [
    {
      title: "Earn More",
      description: "Competitive commission rates and multiple revenue streams",
      icon: "💰"
    },
    {
      title: "Reach More", 
      description: "Access to thousands of customers nationwide",
      icon: "🌍"
    },
    {
      title: "Grow Faster",
      description: "Marketing tools and analytics to boost your sales", 
      icon: "📈"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative">
        <Navigation currentPage="/seller-register" />
        <BreadcrumbBanner
          title="Seller Registration"
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Seller Registration", href: "/seller-register" }]}
        />
      </div>
      
      {/* Why Partner with us Section */}
      <VendorPartnershipSection />
      
      {/* Discover the World Section */}
      <DiscoverWorldSection />
      

      
      <ClientFeedbackSection />
            {/* Adventure Starts Section */}
            <AdventureStartsSection />
      <Footer />
    </div>
  );
}