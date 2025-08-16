import React, { useState } from 'react';
import { Menu, X, Leaf, Package } from 'lucide-react';
import TrackingModal from './TrackingModal';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showTracking, setShowTracking] = useState(false);

  return (
    <>
      <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img 
              src="/Stark Logo company.png" 
              alt="Stark Logo" 
              className="h-24 w-24 object-contain"
            />
            <span className="text-2xl font-bold text-gray-900"></span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-green-600 transition-colors">Home</a>
            <a href="#products" className="text-gray-700 hover:text-green-600 transition-colors">Products</a>
            <a href="#how-it-works" className="text-gray-700 hover:text-green-600 transition-colors">How It Works</a>
            <a href="#about" className="text-gray-700 hover:text-green-600 transition-colors">About</a>
            <a href="#reviews" className="text-gray-700 hover:text-green-600 transition-colors">Reviews</a>
            <a href="#faq" className="text-gray-700 hover:text-green-600 transition-colors">FAQ</a>
            <a href="#contact" className="text-gray-700 hover:text-green-600 transition-colors">Contact</a>
          </nav>

          {/* Track Order Button */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => setShowTracking(true)}
              className="flex items-center space-x-2 text-gray-700 hover:text-green-600 transition-colors"
            >
              <Package className="h-4 w-4" />
              <span>Track Order</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-green-600"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-green-600">Home</a>
              <a href="#products" className="block px-3 py-2 text-gray-700 hover:text-green-600">Products</a>
              <a href="#how-it-works" className="block px-3 py-2 text-gray-700 hover:text-green-600">How It Works</a>
              <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-green-600">About</a>
              <a href="#reviews" className="block px-3 py-2 text-gray-700 hover:text-green-600">Reviews</a>
              <a href="#faq" className="block px-3 py-2 text-gray-700 hover:text-green-600">FAQ</a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-green-600">Contact</a>
              <button
                onClick={() => setShowTracking(true)}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-green-600"
              >
                Track Order
              </button>
              <button className="w-full mt-2 bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors">
                Shop Now
              </button>
            </div>
          </div>
        )}
      </div>
      </header>

      {/* Tracking Modal */}
      {showTracking && (
        <TrackingModal onClose={() => setShowTracking(false)} />
      )}
    </>
  );
};

export default Header;