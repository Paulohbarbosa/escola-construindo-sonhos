
import React from 'react';
import Logo from './Logo';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-brand-dark text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <div className="w-48 mx-auto md:mx-0 mb-4 bg-white/10 rounded-lg p-2">
                <Logo />
            </div>
            <p className="text-sm text-gray-400">
              Inspirando a próxima geração de sonhadores.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Navegação</h4>
            <ul className="space-y-2">
              <li><a href="#sobre" className="hover:text-brand-teal transition-colors">Sobre Nós</a></li>
              <li><a href="#proposta" className="hover:text-brand-teal transition-colors">Proposta</a></li>
              <li><a href="#espaco" className="hover:text-brand-teal transition-colors">Nosso Espaço</a></li>
              <li><a href="#contato" className="hover:text-brand-teal transition-colors">Contato</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Siga-nos</h4>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-brand-teal rounded-full flex items-center justify-center transition-colors">
                <FacebookIcon />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-brand-teal rounded-full flex items-center justify-center transition-colors">
                <InstagramIcon />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {currentYear} Escola Construindo Sonhos. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

const FacebookIcon = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v2.385z"/></svg>
);
const InstagramIcon = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.07-1.645-.07-4.85s.012-3.584.07-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.441 1.441 1.441 1.441-.645 1.441-1.441-.645-1.44-1.441-1.44z"/></svg>
);


export default Footer;
