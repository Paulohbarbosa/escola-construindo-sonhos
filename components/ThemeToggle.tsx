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
      className={`inline-flex items-center gap-2 px-3 py-2 rounded-full border border-transparent bg-gray-200 hover:bg-gray-300 text-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-100 transition-colors ${className ?? ''}`}
    >
      {isDark ? (
        // Sun icon
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Zm0 4a1 1 0 0 0 1-1v-1a1 1 0 1 0-2 0v1a1 1 0 0 0 1 1Zm7-3a1 1 0 0 0 .707-1.707l-.707-.707a1 1 0 0 0-1.414 1.414l.707.707A1 1 0 0 0 19 19Zm3-7a1 1 0 0 0-1-1h-1a1 1 0 1 0 0 2h1a1 1 0 0 0 1-1ZM5 19a1 1 0 0 0 .707-1.707l-.707-.707a1 1 0 1 0-1.414 1.414l.707.707A1 1 0 0 0 5 19ZM4 12a1 1 0 0 0-1-1H2a1 1 0 1 0 0 2h1a1 1 0 0 0 1-1Zm1-7a1 1 0 0 0-.707 1.707l.707.707A1 1 0 1 0 6.414 5l-.707-.707A1 1 0 0 0 5 5ZM12 2a1 1 0 0 0-1 1v1a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1Z" />
        </svg>
      ) : (
        // Moon icon
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 1 0 9.79 9.79Z" />
        </svg>
      )}
      <span className="text-sm font-semibold">{isDark ? 'Claro' : 'Escuro'}</span>
    </button>
  );
};

export default ThemeToggle;