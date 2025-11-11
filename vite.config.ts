import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(() => {
  return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
      // Nota de segurança: evitar injetar chaves diretamente no bundle via `define`.
      // Use variáveis com prefixo VITE_ (ex: VITE_GEMINI_API_KEY) e acesse-as no cliente
      // com `import.meta.env.VITE_GEMINI_API_KEY`. Se houver segredos, mova-os para um
      // backend/proxy — não os exponha no front-end.
      resolve: {
        alias: {
          '@': path.resolve(__dirname, 'src'),
        }
      }
    };
});
