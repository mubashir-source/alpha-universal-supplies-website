import React from 'react';
import Link from 'next/link';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import Button from '../ui/Button';

interface Product {
  id: number;
  name: string;
  price: string;
  category?: string;
  image?: string;
  rating?: number;
  inStock?: boolean;
  description?: string;
}

interface ProductGridProps {
  products: Product[];
  columns?: 2 | 3 | 4;
  showCategory?: boolean;
  showRating?: boolean;
  showAddToCart?: boolean;
  className?: string;
}

export default function ProductGrid({
  products,
  columns = 3,
  showCategory = true,
  showRating = true,
  showAddToCart = true,
  className = ''
}: ProductGridProps) {
  const gridClasses = {
    2: 'grid md:grid-cols-2 gap-6',
    3: 'grid md:grid-cols-2 lg:grid-cols-3 gap-6',
    4: 'grid md:grid-cols-2 lg:grid-cols-4 gap-6'
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex text-yellow-400">
        {"★".repeat(Math.floor(rating))}
        {"☆".repeat(5 - Math.floor(rating))}
      </div>
    );
  };

  return (
    <section className={`max-w-7xl mx-auto px-4 ${className}`}>
      <div className={gridClasses[columns]}>
        {products.map((product) => (
          <Card key={product.id} hover className="overflow-hidden">
            <div className="text-center">
              {product.image && (
                <div className="text-6xl mb-4">{product.image}</div>
              )}
              
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {product.name}
              </h3>
              
              {showCategory && product.category && (
                <p className="text-gray-600 text-sm mb-2">{product.category}</p>
              )}
              
              {showRating && product.rating && (
                <div className="flex items-center justify-center mb-2">
                  {renderStars(product.rating)}
                  <span className="text-gray-600 text-sm ml-2">
                    ({product.rating})
                  </span>
                </div>
              )}
              
              <div className="text-2xl font-bold text-blue-600 mb-4">
                {product.price}
              </div>
              
              {product.inStock !== undefined && (
                <div className="mb-4">
                  <Badge 
                    variant={product.inStock ? 'success' : 'danger'}
                    size="sm"
                  >
                    {product.inStock ? '✓ In Stock' : '✗ Out of Stock'}
                  </Badge>
                </div>
              )}
              
              {product.description && (
                <p className="text-gray-600 text-sm mb-4">{product.description}</p>
              )}
              
              <div className="space-y-2">
                {showAddToCart && (
                  <Button
                    className="w-full"
                    disabled={product.inStock === false}
                    variant={product.inStock === false ? 'secondary' : 'primary'}
                  >
                    {product.inStock === false ? 'Out of Stock' : 'Add to Cart'}
                  </Button>
                )}
                
                <Link href={`/products/${product.id}`}>
                  <Button variant="secondary" className="w-full">
                    View Details
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
