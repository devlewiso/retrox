import React from 'react';
import { Star, Trophy, Joystick } from 'lucide-react';

const gameCategories = [
  {
    title: 'Action Classics',
    games: ['Metal Slug', 'Contra III', 'Mega Man X'],
    image: 'https://images.unsplash.com/photo-1551103782-8ab07afd45c1'
  },
  {
    title: 'RPG Legends',
    games: ['Final Fantasy VI', 'Chrono Trigger', 'Secret of Mana'],
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e'
  },
  {
    title: 'Fighting Games',
    games: ['Street Fighter II', 'Mortal Kombat II', 'King of Fighters'],
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420'
  }
];

export function Games() {
  return (
    <section id="games" className="py-24 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Joystick className="text-purple-500 h-6 w-6" />
            <span className="text-purple-400 font-medium">Game Library</span>
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">
            1000+ Classic Games
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            From action-packed adventures to strategic RPGs, rediscover the golden age of gaming
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {gameCategories.map((category, index) => (
            <div key={index} className="relative group">
              <div className="relative h-96 overflow-hidden rounded-xl">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-black/20" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-3">{category.title}</h3>
                  <ul className="space-y-2">
                    {category.games.map((game, gameIndex) => (
                      <li key={gameIndex} className="flex items-center text-gray-300">
                        <Star className="h-4 w-4 text-purple-500 mr-2" />
                        {game}
                      </li>
                    ))}
                  </ul>
                  <button className="mt-4 text-purple-400 hover:text-purple-300 flex items-center">
                    View More Games
                    <Trophy className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}