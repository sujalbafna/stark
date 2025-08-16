import React from 'react';
import { Leaf, Mail, Phone, MapPin, Instagram, Twitter, Facebook, Package, Truck } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <img 
                src="/Stark Logo company.png" 
                alt="Stark Logo" 
                className="h-8 w-8 object-contain"
              />
              <span className="text-2xl font-bold">Stark</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              A 100% natural, eco-friendly, and chemical-free alternative to harsh soaps. 
              Crafted with herbal actives, vitamins, and skin-loving ingredients for daily skincare.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-green-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-green-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-green-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-300 hover:text-green-400 transition-colors">Home</a></li>
              <li><a href="#products" className="text-gray-300 hover:text-green-400 transition-colors">Products</a></li>
              <li><a href="#how-it-works" className="text-gray-300 hover:text-green-400 transition-colors">How It Works</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-green-400 transition-colors">About Us</a></li>
              <li><a href="#reviews" className="text-gray-300 hover:text-green-400 transition-colors">Reviews</a></li>
              <li><a href="#faq" className="text-gray-300 hover:text-green-400 transition-colors">FAQ</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors flex items-center space-x-2">
                <Package className="h-4 w-4" />
                <span>Track Order</span>
              </a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Get in Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-green-400" />
                <span className="text-gray-300">starknaturalcare@gmail.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-green-400" />
                <span className="text-gray-300">Not Available </span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-green-400 mt-1" />
                <span className="text-gray-300">M.G.Road, Uruli Kanchan,<br />Pune City - 412202, India</span>
              </li>
            </ul>
            
            {/* Shipping Partner */}
            <div className="mt-6 pt-4 border-t border-gray-700">
              <div className="flex items-center space-x-2 text-gray-300">
                <Truck className="h-4 w-4" />
                <span className="text-sm">Powered by Delhivery</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Stark. All rights reserved. Made with ❤️ for a cleaner, greener world.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;