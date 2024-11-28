import React from 'react';
import { Menu, X, GamepadIcon } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed w-full bg-black/90 backdrop-blur-sm text-white z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <GamepadIcon className="h-8 w-8 text-purple-500" />
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              RetroX
            </span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <NavLink href="#features">Features</NavLink>
            <NavLink href="#games">Games</NavLink>
            <NavLink href="#specs">Specs</NavLink>
            <NavLink href="#gallery">Gallery</NavLink>
            <NavLink href="#reviews">Reviews</NavLink>
          </nav>

          <a 
            href="mailto:devlewio@outlook.com" 
            className="hidden md:block bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded-full font-medium transition-all"
          >
            Pre-order Now
          </a>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <MobileNavLink href="#features">Features</MobileNavLink>
            <MobileNavLink href="#games">Games</MobileNavLink>
            <MobileNavLink href="#specs">Specs</MobileNavLink>
            <MobileNavLink href="#gallery">Gallery</MobileNavLink>
            <MobileNavLink href="#reviews">Reviews</MobileNavLink>
          </div>
          <a 
            href="mailto:devlewio@outlook.com" 
            className="block bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded-full font-medium transition-all text-center"
          >
            Pre-order Now
          </a>
        </div>
      )}
    </header>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="text-gray-300 hover:text-white transition-colors"
    >
      {children}
    </a>
  );
}

function MobileNavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 rounded-md"
    >
      {children}
    </a>
  );
}
