import React from 'react';
import { ArrowLeft, Check, Sparkles, Leaf, Heart } from 'lucide-react';
import BuyNowForm from './BuyNowForm';

interface Ingredient {
  name: string;
  benefit: string;
}

interface ProductPageProps {
  name: string;
  fullName: string;
  description: string;
  image: string;
  color: string;
  gradientFrom: string;
  gradientTo: string;
  ingredients: Ingredient[];
  benefits: string[];
  bestFor: string;
  starIngredients: string[];
  onBack: () => void;
}

const ProductPage: React.FC<ProductPageProps> = ({
  name,
  fullName,
  description,
  image,
  color,
  gradientFrom,
  gradientTo,
  ingredients,
  benefits,
  bestFor,
  starIngredients,
  onBack
}) => {
  const [showBuyForm, setShowBuyForm] = React.useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16">
            <button
              onClick={onBack}
              className="flex items-center space-x-2 text-gray-600 hover:text-green-600 transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Products</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Product Image */}
          <div className="relative lg:sticky lg:top-24">
            <div className="bg-white rounded-3xl p-6 lg:p-8 shadow-2xl">
              <div className="aspect-square bg-gray-100 rounded-2xl overflow-hidden max-w-md mx-auto">
                <img 
                  src={image} 
                  alt={name}
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
            
            {/* Trust Badges */}
            <div className="flex justify-center space-x-4 mt-4">
              <div className="bg-white px-4 py-2 rounded-full shadow-md flex items-center space-x-2">
                <Leaf className="h-4 w-4 text-green-600" />
                <span className="text-sm font-medium text-gray-700">100% Natural</span>
              </div>
              <div className="bg-white px-4 py-2 rounded-full shadow-md flex items-center space-x-2">
                <Heart className="h-4 w-4 text-red-500" />
                <span className="text-sm font-medium text-gray-700">Chemical-Free</span>
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6 lg:space-y-8">
            {/* Product Name & Description */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                {fullName}
              </h1>
              <div className="bg-green-50 rounded-xl p-4 mb-4">
                <p className="text-green-800 font-semibold">Best For: {bestFor}</p>
              </div>
              <p className="text-xl text-gray-600 leading-relaxed">
                {description}
              </p>
            </div>

            {/* Star Ingredients */}
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-6 border border-amber-200">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <Sparkles className="h-5 w-5 text-amber-600 mr-2" />
                Star Ingredients
              </h2>
              <div className="flex flex-wrap gap-2">
                {starIngredients.map((ingredient, index) => (
                  <span key={index} className="bg-white px-3 py-1 rounded-full text-sm font-medium text-amber-800 border border-amber-200">
                    {ingredient}
                  </span>
                ))}
              </div>
            </div>
            {/* Ingredients */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Leaf className="h-6 w-6 text-green-600 mr-2" />
                Complete Ingredient Benefits
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {ingredients.map((ingredient, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-xl">
                    <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">{ingredient.name}</p>
                      <p className="text-gray-600 text-sm">{ingredient.benefit}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-green-50 rounded-xl">
                  <p className="text-sm text-green-800 font-medium">
                    ✨ No Paraben | No Sulphate | No Harsh Chemicals | Cruelty-Free
                  </p>
              </div>
            </div>

            {/* Product Details */}
            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Product Details</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-600">Form:</p>
                  <p className="font-semibold">Herbal Soap Powder</p>
                </div>
                <div>
                  <p className="text-gray-600">Weight:</p>
                  <p className="font-semibold">100g per pack</p>
                </div>
                <div>
                  <p className="text-gray-600">Shelf Life:</p>
                  <p className="font-semibold">24 months from Mfg Date</p>
                </div>
                <div>
                  <p className="text-gray-600">Country of Origin:</p>
                  <p className="font-semibold">India</p>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="text-xs text-gray-500">
                  Address: M.G. Road, Uruli Kanchan, Pune - 412202, India
                </p>
              </div>
            </div>
           

           

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => setShowBuyForm(true)}
                className="flex-1 bg-green-600 text-white py-4 px-8 rounded-full text-lg font-semibold hover:bg-green-700 transition-all transform hover:scale-105 shadow-lg"
              >
                Buy Now - ₹299 (100g)
              </button>
            
            </div>
          </div>
        </div>
      </div>

      {/* Buy Now Form Modal */}
      {showBuyForm && (
        <BuyNowForm
          productName={name}
          onClose={() => setShowBuyForm(false)}
        />
      )}
    </div>
  );
};

export default ProductPage;