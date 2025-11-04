import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import HeroSlider from "./components/sections/HeroSlider";
import IndustrySection from "./components/sections/IndustrySection";
import FeaturedSupplySection from "./components/sections/FeaturedSupplySection";
import WhyChooseSection from "./components/sections/WhyChooseSection";
import VendorRegistrationSection from "./components/sections/VendorRegistrationSection";
import FAQSection from "./components/sections/FAQSection";
import FeatureGrid from "./components/sections/FeatureGrid";

export default function Home() {
  const features = [
    {
      title: "Quality Products",
      description: "Discover a wide range of high-quality products from trusted sellers.",
      link: { href: "/products", label: "View Products" }
    },
    {
      title: "Easy Registration",
      description: "Join our platform as a seller and start growing your business today.",
      link: { href: "/seller-register", label: "Register Now" }
    },
    {
      title: "24/7 Support",
      description: "Our dedicated support team is here to help you whenever you need assistance.",
      link: { href: "/contact", label: "Contact Us" }
    }
  ];

  const heroSlides = [
    {
      id: 1,
      title: "Empowering Businesses with Reliable Industrial & Commercial Supplies",
      subtitle: "Start your journey to extraordinary destinations with Voyagify.",
      description: "Your adventure begins here, with stunning packages and unbeatable experiences.",
      primaryAction: { label: "Explore Supplies", href: "/products" },
      secondaryAction: { label: "Register as a Vendor", href: "/seller-register" },
      backgroundImage: "/corporateofficesupplies/corporateofficesupplies2.png"
    },
    {
      id: 2,
      title: "Premium Quality Equipment for Every Industry",
      subtitle: "Discover our comprehensive range of industrial solutions.",
      description: "From manufacturing to construction, we provide the tools and supplies that keep your business running smoothly.",
      primaryAction: { label: "View Catalog", href: "/category" },
      secondaryAction: { label: "Request Quote", href: "/quote" },
      backgroundImage: "/corporateofficesupplies/corporateofficesupplies2.png"
    },
    {
      id: 3,
      title: "Trusted by Thousands of Businesses Worldwide",
      subtitle: "Join our network of satisfied customers and partners.",
      description: "Experience exceptional service, competitive pricing, and reliable delivery that has made us the preferred choice for businesses globally.",
      primaryAction: { label: "Our Distributors", href: "/distributors" },
        secondaryAction: { label: "Contact Us", href: "/contact" },
        backgroundImage: "/corporateofficesupplies/corporateofficesupplies2.png"
    }
  ];

  return (
    <div className="min-h-screen">
      <div className="relative">
        <Navigation currentPage="/" />
        <HeroSlider slides={heroSlides} />
      </div>
      
      <IndustrySection />
      
      <FeaturedSupplySection />
      
      <WhyChooseSection />
      
      <VendorRegistrationSection />
      
      <FAQSection />
      
      <Footer />
    </div>
  );
}