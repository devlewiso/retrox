import React from 'react';
import { Image as ImageIcon } from 'lucide-react';

const galleryImages = [
  {
    url: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a',
    title: 'Classic Controller Design'
  },
  {
    url: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f',
    title: 'Modern Display Output'
  },
  {
    url: 'https://images.unsplash.com/photo-1486572788966-cfd3df1f5b42',
    title: 'Retro Game Collection'
  },
  {
    url: 'https://images.unsplash.com/photo-1527690789675-4ea7d8da9f7f',
    title: 'Premium Build Quality'
  }
];

export function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <ImageIcon className="text-purple-500 h-6 w-6" />
            <span className="text-purple-400 font-medium">Gallery</span>
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">
            Beauty in Every Detail
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Witness the perfect blend of retro aesthetics and modern design
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-xl"
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}