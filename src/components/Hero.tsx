import React from 'react';
import Logo from './Logo';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-light-blue dark:bg-brand-dark">

      <div className="container mx-auto px-6 text-center z-10">
        <div className="max-w-2xl mx-auto mb-8">
          <Logo />
        </div>
        <h1 className="text-3xl md:text-5xl font-extrabold text-brand-dark dark:text-white mb-4">
          Onde os sonhos começam a tomar forma
        </h1>
        <p className="text-lg md:text-xl text-brand-dark/80 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          Um ambiente mágico e acolhedor, projetado para inspirar a curiosidade, a criatividade e o amor pelo aprendizado.
        </p>
        <a
          href="#contato"
          className="bg-brand-orange hover:bg-opacity-90 text-white font-bold py-4 px-8 rounded-full text-lg transition-transform transform hover:scale-105 shadow-lg"
        >
          Matrículas Abertas
        </a>
      </div>
    </section>
  );
};

export default Hero;