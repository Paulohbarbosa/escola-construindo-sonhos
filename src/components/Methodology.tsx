import React from 'react';

interface CardProps {
  // FIX: Changed JSX.Element to React.ReactNode to resolve "Cannot find namespace 'JSX'" error.
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

const InfoCard: React.FC<CardProps> = ({ icon, title, description, color }) => {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border-t-4" style={{ borderColor: color }}>
      <div className="flex items-center justify-center w-16 h-16 rounded-full mb-6" style={{ backgroundColor: `${color}33` }}>
        <div className="w-8 h-8" style={{ color: color }}>
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-bold text-brand-dark mb-3">{title}</h3>
      <p className="text-brand-dark/70 leading-relaxed">{description}</p>
    </div>
  );
};

const Methodology: React.FC = () => {
    const cards = [
        {
            icon: <PencilIcon />,
            title: "Aprendizagem Lúdica",
            description: "Através de jogos e brincadeiras, transformamos o aprendizado em uma experiência divertida e envolvente.",
            color: '#F48FB1', // brand-pink
        },
        {
            icon: <HeartIcon />,
            title: "Desenvolvimento Socioemocional",
            description: "Fomentamos a empatia, a inteligência emocional e a construção de amizades saudáveis.",
            color: '#80DEEA', // brand-cyan
        },
        {
            icon: <SparklesIcon />,
            title: "Estímulo à Criatividade",
            description: "Oferecemos um universo de artes, música e expressão para que a imaginação voe alto.",
            color: '#DCE775', // brand-lime
        },
        {
            icon: <GlobeIcon />,
            title: "Contato com a Natureza",
            description: "Nosso espaço ao ar livre convida à exploração e ao respeito pelo meio ambiente.",
            color: '#AED581', // brand-green
        }
    ];

  return (
    <section id="proposta" className="py-20 bg-brand-light-blue/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-brand-dark">Nossa Proposta Pedagógica</h2>
          <p className="text-lg text-brand-dark/70 mt-2 font-pacifico text-brand-teal">Pilares do nosso ensino</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cards.map(card => <InfoCard key={card.title} {...card} />)}
        </div>
      </div>
    </section>
  );
};


const PencilIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
  </svg>
);

const HeartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.5l1.318-1.182a4.5 4.5 0 116.364 6.364L12 20.25l-7.682-7.682a4.5 4.5 0 010-6.364z" />
  </svg>
);

const SparklesIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
  </svg>
);

const GlobeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2h10a2 2 0 002-2v-1a2 2 0 012-2h1.945M7.737 16.95l.01-.01M3.055 11a10.021 10.021 0 0117.89 0M18.945 11H21a2 2 0 012 2v1a2 2 0 01-2 2h-1.055M16.263 16.95l-.01-.01M12 21a9 9 0 100-18 9 9 0 000 18z" />
  </svg>
);

export default Methodology;