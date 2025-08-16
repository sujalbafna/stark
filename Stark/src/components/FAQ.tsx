import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, Shield, Leaf, Clock, Users } from 'lucide-react';

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      id: 1,
      question: "Is it safe for all skin types?",
      answer: "Absolutely! Stark powdered soap is formulated with 100% natural ingredients that are gentle on all skin types, including sensitive skin. Our Multani Mitti variant is particularly beneficial for oily and acne-prone skin, while Beetroot Glow works wonderfully for dry and dull skin. The Coffee Scrub is perfect for normal to combination skin. All variants are free from harsh chemicals, sulfates, and parabens.",
      icon: <Shield className="h-5 w-5 text-green-600" />,
      category: "Safety"
    },
    {
      id: 2,
      question: "Can kids use it?",
      answer: "Yes! Stark is completely safe for children aged 3 and above. The natural, chemical-free formula makes it ideal for delicate young skin. The touch-free application also teaches kids good hygiene habits. However, we recommend adult supervision for children under 8 to ensure proper usage and to prevent accidental ingestion of the powder.",
      icon: <Users className="h-5 w-5 text-blue-600" />,
      category: "Usage"
    },
    {
      id: 3,
      question: "Is it eco-friendly?",
      answer: "Stark is designed with sustainability at its core! Our packaging uses minimal, recyclable materials with zero plastic waste. The concentrated powder format reduces transportation emissions, and all ingredients are biodegradable and sourced responsibly. By choosing Stark, you're making a positive impact on both your skin and the planet.",
      icon: <Leaf className="h-5 w-5 text-emerald-600" />,
      category: "Environment"
    },
    {
      id: 4,
      question: "What's the shelf life?",
      answer: "Stark powdered soap has an impressive 3-year shelf life when stored in a cool, dry place. Unlike traditional soap bars that can melt or become mushy in humid conditions, our powder formula remains stable and effective. The airtight packaging ensures freshness and potency throughout its entire shelf life.",
      icon: <Clock className="h-5 w-5 text-purple-600" />,
      category: "Storage"
    },
    {
      id: 5,
      question: "How much should I use per application?",
      answer: "A little goes a long way! For hands, use about 1/4 teaspoon (roughly the size of a small coin). For body use, 1/2 to 1 teaspoon is sufficient. One 100g bottle typically lasts 2-3 months with regular daily use, making it incredibly cost-effective compared to traditional soaps.",
      icon: <HelpCircle className="h-5 w-5 text-orange-600" />,
      category: "Usage"
    },
    {
      id: 6,
      question: "Does it work in hard water?",
      answer: "Yes! One of the advantages of Stark powdered soap is that it works effectively in both soft and hard water conditions. The natural ingredients create a rich lather regardless of water hardness, ensuring consistent cleansing performance wherever you are.",
      icon: <Shield className="h-5 w-5 text-cyan-600" />,
      category: "Performance"
    },
    {
      id: 7,
      question: "Is it travel-friendly?",
      answer: "Absolutely! Stark is the perfect travel companion. The powder won't spill, leak, or melt in your luggage. It's TSA-approved for carry-on bags, and the compact size saves space. No more worrying about soap bars getting soggy or liquid soaps exceeding size limits.",
      icon: <HelpCircle className="h-5 w-5 text-indigo-600" />,
      category: "Travel"
    },
    {
      id: 8,
      question: "Can I use it on my face?",
      answer: "Yes, but with care! Our Multani Mitti and Beetroot Glow variants are gentle enough for facial use 2-3 times per week. The Coffee Scrub variant is better suited for body use due to its exfoliating properties. Always do a patch test first and avoid the delicate eye area.",
      icon: <Users className="h-5 w-5 text-pink-600" />,
      category: "Usage"
    },
    {
      id: 9,
      question: "What if I'm not satisfied?",
      answer: "We offer a 30-day money-back guarantee! If you're not completely satisfied with your Stark experience, simply contact our customer service team for a full refund. We're confident you'll love the results, but your satisfaction is our top priority.",
      icon: <Shield className="h-5 w-5 text-green-600" />,
      category: "Guarantee"
    },
    {
      id: 10,
      question: "How is it different from regular soap powder?",
      answer: "Stark is specifically formulated for skincare, not laundry! Our herbal ingredients like Multani Mitti, beetroot, and coffee are carefully selected for their skin benefits. Unlike harsh detergent powders, Stark maintains your skin's natural pH balance and provides nourishment while cleansing.",
      icon: <Leaf className="h-5 w-5 text-teal-600" />,
      category: "Product"
    }
  ];

  const categories = ["All", "Safety", "Usage", "Environment", "Storage", "Performance", "Travel", "Guarantee", "Product"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredFAQs = selectedCategory === "All" 
    ? faqs 
    : faqs.filter(faq => faq.category === selectedCategory);

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-green-100 px-4 py-2 rounded-full mb-6">
            <HelpCircle className="h-4 w-4 text-green-600" />
            <span className="text-sm font-medium text-green-700">Frequently Asked Questions</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Got Questions? We've Got Answers!
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to know about Stark powdered soap and more
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-green-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {filteredFAQs.map((faq) => (
            <div key={faq.id} className="bg-gray-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all">
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
              >
                <div className="flex items-center space-x-4">
                  <div className="bg-white p-2 rounded-full shadow-sm">
                    {faq.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="bg-white px-3 py-1 rounded-full text-xs font-medium text-gray-600">
                    {faq.category}
                  </span>
                  {openFAQ === faq.id ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </div>
              </button>
              
              {openFAQ === faq.id && (
                <div className="px-8 pb-6">
                  <div className="pl-12">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

     
      </div>
    </section>
  );
};

export default FAQ;