# Irís — Loja de Tintas

Front-end de uma loja de tintas, feito com Next.js (App Router), React,
TypeScript, Tailwind CSS e Material UI. O nome e o logo são do projeto:
um arco-íris em formato de tinta.

## Estado atual

O projeto ainda não compila. Estes são os pontos pendentes:

- **Dependências faltando no `package.json`:** `@mui/material`,
  `@mui/icons-material` e `react-router-dom`. O `Menu` e o `Rotas` usam essas
  bibliotecas, mas elas não estão declaradas.
- **Páginas referenciadas que não existem:** `src/pages/Catalogue`,
  `src/pages/Login` e `src/pages/CreateProduct`. Elas são importadas em
  `src/routes/Rotas.tsx`, que hoje não é usado pelas rotas do App Router.
- **Arquivos vazios:** `src/components/CardProd.tsx` e a pasta
  `src/services/`.

Também há ajustes de conteúdo e estilo:

- A home diz "Tintas para todos os ambientes internos e internos". O correto
  seria "internos e externos".
- `src/app/layout.tsx` usa `lang="en"`, mas o site está em português.
- `src/app/globals.css` troca as cores de fundo e de texto no
  `prefers-color-scheme: light`, o que inverte o tema.
- O `Menu` usa `h-[100vh-100]`, que não é uma classe válida do Tailwind.

## Páginas que existem hoje

- **Home (`/`):** barra superior com logo, links e botões, e a seção
  principal com a chamada "A maior loja de tintas do país!!!".

## Como rodar

Depois que as dependências faltantes forem adicionadas:

```bash
npm install
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

## Estrutura

```
src/
├── app/            # layout, página inicial, fontes e estilos globais
├── assets/         # logo, imagem da home
├── components/
│   ├── Buttons/    # botões primário, secundário, terciário e alternativo
│   └── Menu.tsx    # barra superior com menu responsivo
├── pages/
│   └── Home.tsx    # conteúdo da página inicial
└── routes/
    └── Rotas.tsx   # rotas antigas com react-router-dom (não usadas hoje)
```
