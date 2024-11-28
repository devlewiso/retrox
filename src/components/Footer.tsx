import React from 'react';
import { GamepadIcon, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <GamepadIcon className="h-8 w-8 text-purple-500" />
              <span className="text-2xl font-bold">RetroX</span>
            </div>
            <p className="text-gray-400">
              Bringing classic gaming into the modern era with style and innovation.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="text-gray-400 hover:text-white">Features</a></li>
              <li><a href="#games" className="text-gray-400 hover:text-white">Games</a></li>
              <li><a href="#specs" className="text-gray-400 hover:text-white">Specs</a></li>
              <li><a href="#support" className="text-gray-400 hover:text-white">Support</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#faq" className="text-gray-400 hover:text-white">FAQ</a></li>
              <li><a href="#shipping" className="text-gray-400 hover:text-white">Shipping</a></li>
              <li><a href="#returns" className="text-gray-400 hover:text-white">Returns</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <SocialLink icon={Facebook} href="#" />
              <SocialLink icon={Twitter} href="#" />
              <SocialLink icon={Instagram} href="#" />
              <SocialLink icon={Youtube} href="#" />
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} RetroX. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ icon: Icon, href }: { icon: any; href: string }) {
  return (
    <a
      href={href}
      className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors"
    >
      <Icon className="h-5 w-5" />
    </a>
  );
}