import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from '../App';
import { ThemeProvider } from '../contexts/ThemeContext';

describe('App', () => {
  it('renders main content', () => {
    render(
      <ThemeProvider>
        <App />
      </ThemeProvider>
    );
    const main = screen.getByRole('main');
    expect(main).toBeTruthy();
  });
});
