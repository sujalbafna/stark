import React from 'react';
import { Droplets, Hand, Sparkles, CheckCircle, X, Check } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: "Add Water ",
      description: "Wet your hands or body. The powder activates instantly on contact with water.",
      icon: <Droplets className="h-8 w-8 text-green-600" />,
      color: "from-green-400 to-emerald-500"
    },
    {
      number: 2,
      title: "Sprinkle",
      description: "Open the cap & sprinkle a small amount of powdered soap into your palm.",
      icon: <Hand className="h-8 w-8 text-blue-600" />,
      color: "from-blue-400 to-cyan-500"
    },
    {
      number: 3,
      title: "Lather",
      description: "Rub gently. The fine powder transforms into a rich, smooth, and natural lather.",
      icon: <Sparkles className="h-8 w-8 text-purple-600" />,
      color: "from-purple-400 to-pink-500"
    },
    {
      number: 4,
      title: "Rinse",
      description: "Rinse thoroughly. Feel the refreshed, chemical-free glow with Natural Ingredients.",
      icon: <CheckCircle className="h-8 w-8 text-emerald-600" />,
      color: "from-emerald-400 to-teal-500"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full mb-6 shadow-sm">
            <Sparkles className="h-6 w-4 text-green-600" />
            <span className="text-sm font-medium text-gray-700"> How It Works</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Simple, Clean, and Revolutionary
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the magic of powder-to-lather transformation in just four simple steps
          </p>
        </div>

        {/* Step-by-Step Guide */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-gray-300 to-transparent z-0"></div>
              )}
              
              <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:scale-105">
                {/* Step Number */}
                <div className={`absolute -top-4 left-8 w-8 h-8 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg`}>
                  {step.number}
                </div>
                
                {/* Icon */}
                <div className="bg-gray-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gray-100 transition-colors">
                  {step.icon}
                </div>
                
                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;