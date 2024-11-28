import React from 'react';
import { Tv, Wifi, Zap, Gamepad, Cloud, Clock } from 'lucide-react';

const features = [
  {
    icon: Tv,
    title: '4K Resolution',
    description: 'Crystal clear graphics with 4K upscaling technology'
  },
  {
    icon: Wifi,
    title: 'Wireless Gaming',
    description: 'Modern wireless controllers with zero input lag'
  },
  {
    icon: Zap,
    title: 'Fast Loading',
    description: 'Instant game loading with SSD technology'
  },
  {
    icon: Gamepad,
    title: '1000+ Games',
    description: 'Huge library of pre-loaded classic games'
  },
  {
    icon: Cloud,
    title: 'Cloud Saves',
    description: 'Save your progress to the cloud automatically'
  },
  {
    icon: Clock,
    title: 'Time Rewind',
    description: 'Unique feature to rewind gameplay up to 30 seconds'
  }
];

export function Features() {
  return (
    <section id="features" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Next-Gen Features, Retro Soul
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Experience your favorite classic games with modern technology and convenience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-xl hover:bg-gray-750 transition-all group"
            >
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}