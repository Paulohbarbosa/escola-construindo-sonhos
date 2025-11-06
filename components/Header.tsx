import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import ThemeToggle from './ThemeToggle';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#sobre', label: 'Sobre Nós' },
    { href: '#proposta', label: 'Proposta' },
    { href: '#espaco', label: 'Nosso Espaço' },
    { href: '#atividades', label: 'Atividades' },
    { href: '#contato', label: 'Contato' },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault();
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 dark:bg-brand-dark/80 shadow-md backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-2 flex justify-between items-center">
        <a href="#" onClick={(e) => handleScrollTo(e, '#hero')} className="w-30 md:w-40">
          <Logo />
        </a>
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleScrollTo(e, link.href)}
              className="text-brand-dark dark:text-gray-100 hover:text-brand-teal dark:hover:text-brand-teal font-bold transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;