
import React from 'react';
import Header from './src/components/Header';
import Hero from './src/components/Hero';
import About from './src/components/About';
import Methodology from './src/components/Methodology';
import Gallery from './src/components/Gallery';
import Activities from './src/components/Activities';
import Contact from './src/components/Contact';
import Footer from './src/components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-brand-dark font-nunito text-brand-dark dark:text-gray-100 transition-colors">
      <Header />
      <main>
        <Hero />
        <About />
        <Methodology />
        <Gallery />
        <Activities />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
