import React from 'react';
import { Shield, Plane, Leaf, Sparkles, Clock, Recycle } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: "Touch-Free Hygiene",
      description: "Just sprinkle and cleanse. No need to touch the product directly, ensuring maximum hygiene and cleanliness.",
      color: "bg-blue-50 border-blue-200"
    },
    {
      icon: <Leaf className="h-8 w-8 text-green-600" />,
      title: "Herbal Goodness",
      description: "100% natural ingredients like Multani Mitti, beetroot, coffee, and more. No chemicals, no compromises.",
      color: "bg-green-50 border-green-200"
    },
    {
      icon: <Plane className="h-8 w-8 text-purple-600" />,
      title: "Travel-Friendly",
      description: "Light, spill-proof, and airline-friendly. Take your skincare routine anywhere without worry.",
      color: "bg-purple-50 border-purple-200"
    },
    {
      icon: <Recycle className="h-8 w-8 text-emerald-600" />,
      title: "Sustainable Care",
      description: "Made with eco-conscious ingredients and packaging that respect both your skin and the planet.",
      color: "bg-emerald-50 border-emerald-200"
    },
    {
      icon: <Clock className="h-8 w-8 text-orange-600" />,
      title: "Long-Lasting",
      description: "A little goes a long way—each bottle packs weeks of use, making it incredibly cost-effective.",
      color: "bg-orange-50 border-orange-200"
    },
    {
      icon: <Sparkles className="h-8 w-8 text-pink-600" />,
      title: "Modern Convenience",
      description: "Combines the best of Ayurveda and modern convenience in one smart, sustainable package.",
      color: "bg-pink-50 border-pink-200"
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-green-100 px-4 py-2 rounded-full mb-6">
            <Sparkles className="h-4 w-4 text-green-600" />
            <span className="text-sm font-medium text-green-700">The Future of Hygiene</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Powdered Soap?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            <span className="font-semibold text-gray-900">No Mess. No Touch. No Chemicals.</span><br />
            Powdered soap isn't just a trend—it's the future of hygiene.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className={`p-8 rounded-2xl border-2 ${benefit.color} hover:shadow-lg transition-all duration-300 group`}>
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-white p-3 rounded-full shadow-sm group-hover:shadow-md transition-shadow">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{benefit.title}</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;