
import React from 'react';

const StarIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.539 1.118l-3.975-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.196-1.539-1.118l1.518-4.674a1 1 0 00-.363-1.118L2.05 10.1c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
  </svg>
);

const Activities: React.FC = () => {
  const activityList = [
    { name: 'Aulas de Música', color: 'text-brand-pink' },
    { name: 'Inglês Lúdico', color: 'text-brand-cyan' },
    { name: 'Pequenos Chefs (Culinária)', color: 'text-brand-lime' },
    { name: 'Teatro e Contação de Histórias', color: 'text-brand-orange' },
    { name: 'Horta e Jardinagem', color: 'text-brand-green' },
    { name: 'Capoeira e Psicomotricidade', color: 'text-brand-sky' },
  ];

  return (
    <section id="atividades" className="py-20 bg-brand-light-blue/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-brand-dark">Atividades Extras</h2>
          <p className="text-lg text-brand-dark/70 mt-2 font-pacifico text-brand-teal">Aventuras que vão além da sala de aula</p>
        </div>
        <div className="max-w-3xl mx-auto flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
             <img src="https://picsum.photos/seed/kidsart/600/700" alt="Criança pintando" className="w-full h-full object-cover rounded-xl shadow-lg" />
          </div>
          <div className="md:w-1/2 flex items-center">
            <ul className="space-y-4">
              {activityList.map((activity) => (
                <li key={activity.name} className="flex items-center">
                  <StarIcon className={activity.color} />
                  <span className="ml-4 text-lg font-bold text-brand-dark">{activity.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Activities;
