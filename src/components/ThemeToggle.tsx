import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle: React.FC<{ className?: string }> = ({ className }) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';
  return (
    <button
      type="button"
      aria-label={isDark ? 'Ativar modo claro' : 'Ativar modo escuro'}
      onClick={toggleTheme}
      className={`inline-flex items-center gap-2 px-3 py-2 rounded-full border border-transparent hover:text-yellow-500 text-gray-400 dark:text-yellow-300 dark:hover:text-gray-200 transition-colors ${className ?? ''}`}
    >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 1 0 9.79 9.79Z" />
        </svg>
    </button>
  );
};

export default ThemeToggle;