# Irís — Loja de Tintas

Landing page e catálogo de uma loja de tintas fictícia, feitos com React e
Next.js como exercício da matéria de Web II. O foco do trabalho era criar os
elementos da interface e fazer o layout funcionar bem em celular, tablet e
desktop. Não há backend: os dados das cores estão em um arquivo local.

## Sobre o projeto

O trabalho foi feito em cerca de duas semanas, à mão e sem uso de IA. Ele
pedia páginas com componentes React, estilização com Tailwind e layout
responsivo. O logo, a paleta laranja e os textos são criações do projeto, e a
loja é fictícia.

## O que tem

- **Home (`/`):** barra superior com logo e menu, seção principal com a
  chamada "A maior loja de tintas do país!!!", cores em destaque, três
  blocos de benefícios, uma chamada para o catálogo e rodapé.
- **Catálogo (`/catalogo`):** lista de 8 cores com filtro por ambiente
  (Todas, Interna e Externa). O filtro ativo fica destacado e a contagem
  de cores muda a cada escolha.
- **Menu responsivo:** em telas grandes, os links aparecem na barra. Em
  telas menores, eles ficam atrás de um botão de hambúrguer.
- **Navegação:** os itens "Home" e "Catálogo" do menu e os botões "Ver
  catálogo" levam às páginas correspondentes.

## O que não tem

Estas partes ficaram de fora porque não faziam parte do objetivo do
trabalho:

- **Botão "Conta":** mostra um aviso no navegador, sem tela de login.
- **Botão "Cadastrar nova cor":** não abre formulário nem salva nada.
- **Botão "Ver carrinho":** não leva a nenhuma página e não guarda produtos.
- **Backend e dados reais:** não há banco, API nem autenticação. A lista de
  cores fica em `src/data/cores.ts`.

## Como rodar

Requisitos: Node.js 18 ou mais recente.

```bash
npm install
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

Para gerar a build de produção:

```bash
npm run build
```

## Tecnologias

- Next.js 14 com App Router
- React 18 e TypeScript
- Tailwind CSS 3, para estilização e responsividade
- Material UI 5 (`@mui/material` e `@mui/icons-material`), para o botão do
  menu e os ícones

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
└── views/
    ├── Catalogo.tsx  # conteúdo da página de catálogo
    └── Home.tsx      # conteúdo da página inicial
```
