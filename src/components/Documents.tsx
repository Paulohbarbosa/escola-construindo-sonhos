import React from 'react';
import { FilePdf, Calendar, Files, DownloadSimple } from '@phosphor-icons/react';

const DocumentCard: React.FC<{ title: string; description: string; icon: React.ReactNode }> = ({
  title,
  description,
  icon,
}) => (
  <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col items-center text-center group">
    <div className="w-16 h-16 bg-brand-light-blue/30 rounded-full flex items-center justify-center text-brand-teal mb-6 group-hover:scale-110 transition-transform duration-300">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-brand-dark mb-3">{title}</h3>
    <p className="text-gray-600 mb-6 flex-grow">{description}</p>
    <button className="flex items-center gap-2 px-6 py-2 bg-brand-teal text-white rounded-full font-bold hover:bg-brand-dark transition-colors w-full justify-center">
      <DownloadSimple size={20} weight="bold" />
      Baixar
    </button>
  </div>
);

const Documents: React.FC = () => {
  const documents = [
    {
      title: 'Projeto Político Pedagógico',
      description:
        'Conheça nossa proposta educacional, valores e diretrizes que orientam nosso ensino.',
      icon: <FilePdf size={32} weight="fill" />,
    },
    {
      title: 'Calendário Acadêmico',
      description:
        'Fique por dentro de todas as datas importantes, feriados e eventos do ano letivo.',
      icon: <Calendar size={32} weight="fill" />,
    },
    {
      title: 'Documentos para Matrícula',
      description:
        'Lista completa de documentos necessários para realizar a matrícula do seu filho.',
      icon: <Files size={32} weight="fill" />,
    },
  ];

  return (
    <section id="documentos" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-brand-dark">Área de Documentos</h2>
          <p className="text-lg text-brand-dark/70 mt-2 font-pacifico text-brand-teal">
            Informações importantes para você
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {documents.map((doc, index) => (
            <DocumentCard
              key={index}
              title={doc.title}
              description={doc.description}
              icon={doc.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Documents;
