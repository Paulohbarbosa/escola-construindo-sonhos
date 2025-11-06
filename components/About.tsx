
import React from 'react';

const CloudIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg viewBox="0 0 64 40" className={className} fill="currentColor">
        <path d="M49.8,17.4C49.4,10.2,43.3,4.4,36,4.4c-4.8,0-9,2.6-11.4,6.5C23,10.4,21.1,10,19,10c-4.4,0-8,3.6-8,8 c0,0.2,0,0.4,0.1,0.6C5,19.2,0.6,24.4,0.6,30.8C0.6,35.8,4.7,40,9.8,40h34.4c6.1,0,11.2-4.9,11.2-11C55.4,23.3,53.1,19.4,49.8,17.4z"/>
    </svg>
);

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-brand-dark">Nossa Filosofia</h2>
          <p className="text-lg text-brand-dark/70 mt-2 font-pacifico text-brand-teal">Um lugar para sonhar e crescer</p>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 relative">
             <div className="relative rounded-lg overflow-hidden shadow-2xl">
                 <img src="https://picsum.photos/seed/school1/600/400" alt="Crianças brincando" className="w-full h-auto object-cover"/>
                 <div className="absolute inset-0 bg-brand-teal/20"></div>
             </div>
             <CloudIcon className="absolute -top-8 -left-8 w-24 h-24 text-brand-light-blue opacity-50 z-0" />
             <CloudIcon className="absolute -bottom-8 -right-8 w-32 h-32 text-brand-cyan opacity-40 z-0" />
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold text-brand-dark mb-4">Acreditamos no poder da imaginação</h3>
            <p className="text-base text-brand-dark/80 leading-relaxed mb-4">
              Na Escola Construindo Sonhos, cada criança é vista como um universo de possibilidades. Nossa missão é oferecer um espaço seguro, estimulante e afetuoso, onde os pequenos podem explorar, descobrir e construir as bases para um futuro brilhante.
            </p>
            <p className="text-base text-brand-dark/80 leading-relaxed">
              Valorizamos a brincadeira como principal ferramenta de aprendizado, incentivando a autonomia, a cooperação e o respeito às individualidades. Aqui, aprender é uma aventura divertida e cheia de significado.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
