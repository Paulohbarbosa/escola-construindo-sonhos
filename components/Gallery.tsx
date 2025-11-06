
import React from 'react';

const GalleryImage: React.FC<{ src: string; alt: string }> = ({ src, alt }) => (
  <div className="relative aspect-square overflow-hidden rounded-xl shadow-lg group">
    <img src={src} alt={alt} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
  </div>
);

const Gallery: React.FC = () => {
  const images = [
    { src: 'https://picsum.photos/seed/playground/500/500', alt: 'Playground colorido' },
    { src: 'https://picsum.photos/seed/classroom/500/500', alt: 'Sala de aula' },
    { src: 'https://picsum.photos/seed/artroom/500/500', alt: 'Sala de artes' },
    { src: 'https://picsum.photos/seed/garden/500/500', alt: 'Horta da escola' },
    { src: 'https://picsum.photos/seed/library/500/500', alt: 'Cantinho da leitura' },
    { src: 'https://picsum.photos/seed/toys/500/500', alt: 'Brinquedoteca' },
  ];

  return (
    <section id="espaco" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-brand-dark">Nosso Espaço</h2>
          <p className="text-lg text-brand-dark/70 mt-2 font-pacifico text-brand-teal">Um cantinho mágico para aprender</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {images.map((image, index) => (
            <GalleryImage key={index} src={image.src} alt={image.alt} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
