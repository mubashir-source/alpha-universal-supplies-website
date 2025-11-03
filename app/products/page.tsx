import Link from "next/link";
import Navigation from "../components/Navigation";

export default function Products() {
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: "$99.99",
      category: "Electronics",
      image: "🎧",
      rating: 4.5,
      inStock: true
    },
    {
      id: 2,
      name: "Cotton T-Shirt",
      price: "$24.99",
      category: "Fashion",
      image: "👕",
      rating: 4.2,
      inStock: true
    },
    {
      id: 3,
      name: "Smart Watch",
      price: "$199.99",
      category: "Electronics",
      image: "⌚",
      rating: 4.7,
      inStock: false
    },
    {
      id: 4,
      name: "Garden Tools Set",
      price: "$49.99",
      category: "Home & Garden",
      image: "🛠️",
      rating: 4.3,
      inStock: true
    },
    {
      id: 5,
      name: "Running Shoes",
      price: "$79.99",
      category: "Sports & Fitness",
      image: "👟",
      rating: 4.6,
      inStock: true
    },
    {
      id: 6,
      name: "Programming Book",
      price: "$39.99",
      category: "Books & Media",
      image: "📖",
      rating: 4.8,
      inStock: true
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation currentPage="/products" />

      {/* Products Content */}
      <main className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Our Products
            </h1>
            <p className="text-xl text-gray-600">
              Discover quality products from trusted sellers
            </p>
          </div>
          <div className="flex space-x-4">
            <select className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>All Categories</option>
              <option>Electronics</option>
              <option>Fashion</option>
              <option>Home & Garden</option>
              <option>Sports & Fitness</option>
              <option>Books & Media</option>
              <option>Health & Beauty</option>
            </select>
            <select className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Sort by</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Rating</option>
              <option>Newest</option>
            </select>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              <div className="p-6">
                <div className="text-center mb-4">
                  <div className="text-6xl mb-4">{product.image}</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-2">
                    {product.category}
                  </p>
                  <div className="flex items-center justify-center mb-2">
                    <div className="flex text-yellow-400">
                      {"★".repeat(Math.floor(product.rating))}
                      {"☆".repeat(5 - Math.floor(product.rating))}
                    </div>
                    <span className="text-gray-600 text-sm ml-2">
                      ({product.rating})
                    </span>
                  </div>
                  <div className="text-2xl font-bold text-blue-600 mb-4">
                    {product.price}
                  </div>
                  <div className={`text-sm mb-4 ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
                    {product.inStock ? '✓ In Stock' : '✗ Out of Stock'}
                  </div>
                </div>
                <div className="text-center space-y-2">
                  <button
                    className={`w-full py-2 px-4 rounded-lg transition-colors duration-300 ${
                      product.inStock
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                    disabled={!product.inStock}
                  >
                    {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                  </button>
                  <button className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors duration-300">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-12">
          <div className="flex space-x-2">
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              Previous
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">
              1
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              2
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              3
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              Next
            </button>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-white rounded-lg shadow-md p-8 mt-12 text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Want to sell your products?
          </h2>
          <p className="text-gray-600 mb-6">
            Join our marketplace and start selling your products to thousands of customers.
          </p>
          <Link
            href="/seller-register"
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 inline-block"
          >
            Become a Seller
          </Link>
        </div>
      </main>
    </div>
  );
}
