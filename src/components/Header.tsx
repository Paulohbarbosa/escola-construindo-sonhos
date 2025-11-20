import React, { useState, useEffect } from 'react';
import { Popover, PopoverButton, PopoverPanel, Transition } from '@headlessui/react';
import { List, X } from '@phosphor-icons/react';
import Logo from './Logo';
import ThemeToggle from './ThemeToggle';
import Nuvem from '../assets/Nuvem';

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
    { href: '#documentos', label: 'Documentos' },
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
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'shadow-xl backdrop-blur-sm' : 'bg-transparent'}`}
    >
      {/* Background Nuvem - Fixed height on mobile to prevent shrinking */}
      <div className="absolute top-0 left-0 w-full h-[120px] md:h-auto overflow-hidden -z-10">
        <Nuvem
          className={`w-full h-full md:h-auto object-cover object-top text-white dark:text-gray-500 transition-all duration-300 ${isScrolled ? 'drop-shadow-xl' : 'drop-shadow-none'}`}
        />
      </div>

      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a
          href="#"
          onClick={(e) => handleScrollTo(e, '#hero')}
          className="w-32 md:w-40 relative z-50"
        >
          <Logo />
        </a>

        {/* Desktop Navigation */}
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
          <ThemeToggle />
        </nav>

        {/* Mobile Navigation */}
        <div className="lg:hidden flex items-center gap-4">
          <ThemeToggle />
          <Popover className="relative">
            {({ open }) => (
              <>
                <PopoverButton className="p-2 text-brand-dark dark:text-gray-100 focus:outline-none">
                  {open ? <X size={32} weight="bold" /> : <List size={32} weight="bold" />}
                </PopoverButton>

                <Transition
                  enter="transition duration-200 ease-out"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition duration-150 ease-in"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <PopoverPanel className="absolute right-0 mt-2 w-60 bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-4 ring-1 ring-black/5 z-50">
                    <div className="flex flex-col space-y-4">
                      {navLinks.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          onClick={(e) => {
                            handleScrollTo(e, link.href);
                            // Close popover implicitly by navigation (Headless UI handles focus, but we might need a close button or just let it be)
                          }}
                          className="text-lg font-semibold text-brand-dark dark:text-gray-100 hover:text-brand-teal dark:hover:text-brand-teal transition-colors block px-4 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  </PopoverPanel>
                </Transition>
              </>
            )}
          </Popover>
        </div>
      </div>
    </header>
  );
};

export default Header;
