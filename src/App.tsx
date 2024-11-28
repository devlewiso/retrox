import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Games } from './components/Games';
import { Specs } from './components/Specs';
import { Gallery } from './components/Gallery';
import { Reviews } from './components/Reviews';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main>
        <Hero />
        <Features />
        <Games />
        <Specs />
        <Gallery />
        <Reviews />
      </main>
      <Footer />
    </div>
  );
}

export default App;