# Mata & Estrada — Portfólio de Fotografia

Portfólio de fotografia de pessoas (retratos, editoriais, casamentos,
corporativo e ensaios externos), em React (Vite + React Router), com
paleta em tons de verde-claro que remete à natureza e à vida livre.

## Como rodar

```bash
npm install
npm run dev
```

Abra o endereço mostrado no terminal (geralmente `http://localhost:5173`).

Para gerar a versão de produção:

```bash
npm run build
npm run preview
```

## Estrutura de pastas

```
src/
  components/         um componente por pasta, com seu próprio .jsx e .css
    Header/
    Hero/              inclui o retrato em destaque
    Gallery/            grade de ensaios (cliente/pessoa)
    GalleryItem/         card do ensaio — link para a página da pessoa
    SessionPhoto/         foto individual dentro da página de um ensaio
    About/
    Contact/
    Footer/
    TrailDivider/        divisor decorativo (elemento de assinatura)
  pages/
    Home/                página inicial (Hero, Galeria, Sobre, Contato)
    Sessao/               página dedicada de cada pessoa/ensaio (/ensaio/:slug)
  data/
    sessions.js          conteúdo dos ensaios (pessoa, tipo, fotos, EXIF)
  hooks/
    useReveal.js          hook de revelação ao rolar a página
  styles/
    variables.css         tokens de cor, tipografia e espaçamento
    global.css             reset + estilos globais
  App.jsx                 rotas (react-router-dom)
  main.jsx
```

## Como funciona a navegação por pessoa

Cada card na Galeria representa um ensaio de uma pessoa (ou casal/equipe)
e leva para `/ensaio/[slug]`, uma página só com as fotos daquele ensaio.
Isso é definido em `src/data/sessions.js`: cada item tem um `slug` único,
os dados do ensaio (nome, tipo, local, EXIF de capa) e um array `photos`
com as fotos daquela sessão.

Para adicionar um novo ensaio, basta acrescentar um novo objeto em
`sessions` — o card na galeria e a página dedicada são gerados
automaticamente.

## Personalizando

- **Foto do Hero**: o bloco à direita do título (`.hero__portrait-frame`
  em `src/components/Hero/Hero.jsx`) hoje é um placeholder ilustrado.
  Troque o conteúdo por uma tag `<img src="/src/assets/sua-foto.jpg" />`
  com a sua foto real.
- **Fotos reais dos ensaios**: edite `src/data/sessions.js`. Troque o
  campo `gradient` pelo caminho de uma imagem real (coloque o arquivo em
  `src/assets/`), ajustando `GalleryItem` e `SessionPhoto` para
  renderizar `<img>` no lugar do bloco de gradiente quando houver uma
  imagem.
- **Cores**: todos os tons ficam centralizados em
  `src/styles/variables.css` — altere as variáveis `--color-*` para
  ajustar a identidade visual.
- **Categorias de ensaio**: a lista de filtros (Retrato, Editorial,
  Casamento, Corporativo, Ensaio Externo) está em `categories`, no topo
  de `src/data/sessions.js`.

## Paleta

| Token | Cor | Uso |
|---|---|---|
| `--color-bg` | `#f2f5e9` | fundo geral, verde bem claro |
| `--color-leaf` | `#a8c48a` | verde-claro de destaque |
| `--color-forest` | `#35442c` | textos, navegação, contraste |
| `--color-clay` | `#c98a4b` | acento quente (poeira de estrada) |
