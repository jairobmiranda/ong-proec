# Projeto Esporte Crescer - Website Institucional

Landing page profissional desenvolvida em Next.js 14+ para a ONG Projeto Esporte Crescer (PROEC), focada em captação de grandes doadores e parcerias institucionais.

## 🚀 Tecnologias

- **Next.js 14+** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS 4**
- **Server Components** para performance otimizada

## 📁 Estrutura do Projeto

```
├── app/                        # App Router do Next.js
│   ├── layout.tsx             # Layout raiz com metadata global
│   ├── page.tsx               # Página principal (landing)
│   ├── globals.css            # Estilos globais e design tokens
│   ├── robots.ts              # Configuração de robots.txt
│   ├── sitemap.ts             # Geração dinâmica de sitemap
│   ├── opengraph-image.tsx    # Imagem Open Graph dinâmica
│   ├── doar/                  # Página de doações
│   ├── patrocinio/            # Página de patrocínio
│   └── transparencia/         # Página de transparência
│
├── components/
│   ├── ui/                    # Componentes base reutilizáveis
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Container.tsx
│   │   ├── Section.tsx
│   │   └── SectionLabel.tsx
│   │
│   └── patterns/              # Componentes de seções (patterns)
│       ├── Header.tsx
│       ├── Hero.tsx
│       ├── SobreProjeto.tsx
│       ├── Principios.tsx
│       ├── ImpactoSocial.tsx
│       ├── Modalidades.tsx
│       ├── Depoimentos.tsx
│       ├── DoeAgora.tsx
│       ├── Patrocinio.tsx
│       └── Footer.tsx
│
├── lib/
│   └── constants.ts           # Dados estáticos e configurações
│
├── types/
│   └── index.ts               # Definições TypeScript
│
└── public/
    └── images/                # Imagens e assets
        ├── hero-bg.jpg        # (placeholder)
        └── sobre-projeto.jpg  # (placeholder)
```

## 🎨 Design System

### Cores
- **Base**: `#FEFCE8` (fundo claro amarelo)
- **Base 2**: `#FFFFFF` (branco)
- **Contrast**: `#111827` (texto escuro)
- **Accent**: `#FCD34D` (amarelo principal)
- **Accent 2**: `#10B981` (verde)
- **Accent 3**: `#3B82F6` (azul)
- **Accent 4**: `#1E40AF` (azul escuro)

### Tipografia
- **Títulos**: Cardo (serif)
- **Corpo**: Inter (sans-serif)
- Tipografia fluida com `clamp()`

### Espaçamentos
Usando variáveis CSS responsivas (`--spacing-10` a `--spacing-60`)

## 📄 Páginas

### Landing Page (/)
Seções na seguinte ordem:
1. **Header** - Navegação sticky com CTAs
2. **Hero** - Banner principal com métricas
3. **Sobre o Projeto** - História e informações institucionais
4. **Princípios** - Missão, Visão e Valores
5. **Impacto Social** - Métricas de resultados
6. **Modalidades** - Atividades esportivas oferecidas
7. **Depoimentos** - Histórias reais
8. **Doe Agora** - CTAs de doação
9. **Patrocínio** - Níveis e benefícios
10. **Footer** - Links, contato e informações

### /transparencia
Página dedicada com:
- Informações institucionais completas
- Documentos (Estatuto, CNPJ, etc.)
- Estrutura de governança
- Relatórios financeiros

### /doar
Página otimizada para conversão:
- Calculadora de impacto
- Múltiplas formas de pagamento
- Opção de doação recorrente
- Selos de segurança

### /patrocinio
Landing page para captação corporativa:
- Benefícios do patrocínio
- 4 níveis (Bronze, Prata, Ouro, Master)
- Kit de patrocínio para download
- Formulário de contato

## 🔧 Comandos

```bash
# Instalar dependências
npm install

# Desenvolvimento
npm run dev

# Build de produção
npm run build

# Iniciar servidor de produção
npm start

# Linting
npm run lint
```

## 🌐 SEO e Performance

### Otimizações Implementadas
- ✅ Metadata API do Next.js 14
- ✅ Open Graph tags completas
- ✅ Twitter Cards
- ✅ Sitemap dinâmico
- ✅ Robots.txt configurado
- ✅ Imagens otimizadas (AVIF/WebP)
- ✅ Server Components por padrão
- ✅ Lazy loading de imagens
- ✅ Tipografia web otimizada

### Acessibilidade
- ✅ Contraste WCAG AA
- ✅ Focus states visíveis
- ✅ Navegação por teclado
- ✅ ARIA labels onde necessário
- ✅ Semantic HTML

## 📊 Analytics (Implementar)

Para rastreamento completo, adicionar:
- Google Analytics 4
- Meta Pixel
- Hotjar/Microsoft Clarity
- Event tracking customizado

## 🖼️ Assets Necessários

Substituir os placeholders em `/public/images/`:
- `hero-bg.jpg` (1920x1080px mínimo)
- `sobre-projeto.jpg` (800x600px)
- `og-image.jpg` (1200x630px)
- Logos de parceiros

## 🔄 Próximos Passos

1. **Adicionar imagens reais** nos placeholders
2. **Integrar gateway de pagamento** (Stripe/Mercado Pago)
3. **Configurar Analytics** (GA4, Meta Pixel)
4. **Implementar formulários** com backend
5. **Adicionar CMS headless** (opcional - Sanity/Prismic)
6. **Configurar domínio** e deploy (Vercel recomendado)

## 📝 Customização

### Atualizar informações institucionais
Editar `/lib/constants.ts`:
- Dados da ONG (CNPJ, contato, endereço)
- Métricas de impacto
- Modalidades esportivas
- Níveis de patrocínio
- Depoimentos

### Alterar cores do tema
Editar `/app/globals.css` na seção `:root`

## 📞 Contato do Desenvolvedor

**Jairo Miranda**
- WhatsApp: [+55 62 98139-8484](https://wa.me/5562981398484)

## 📄 Licença

Este projeto foi desenvolvido especificamente para o Projeto Esporte Crescer.

---

**Desenvolvido com ❤️ para transformar vidas**
