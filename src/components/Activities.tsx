import React from 'react';
import { InstagramLogo, Heart, ChatCircle } from '@phosphor-icons/react';

const StarIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`h-6 w-6 ${className}`}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.539 1.118l-3.975-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.196-1.539-1.118l1.518-4.674a1 1 0 00-.363-1.118L2.05 10.1c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
    />
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

  const instagramPosts = [
    {
      id: 1,
      image: 'https://picsum.photos/seed/insta1/400/400',
      caption: 'Dia de muita diversão na nossa horta! 🌱 #EscolaConstruindoSonhos #Natureza',
    },
    {
      id: 2,
      image: 'https://picsum.photos/seed/insta2/400/400',
      caption: 'Nossos pequenos artistas criando obras primas! 🎨 #ArteNaEscola #Criatividade',
    },
    {
      id: 3,
      image: 'https://picsum.photos/seed/insta3/400/400',
      caption: 'Aula de música com muita alegria e ritmo! 🎵 #Musicalização #EducaçãoInfantil',
    },
    {
      id: 4,
      image: 'https://picsum.photos/seed/insta4/400/400',
      caption: 'Hora do conto: viajando pelo mundo da imaginação! 📚 #Leitura #Histórias',
    },
  ];

  return (
    <section id="atividades" className="py-20 bg-brand-light-blue/50">
      <div className="container mx-auto px-6">
        {/* Activities List */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-brand-dark">Atividades Extracurriculares</h2>
          <p className="text-lg text-brand-dark/70 mt-2 font-pacifico text-brand-teal">
            Aventuras que vão além da sala de aula
          </p>
        </div>
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8 mb-20">
          <div className="md:w-1/2">
            <img
              src="https://picsum.photos/seed/kidsart/600/700"
              alt="Criança pintando"
              className="w-full h-full object-cover rounded-xl shadow-lg"
            />
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

        {/* Instagram Feed Section */}
        <div className="mt-24">
          <div className="flex items-center justify-center gap-3 mb-8">
            <InstagramLogo size={40} className="text-brand-pink" weight="fill" />
            <h3 className="text-3xl font-bold text-brand-dark">Acompanhe nosso dia a dia</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {instagramPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={post.image}
                    alt="Instagram Post"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 text-white">
                    <div className="flex items-center gap-1">
                      <Heart weight="fill" size={24} />
                      <span className="font-bold">124</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <ChatCircle weight="fill" size={24} />
                      <span className="font-bold">12</span>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-sm text-gray-600 line-clamp-2">{post.caption}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-full hover:opacity-90 transition-opacity shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <InstagramLogo size={24} weight="bold" />
              Siga-nos no Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Activities;
