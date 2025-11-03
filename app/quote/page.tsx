import Navigation from "../components/Navigation";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import Textarea from "../components/ui/Textarea";
import Select from "../components/ui/Select";

export default function Quote() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation currentPage="/quote" />
      
      <div className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Request a Quote
            </h1>
            <p className="text-xl text-gray-600">
              Get a customized quote for your industrial and commercial supply needs
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-8">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name *
                  </label>
                  <Input placeholder="Enter your company name" required />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Contact Person *
                  </label>
                  <Input placeholder="Enter contact person name" required />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <Input type="email" placeholder="Enter email address" required />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <Input type="tel" placeholder="Enter phone number" required />
                </div>
              </div>
              
              <div>
                <Select
                  label="Product Category"
                  required
                  placeholder="Select a category"
                  options={[
                    { value: "industrial", label: "Industrial Supplies" },
                    { value: "commercial", label: "Commercial Equipment" },
                    { value: "safety", label: "Safety Equipment" },
                    { value: "tools", label: "Tools & Hardware" },
                    { value: "other", label: "Other" }
                  ]}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Detailed Requirements *
                </label>
                <Textarea 
                  rows={6}
                  placeholder="Please describe your requirements in detail, including quantities, specifications, and any special requirements..."
                  required
                />
              </div>
              
              <div>
                <Select
                  label="Expected Timeline"
                  placeholder="Select timeline"
                  options={[
                    { value: "urgent", label: "Urgent (Within 1 week)" },
                    { value: "normal", label: "Normal (2-4 weeks)" },
                    { value: "flexible", label: "Flexible (1-2 months)" }
                  ]}
                />
              </div>
              
              <div className="flex justify-end space-x-4">
                <Button variant="secondary" type="button">
                  Clear Form
                </Button>
                <Button type="submit">
                  Submit Quote Request
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
