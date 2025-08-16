import React from 'react';
import { Heart, Lightbulb, Target, Quote } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            The Story Behind Stark
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Born from a simple question and powered by a vision for better skincare
          </p>
        </div>

        {/* Story Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center space-x-3 mb-4">
                <Lightbulb className="h-6 w-6 text-yellow-500" />
                <h3 className="text-xl font-semibold text-gray-900">The Beginning</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                In a world filled with chemical-laden skincare products and plastic-packaged soaps, we wanted to reimagine cleanliness—the herbal, hygienic, and hands-free way. That's how Stark was born: a brand committed to zero-touch, powdered soap that's powered by nature and backed by simplicity.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center space-x-3 mb-4">
                <Target className="h-6 w-6 text-green-500" />
                <h3 className="text-xl font-semibold text-gray-900">The Question</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                It started with a question: <em>"Why should skincare come with compromises—on health, hygiene, or the planet?"</em> From humble kitchen experiments using Multani Mitti, beetroot, and coffee, we created something that's as effective as it is natural.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-green-400 to-emerald-500 rounded-3xl p-8 text-white shadow-2xl">
              <Quote className="h-12 w-12 text-white/80 mb-6" />
              <blockquote className="text-xl leading-relaxed mb-6">
                "Our skin deserves better than synthetic ingredients, and our planet deserves better than plastic. Stark is my personal promise to make skincare smarter, safer, and sustainable—for everyone."
              </blockquote>
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold">SB</span>
                </div>
                <div>
                  <p className="font-semibold text-lg">Sujal Bafna</p>
                  <p className="text-white/80">Founder of Stark</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Natural First</h3>
            <p className="text-gray-600">Every ingredient is carefully selected from nature's bounty, ensuring your skin gets only the purest care.</p>
          </div>

          <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Innovation Driven</h3>
            <p className="text-gray-600">We combine ancient Ayurvedic wisdom with modern convenience to create revolutionary skincare solutions.</p>
          </div>

          <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Lightbulb className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Planet Conscious</h3>
            <p className="text-gray-600">Secure, hygienic packaging designed to preserve freshness and purity.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;