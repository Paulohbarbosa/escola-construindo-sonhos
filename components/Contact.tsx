import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle form submission
    alert('Mensagem enviada! Entraremos em contato em breve.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contato" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-32 h-32 bg-brand-pink/20 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-brand-sky/20 rounded-full translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-6 z-10 relative">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-brand-dark">Fale Conosco</h2>
          <p className="text-lg text-brand-dark/70 mt-2 font-pacifico text-brand-teal">Estamos ansiosos para conhecer sua família!</p>
        </div>
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2 bg-white p-8 rounded-xl shadow-2xl border border-gray-100">
            <h3 className="text-2xl font-bold mb-6 text-brand-dark">Envie uma mensagem</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-brand-dark/80 mb-2">Nome do Responsável</label>
                <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:outline-none transition" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-bold text-brand-dark/80 mb-2">E-mail</label>
                <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:outline-none transition" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-bold text-brand-dark/80 mb-2">Mensagem</label>
                <textarea name="message" id="message" rows={5} value={formData.message} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:outline-none transition"></textarea>
              </div>
              <button type="submit" className="w-full bg-brand-teal hover:bg-opacity-90 text-white font-bold py-3 px-6 rounded-lg transition-transform transform hover:scale-105">
                Enviar
              </button>
            </form>
          </div>
          <div className="lg:w-1/2 flex flex-col justify-center">
            <div className="space-y-6">
                <InfoItem icon={<MapPinIcon />} title="Nosso Endereço" text="Rua dos Sonhos, 123 - Bairro da Fantasia, Cidade Feliz - SP" />
                <InfoItem icon={<PhoneIcon />} title="Telefone" text="(11) 98765-4321" />
                <InfoItem icon={<ClockIcon />} title="Horário de Funcionamento" text="Segunda a Sexta, das 7h às 19h" />
            </div>
            <div className="mt-8 rounded-lg overflow-hidden shadow-lg">
                <img src="https://picsum.photos/seed/map/600/300" alt="Mapa da localização da escola" className="w-full h-auto object-cover"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// FIX: Changed JSX.Element to React.ReactNode to resolve "Cannot find namespace 'JSX'" error.
const InfoItem: React.FC<{icon: React.ReactNode, title: string, text: string}> = ({icon, title, text}) => (
    <div>
        <div className="flex items-center mb-2">
            <div className="w-6 h-6 text-brand-teal mr-3">{icon}</div>
            <h4 className="font-bold text-lg text-brand-dark">{title}</h4>
        </div>
        <p className="text-brand-dark/80 pl-9">{text}</p>
    </div>
)

const MapPinIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>);
const PhoneIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>);
const ClockIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>);


export default Contact;