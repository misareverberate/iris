# Irís — Loja de Tintas

Mockup de front-end de uma loja de tintas, feito com Next.js (App Router),
React, TypeScript, Tailwind CSS e Material UI. Não tem dados nem backend: é
só a interface, pensada para visualização. O nome e o logo são do projeto:
um arco-íris em formato de tinta.

## Como rodar

```bash
npm install
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

Para checar a build de produção:

```bash
npm run build
```

## Páginas

- **Home (`/`):** barra superior com logo, links e botões, e a seção
  principal com a chamada "A maior loja de tintas do país!!!".

Os botões do menu e da home (Catálogo, Cadastrar nova cor, Conta, Ver
catálogo, Ver carrinho) são visuais: ainda não levam a nenhuma página.

## Estrutura

```
src/
├── app/
│   ├── catalogo/
│   │   └── page.tsx  # rota /catalogo
│   ├── page.tsx      # rota /
│   ├── layout.tsx    # layout raiz e fontes
│   └── globals.css   # estilos globais e cores de fundo
├── assets/           # logo e imagem da home
├── components/
│   ├── Buttons/      # botões primário, secundário, terciário e alternativo
│   ├── Footer.tsx    # rodapé compartilhado
│   └── Menu.tsx      # barra superior com menu responsivo
├── data/
│   └── cores.ts      # lista de cores usada pela home e pelo catálogo
└── pages/
    ├── Catalogo.tsx  # conteúdo da página de catálogo
    └── Home.tsx      # conteúdo da página inicial
```
