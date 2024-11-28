import React from 'react';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    author: "Gaming Weekly",
    role: "Tech Review",
    content: "The perfect blend of nostalgia and modern technology. RetroX brings classic gaming into the 4K era with style.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1557200134-90327ee9fafa"
  },
  {
    author: "RetroGamer Magazine",
    role: "Expert Review",
    content: "Impressive library of games, zero input lag, and beautiful upscaling. This is how retro gaming should be done.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1616161616161-616161616161"
  },
  {
    author: "TechPro",
    role: "Hardware Review",
    content: "The build quality and attention to detail is outstanding. The cloud save feature is a game-changer for retro gaming.",
    rating: 4,
    image: "https://images.unsplash.com/photo-1557200134-90327ee9fafa"
  }
];

export function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Quote className="text-purple-500 h-6 w-6" />
            <span className="text-purple-400 font-medium">Reviews</span>
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">
            What Critics Are Saying
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Don't just take our word for it - hear from the experts
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-xl p-6 relative"
            >
              <div className="flex items-center mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-yellow-500 fill-current"
                  />
                ))}
              </div>
              <blockquote className="text-gray-300 mb-6">
                "{review.content}"
              </blockquote>
              <div className="flex items-center">
                <img
                  src={review.image}
                  alt={review.author}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <div className="text-white font-semibold">{review.author}</div>
                  <div className="text-purple-400">{review.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}