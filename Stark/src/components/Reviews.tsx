import React from 'react';
import { Star, Quote, CheckCircle, Users } from 'lucide-react';

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "New York, NY",
      rating: 5,
      review: "I've been using Stark for 3 months now and my skin has never felt better! The Multani Mitti variant cleared up my oily skin completely. No more messy soap bars!",
      skinType: "Oily Skin",
      product: "Multani Mitti",
      verified: true,
      beforeAfter: {
        before: "Struggled with oily, acne-prone skin",
        after: "Clear, balanced, and glowing skin"
      }
    },
    {
      id: 2,
      name: "Michael Chen",
      location: "San Francisco, CA",
      rating: 5,
      review: "As someone who travels constantly, Stark has been a game-changer. No spills, no mess, and TSA-friendly. The Coffee Scrub variant is incredibly energizing!",
      skinType: "Normal Skin",
      product: "Coffee Scrub",
      verified: true,
      beforeAfter: {
        before: "Tired, dull-looking skin from travel stress",
        after: "Energized, smooth, and refreshed skin"
      }
    },
    {
      id: 3,
      name: "Priya Patel",
      location: "Austin, TX",
      rating: 5,
      review: "The Beetroot Glow variant gave me the natural radiance I've been searching for! My friends keep asking what skincare routine I'm using. 100% natural and effective!",
      skinType: "Dry Skin",
      product: "Beetroot Glow",
      verified: true,
      beforeAfter: {
        before: "Dull, uneven skin tone",
        after: "Bright, even, and naturally glowing"
      }
    },
    {
      id: 4,
      name: "David Rodriguez",
      location: "Miami, FL",
      rating: 5,
      review: "Finally, a soap that doesn't irritate my sensitive skin! The touch-free application is genius - no more contamination from soap bars. My whole family uses it now.",
      skinType: "Sensitive Skin",
      product: "Multani Mitti",
      verified: true,
      beforeAfter: {
        before: "Frequent skin irritation and redness",
        after: "Calm, comfortable, and healthy skin"
      }
    },
    {
      id: 5,
      name: "Emma Thompson",
      location: "Seattle, WA",
      rating: 5,
      review: "Love that it's completely eco-friendly! No plastic waste and the ingredients are pure. My teenage daughter uses it too and her acne has improved significantly.",
      skinType: "Combination Skin",
      product: "Sample Pack",
      verified: true,
      beforeAfter: {
        before: "Concerned about environmental impact",
        after: "Guilt-free, sustainable skincare routine"
      }
    },
    {
      id: 6,
      name: "James Wilson",
      location: "Chicago, IL",
      rating: 5,
      review: "The powder-to-lather transformation is so satisfying! I was skeptical at first, but the results speak for themselves. My skin feels cleaner than ever.",
      skinType: "Normal Skin",
      product: "Coffee Scrub",
      verified: true,
      beforeAfter: {
        before: "Skeptical about powder soap effectiveness",
        after: "Convinced and completely satisfied customer"
      }
    }
  ];

  const stats = [
    { number: "10,000+", label: "Happy Customers" },
    { number: "4.9/5", label: "Average Rating" },
    { number: "98%", label: "Would Recommend" },
    { number: "50+", label: "Countries Shipped" }
  ];

  return (
    <section id="reviews" className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full mb-6 shadow-sm">
            <Star className="h-4 w-4 text-yellow-500 fill-current" />
            <span className="text-sm font-medium text-gray-700">Customer Reviews</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Real Results from Real People
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of satisfied customers who've transformed their skincare routine with Stark
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
              <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold">
                    {review.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <h4 className="font-semibold text-gray-900">{review.name}</h4>
                      {review.verified && (
                        <CheckCircle className="h-4 w-4 text-green-500" />
                      )}
                    </div>
                    <p className="text-sm text-gray-500">{review.location}</p>
                  </div>
                </div>
                <Quote className="h-6 w-6 text-gray-300" />
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-700 leading-relaxed mb-6">"{review.review}"</p>

              {/* Product & Skin Type */}
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                  {review.product}
                </span>
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                  {review.skinType}
                </span>
              </div>

              {/* Before/After */}
              
            </div>
          ))}
        </div>
</div>
    </section>
  );
};

export default Reviews;