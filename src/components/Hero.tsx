import React from 'react';
import { Sparkles, ChevronRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1550745165-9bc0b252726f"
          alt="Retro Gaming Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-2xl">
          <div className="flex items-center space-x-2 mb-4">
            <Sparkles className="text-purple-500 h-5 w-5" />
            <span className="text-purple-400 font-medium">The Future of Retro Gaming</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Experience Gaming
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
              Like Never Before
            </span>
          </h1>
          
          <p className="text-gray-300 text-xl mb-8">
            Rediscover classic games with modern technology. 4K graphics, wireless controllers, and over 1000+ pre-loaded games.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-medium flex items-center justify-center group transition-all">
              Pre-order Now
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border border-white/30 hover:bg-white/10 text-white px-8 py-3 rounded-full font-medium transition-all">
              Watch Trailer
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}