import Navigation from "../components/Navigation";

export default function Distributors() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation currentPage="/distributors" />
      
      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Our Distributors
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connect with our trusted network of distributors across the region
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Distributor cards would go here */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">Regional Distributor 1</h3>
              <p className="text-gray-600 mb-4">Serving the northern region with quality industrial supplies</p>
              <div className="text-sm text-gray-500">
                <p>📍 Location: Northern Region</p>
                <p>📞 Contact: +1 (555) 123-4567</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">Regional Distributor 2</h3>
              <p className="text-gray-600 mb-4">Comprehensive commercial supply solutions for the south</p>
              <div className="text-sm text-gray-500">
                <p>📍 Location: Southern Region</p>
                <p>📞 Contact: +1 (555) 234-5678</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">Regional Distributor 3</h3>
              <p className="text-gray-600 mb-4">Specialized equipment and supplies for eastern markets</p>
              <div className="text-sm text-gray-500">
                <p>📍 Location: Eastern Region</p>
                <p>📞 Contact: +1 (555) 345-6789</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
