import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Methodology from './components/Methodology';
import Gallery from './components/Gallery';
import Activities from './components/Activities';
import Documents from './components/Documents';
import Contact from './components/Contact';
import Footer from './components/Footer';

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
        <Documents />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
