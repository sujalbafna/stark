import React from 'react';
import { Leaf, Coffee, Sparkles } from 'lucide-react';
import { products } from '../data/products';

interface ProductsProps {
  onProductClick?: (productId: string) => void;
}

const Products: React.FC<ProductsProps> = ({ onProductClick }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Leaf':
        return <Leaf className="h-8 w-8 text-green-600" />;
      case 'Sparkles':
        return <Sparkles className="h-8 w-8 text-pink-600" />;
      case 'Coffee':
        return <Coffee className="h-8 w-8 text-amber-600" />;
      default:
        return <Leaf className="h-8 w-8 text-green-600" />;
    }
  };

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            ✨ Our Variants
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our 3 powerful variants, each crafted with unique herbal actives and vitamins for your specific skin needs.
          </p>
        </div>

     {/* Products Grid */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
  {products.map((product, index) => (
    <div
      key={index}
      className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
    >
      {/* Product Image */}
      <div className="aspect-square relative overflow-hidden bg-gray-100">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-2 rounded-full">
          {getIcon(product.icon)}
        </div>
      </div>

              {/* Product Content */}
              <div className="p-6">
                <div className="mb-3">
                  <h3 className="text-2xl font-bold text-gray-900">{product.name}</h3>
                  <p className="text-sm text-green-600 font-medium">Best For: {product.bestFor}</p>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">{product.description}</p>
                
                {/* Benefits */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {product.benefits.map((benefit, benefitIndex) => (
                    <span key={benefitIndex} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                      {benefit}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <button 
                  onClick={() => onProductClick?.(product.id)}
                  className="w-full bg-gray-900 text-white py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors group-hover:bg-green-600"
                >
                  View 
                </button>
              </div>
            </div>
          ))}
        </div>

      
       
      </div>
    </section>
  );
};

export default Products;