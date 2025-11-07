import React from 'react';
import Logo from './Logo';

const Star: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={`absolute ${className}`} viewBox="0 0 100 100" fill="#FFB74D">
    <path d="M50 0L61.2 35.3H98L69.4 57.2L80.9 92.7L50 70.5L19.1 92.7L30.6 57.2L2 35.3H38.8L50 0Z" />
  </svg>
);

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-light-blue dark:bg-brand-dark">
      <Star className="w-8 h-8 top-1/4 left-1/4 opacity-70 animate-pulse" />
      <Star className="w-6 h-6 bottom-1/4 left-1/3 opacity-60 animate-pulse delay-1000" />
      <Star className="w-5 h-5 bottom-1/3 right-1/2 opacity-50 animate-pulse delay-300" />

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