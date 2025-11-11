/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  // Expandido para cobrir arquivos dentro de `src` e arquivos JS/JSX
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}', './**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Paleta semântica principal controlada por CSS variables
        primary: {
          DEFAULT: 'var(--color-primary)',
          hover: 'var(--color-primary-hover)',
          active: 'var(--color-primary-active)',
          disabled: 'var(--color-primary-disabled)'
        },
        secondary: {
          DEFAULT: 'var(--color-secondary)',
          hover: 'var(--color-secondary-hover)',
          active: 'var(--color-secondary-active)',
          disabled: 'var(--color-secondary-disabled)'
        },
        neutral: {
          DEFAULT: 'var(--color-neutral)',
          hover: 'var(--color-neutral-hover)',
          active: 'var(--color-neutral-active)',
          disabled: 'var(--color-neutral-disabled)'
        },

        // Cores legacy para compatibilidade com classes existentes
        'brand-light-blue': '#E0F7FA',
        'brand-teal': '#4DD0E1',
        'brand-orange': '#FFB74D',
        'brand-dark': '#263238',
        'brand-pink': '#F48FB1',
        'brand-cyan': '#80DEEA',
        'brand-lime': '#DCE775',
        'brand-green': '#AED581',
        'brand-sky': '#90CAF9'
      },
      backgroundImage: {
        'nuvem': "url('../assets/nuvemBarraManu.svg')"
      },
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
        pacifico: ['Pacifico', 'cursive']
      },
      fontSize: {
        h1: ['2.25rem', { lineHeight: '1.2', fontWeight: '800' }],
        h2: ['1.75rem', { lineHeight: '1.25', fontWeight: '800' }],
        h3: ['1.5rem', { lineHeight: '1.3', fontWeight: '700' }],
        sectionDescription: ['1rem', { lineHeight: '1.6' }],
        contentTitle: ['1.25rem', { lineHeight: '1.4', fontWeight: '700' }],
        contentBody: ['1rem', { lineHeight: '1.6' }],
        buttonSm: ['0.875rem', { lineHeight: '1.25', fontWeight: '700' }],
        buttonMd: ['1rem', { lineHeight: '1.3', fontWeight: '700' }],
        buttonLg: ['1.125rem', { lineHeight: '1.35', fontWeight: '700' }]
      }
    }
  },
  plugins: []
};