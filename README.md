<div align="center">
  <h1>Escola Construindo Sonhos</h1>
  <p>Site institucional da Escola Construindo Sonhos — um espaço mágico e acolhedor para aprender e crescer.</p>
</div>

## ✨ Visão Geral

Aplicação frontend feita com React + Vite, utilizando Tailwind via PostCSS (configurado localmente) para estilos. O site apresenta as seções principais da escola, com foco em performance, acessibilidade e uma identidade visual leve e acolhedora. Agora conta com modo claro/escuro com persistência de preferência.

## 🚀 Recursos Principais
- Cabeçalho com navegação e rolagem suave entre seções
- Hero com chamada “Matrículas Abertas”
- Seções: Sobre Nós, Proposta (Metodologia), Nosso Espaço (Galeria), Atividades, Contato
- Rodapé com redes sociais e direitos autorais
- Modo Escuro com alternância no cabeçalho (persistência em localStorage)

## 🛠️ Tecnologias
- React 19
- Vite 6
- TypeScript 5
- Tailwind CSS via CDN (config em `index.html`)

## 📂 Estrutura de Pastas

```
d:\ECS\escola-construindo-sonhos/
├── App.tsx
├── components/
│   ├── About.tsx
│   ├── Activities.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   ├── Gallery.tsx
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Logo.tsx
│   ├── Methodology.tsx
│   ├── ThemeToggle.tsx
│   └── logoAmarrado.tsx
├── contexts/
│   └── ThemeContext.tsx
├── index.html
├── index.tsx
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## 🌗 Modo Escuro
- Implementado com classe `dark` aplicada ao elemento raiz (config: `darkMode: 'class'` em `index.html`)
- Alternância via botão no cabeçalho: `components/ThemeToggle.tsx`
- Estado global e persistência: `contexts/ThemeContext.tsx`
- Componentes ajustados com variantes `dark:` (ex.: `App.tsx`, `Header.tsx`, `Hero.tsx`)

## 🧩 Convenções e Boas Práticas
- Código organizado por domínio (components, contexts)
- Evita repetição (DRY) e separa responsabilidades
- Acessibilidade: botões com `aria-label`, contraste ajustado no modo escuro
- Segurança: sem segredos no código-fonte; variáveis de ambiente devem ser mantidas em arquivos `.env-*` (ver abaixo)

## ⚙️ Configuração (Opcional)
Atualmente o site é estático e não requer variáveis de ambiente. Se integrar com APIs no futuro, siga a convenção:
- `.env-dev`, `.env-homolog`, `.env-prod`
- Carregue valores via `import.meta.env` (Vite) e nunca exponha segredos em cliente sem proxy/servidor.

### Variáveis de ambiente (exemplo)

Existe um arquivo de exemplo com as variáveis usadas no projeto: `.env.example`.

- Copie `.env.example` para `.env` ou `.env.local` e preencha os valores.
- Variáveis que serão expostas ao cliente devem usar o prefixo `VITE_` (por exemplo `VITE_GEMINI_API_KEY`). Acesse no código com `import.meta.env.VITE_GEMINI_API_KEY`.
- NÃO comite arquivos `.env` contendo segredos. Se precisar guardar chaves privadas, mova a lógica para um backend ou função serverless que não seja distribuída ao cliente.

Exemplo mínimo (em `.env.local`):

```
VITE_GEMINI_API_KEY=seu_valor_aqui
VITE_API_URL=https://api.exemplo.com
```

Se quiser, posso atualizar o `vite.config.ts` para carregar apenas variáveis `VITE_...` e remover `define` que injeta chaves diretamente no bundle.

## 🧪 Como Rodar Localmente

Pré-requisitos: Node.js (LTS)

1. Instalar dependências:
   ```bash
   npm install
   ```
2. Iniciar servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
   O Vite abrirá a aplicação (por padrão em `http://localhost:3000/`, podendo alternar porta se estiver em uso).

## 📦 Build e Preview
```bash
npm run build     # gera build de produção
npm run preview   # serve o build localmente para inspeção
```

## 📌 Deploy
Por ser um frontend estático, você pode publicar o diretório `dist/` em:
- Vercel, Netlify, GitHub Pages, Cloudflare Pages ou qualquer host de conteúdo estático.

## 🗺️ Roadmap Sugerido
- [x] Modo escuro com alternância
- [ ] Menu mobile (hambúrguer) com navegação acessível
- [ ] Formulário de contato integrado a API (com validação e tratamento de erros)
- [ ] SEO básico (metatags, OG, sitemap)
- [ ] Testes de integração para rotas de navegação e acessibilidade

## 🤝 Contribuição
Pull requests são bem-vindos. Mantenha commits pequenos e claros, e descreva o “porquê” das mudanças.

## 📄 Licença
Projeto sem licença definida. Caso necessário, podemos adicionar MIT ou licença personalizada da instituição.
