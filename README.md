<div align="center">

<img src="public/images/site/logo-ong.png" alt="PROEC Logo" width="120" />

# PROEC — Projeto Esporte Crescer

**Website institucional da ONG Projeto Esporte Crescer**

Site profissional desenvolvido para captação de doadores, visibilidade institucional e divulgação dos eventos da ONG. Construído com HTML semântico, CSS modular e JavaScript moderno, utilizando Vite como bundler.

[![Vite](https://img.shields.io/badge/Vite-8.x-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![GSAP](https://img.shields.io/badge/GSAP-3.x-88CE02?style=flat-square&logo=greensock&logoColor=white)](https://greensock.com/gsap/)
[![Lenis](https://img.shields.io/badge/Lenis-Smooth_Scroll-black?style=flat-square)](https://lenis.darkroom.engineering/)
[![HTML5](https://img.shields.io/badge/HTML5-Semântico-E34F26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-Modular-1572B6?style=flat-square&logo=css3&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
[![License](https://img.shields.io/badge/Licença-Proprietária-red?style=flat-square)](#-licença)

</div>

---

## Sobre o Projeto

O **PROEC (Projeto Esporte Crescer)** é uma ONG sediada em Goiânia, GO, que desde 2015 utiliza o esporte como ferramenta de transformação social para crianças e adolescentes em situação de vulnerabilidade.

Este repositório contém o **site institucional** da ONG, com foco em:

- Apresentação institucional e história da organização
- Galeria de eventos integrada com álbuns do Google Photos
- Página de doações para captação de recursos
- Design responsivo e animações de alto nível

---

## Tecnologias

| Categoria | Tecnologia |
|---|---|
| Bundler | [Vite 8](https://vitejs.dev/) |
| Animações | [GSAP 3](https://greensock.com/gsap/) |
| Scroll suave | [Lenis](https://lenis.darkroom.engineering/) |
| Fontes | Google Fonts — Cardo (serif) + Inter (sans-serif) |
| Linguagens | HTML5 semântico · CSS3 modular · JavaScript ES Modules |

---

## Estrutura do Projeto

```
ong-proec-html/
│
├── index.html                  # Página principal (landing page)
├── doar.html                   # Página de doações
├── vite.config.js              # Configuração do Vite
├── package.json
│
├── src/
│   ├── css/
│   │   ├── main.css            # Entry point CSS (importa todos os módulos)
│   │   ├── tokens.css          # Design tokens (cores, tipografia, espaçamento)
│   │   ├── reset.css           # CSS reset moderno
│   │   ├── typography.css      # Sistema tipográfico fluido
│   │   ├── components.css      # Componentes reutilizáveis (botões, cards, badges)
│   │   ├── sections.css        # Estilos por seção (hero, sobre, eventos...)
│   │   └── animations.css      # Keyframes e classes de animação
│   │
│   └── js/
│       ├── main.js             # Entry point JS (inicialização dos módulos)
│       ├── core/
│       │   ├── smooth-scroll.js    # Lenis + GSAP ticker
│       │   ├── cursor.js           # Cursor customizado
│       │   ├── page-transitions.js # Transições entre páginas
│       │   └── scroll-reveals.js   # Animações de entrada ao rolar
│       ├── animations/
│       │   ├── hero.js             # Animações da seção Hero
│       │   ├── counters.js         # Contadores animados de impacto
│       │   └── header.js           # Comportamento do header sticky
│       └── events/
│           └── events-section.js   # Galeria de eventos (carrega JSON dinâmico)
│
├── public/
│   ├── data/
│   │   └── events-albums.json  # Catálogo de 38 álbuns de eventos
│   └── images/
│       ├── albums/             # Thumbnails dos álbuns (01/ a 38/)
│       └── site/               # Assets gerais do site
│
└── partials/
    ├── header.html             # Header compartilhado
    └── footer.html             # Footer compartilhado
```

---

## Design System

O projeto possui um design system próprio documentado em [DESIGN-SYSTEM.md](DESIGN-SYSTEM.md).

### Paleta de Cores

| Token | Valor | Uso |
|---|---|---|
| `--primary-500` | `hsl(133, 61%, 37%)` | Verde PROEC — cor principal |
| `--secondary-500` | `hsl(43, 96%, 56%)` | Amarelo solar — CTAs e destaques |
| `--tertiary-500` | `hsl(217, 91%, 60%)` | Azul confiança — links e info |
| `--text-primary` | `hsl(133, 20%, 12%)` | Texto principal |
| `--bg-primary` | `hsl(0, 0%, 100%)` | Background padrão |

### Tipografia

- **Títulos**: Cardo (serif) — elegância e autoridade
- **Corpo**: Inter (sans-serif) — legibilidade e modernidade
- Tipografia fluida com `clamp()` em toda a escala

### Arquitetura CSS

CSS modular com tokens semânticos — sem framework externo. As variáveis seguem uma hierarquia de dois níveis: escala de cores primitivas (`--primary-500`) e tokens semânticos (`--text-primary`, `--bg-elevated`).

---

## Funcionalidades

- **Hero animado** com blobs decorativos e parallax sutil
- **Contadores de impacto** com animação ao entrar na viewport
- **Galeria de eventos** carregada dinamicamente via JSON, com 38 álbuns linkados ao Google Photos
- **Scroll suave** com Lenis e integração com GSAP
- **Cursor customizado** com efeito magnético em elementos interativos
- **Transições entre páginas** fluidas e elegantes
- **Scroll reveals** em todos os elementos com `data-reveal`
- **Header sticky** com mudança de estilo ao rolar

---

## Primeiros Passos

### Pré-requisitos

- [Node.js](https://nodejs.org/) v18 ou superior

### Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/ong-proec-html.git
cd ong-proec-html

# Instale as dependências
npm install
```

### Desenvolvimento

```bash
npm run dev
```

O servidor de desenvolvimento estará disponível em `http://localhost:5173`.

### Build de Produção

```bash
npm run build
```

Os arquivos otimizados serão gerados na pasta `dist/`.

### Preview do Build

```bash
npm run preview
```

### Sincronizar Catálogo de Eventos

```bash
npm run events:sync
```

Regenera o arquivo `public/data/events-albums.json` a partir da fonte de dados dos álbuns.

---

## SEO & Acessibilidade

- Meta tags Open Graph e Twitter Cards configuradas
- HTML semântico com `aria-label`, `aria-labelledby` e roles adequados
- Contraste de cores em conformidade com **WCAG AA**
- Focus states visíveis para navegação por teclado
- Imagens com atributos `alt`, `width`, `height` e `loading="lazy"`
- `prefers-reduced-motion` respeitado nas animações

---

## Licença

Este projeto foi desenvolvido exclusivamente para o **Projeto Esporte Crescer (PROEC)**. Todos os direitos reservados. Não é permitido o uso, cópia ou distribuição sem autorização expressa.

---

<div align="center">

Desenvolvido por **Jairo Miranda** · [WhatsApp](https://wa.me/5562981398484)

*Esporte que transforma vidas.*

</div>
