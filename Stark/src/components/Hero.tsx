import React from 'react';
import { Sparkles, Leaf, Heart } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-br from-green-50 to-emerald-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Hero Badge */}

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            <div className="block text-green-600">Sprinkle Cleanse Glow</div>
           
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            A 100% natural, eco-friendly, and chemical-free alternative to harsh soaps. Our soap powders are crafted with herbal actives, vitamins, and skin-loving ingredients to cleanse, nourish, and refresh your skin daily.
          </p>

          {/* Key Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-sm">
              <div className="bg-green-100 p-3 rounded-full mb-4">
                <Leaf className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">100% Natural & Herbal</h3>
              <p className="text-gray-600 text-center">No Paraben | No Sulphate | No Harsh Chemicals</p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-sm">
              <div className="bg-blue-100 p-3 rounded-full mb-4">
                <Sparkles className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Gentle on All Skin</h3>
              <p className="text-gray-600 text-center">Suitable for all skin types with vitamins and herbal actives</p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-sm">
              <div className="bg-purple-100 p-3 rounded-full mb-4">
                <Heart className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Cruelty-Free & Eco-Friendly</h3>
              <p className="text-gray-600 text-center">Made in India with sustainable practices and natural ingredients</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;