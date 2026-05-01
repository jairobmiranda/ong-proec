# 🎨 Design System - Sistema de Cores Moderno

## Visão Geral

Este projeto utiliza um sistema de cores profissional e moderno, baseado em princípios de design contemporâneo, acessibilidade (WCAG AA/AAA) e suporte nativo a dark mode.

## 🌈 Paleta de Cores

### Cores Primárias

**Primary (Amarelo Vibrante)** - Representa energia, esperança e otimismo
- `--primary-50` a `--primary-950` - Escala completa HSL
- Uso: CTAs principais, destaques, elementos de ação

**Secondary (Verde Esperança)** - Representa crescimento, vida e transformação
- `--secondary-50` a `--secondary-950` - Escala completa HSL
- Uso: Elementos secundários, indicadores de sucesso, natureza

**Tertiary (Azul Confiança)** - Representa profissionalismo, futuro e confiabilidade
- `--tertiary-50` a `--tertiary-950` - Escala completa HSL
- Uso: Links, informações, elementos corporativos

### Cores Neutras

**Neutral (Escala de Cinzas)** - Base para textos e backgrounds
- `--neutral-50` a `--neutral-950` - Escala sofisticada com toque azulado
- Uso: Textos, backgrounds, bordas, elementos neutros

### Cores Semânticas

- **Success**: `--success-*` - Verde para feedback positivo
- **Warning**: `--warning-*` - Laranja para alertas
- **Error**: `--error-*` - Vermelho para erros
- **Info**: `--info-*` - Azul para informações

## 🎯 Como Usar

### 1. Variáveis de Texto

```css
color: var(--text-primary);    /* Texto principal */
color: var(--text-secondary);  /* Texto secundário */
color: var(--text-tertiary);   /* Texto terciário */
color: var(--text-disabled);   /* Texto desabilitado */
color: var(--text-inverse);    /* Texto invertido (no escuro) */
```

### 2. Variáveis de Background

```css
background: var(--bg-primary);    /* Background principal */
background: var(--bg-secondary);  /* Background secundário */
background: var(--bg-tertiary);   /* Background terciário */
background: var(--bg-elevated);   /* Background elevado */
background: var(--bg-overlay);    /* Overlay com transparência */
```

### 3. Variáveis de Borda

```css
border-color: var(--border-primary);   /* Borda principal */
border-color: var(--border-secondary); /* Borda secundária */
border-color: var(--border-focus);     /* Borda no foco */
```

### 4. Gradientes Modernos

```css
background: var(--gradient-primary);  /* Gradiente primário */
background: var(--gradient-brand);    /* Gradiente de marca */
background: var(--gradient-hero);     /* Gradiente hero */
background: var(--gradient-glass);    /* Gradiente vidro */
```

### 5. Sombras (Sistema em Camadas)

```css
box-shadow: var(--shadow-xs);   /* Sombra XS */
box-shadow: var(--shadow-sm);   /* Sombra pequena */
box-shadow: var(--shadow-md);   /* Sombra média */
box-shadow: var(--shadow-lg);   /* Sombra grande */
box-shadow: var(--shadow-xl);   /* Sombra XL */
box-shadow: var(--shadow-2xl);  /* Sombra 2XL */
box-shadow: var(--shadow-glow); /* Brilho */
```

### 6. Raios de Borda

```css
border-radius: var(--radius-xs);    /* 4px */
border-radius: var(--radius-sm);    /* 8px */
border-radius: var(--radius-md);    /* 12px */
border-radius: var(--radius-lg);    /* 16px */
border-radius: var(--radius-xl);    /* 20px */
border-radius: var(--radius-2xl);   /* 24px */
border-radius: var(--radius-3xl);   /* 32px */
border-radius: var(--radius-full);  /* 9999px */
```

## 🌓 Dark Mode

O sistema suporta dark mode automaticamente via `prefers-color-scheme`:

```css
@media (prefers-color-scheme: dark) {
  /* Variáveis são automaticamente invertidas */
}
```

Para forçar dark mode manualmente:

```html
<body data-theme="dark">
```

## 🎨 Componentes UI

### Button

```tsx
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="tertiary">Tertiary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="gradient">Gradient</Button>
```

Tamanhos disponíveis: `sm`, `md`, `lg`

### Card

```tsx
<Card variant="default">Default</Card>
<Card variant="stat">Estatística</Card>
<Card variant="testimonial">Depoimento</Card>
<Card variant="tier">Plano/Nível</Card>
<Card variant="activity">Atividade</Card>
<Card variant="gradient">Gradiente</Card>
<Card variant="glass">Glass Effect</Card>
```

### Section

```tsx
<Section bgVariant="primary">Primary</Section>
<Section bgVariant="secondary">Secondary</Section>
<Section bgVariant="tertiary">Tertiary</Section>
<Section bgVariant="neutral">Neutral</Section>
<Section bgVariant="gradient-hero">Hero</Section>
<Section bgVariant="gradient-brand">Brand</Section>
<Section bgVariant="dark">Dark</Section>
```

### SectionLabel

```tsx
<SectionLabel color="primary">Primary</SectionLabel>
<SectionLabel color="secondary">Secondary</SectionLabel>
<SectionLabel color="tertiary">Tertiary</SectionLabel>
<SectionLabel color="gradient">Gradient</SectionLabel>
```

## ✨ Efeitos Especiais

### Glass Effect

```tsx
<div className="glass-effect">
  Conteúdo com efeito vidro
</div>
```

### Glow Effect

```tsx
<div className="glow-effect">
  Conteúdo com brilho
</div>
```

### Card Shine

```tsx
<div className="card-shine">
  Card com efeito de brilho ao hover
</div>
```

## 🎬 Animações

```tsx
<div className="animate-fade-in-up">Fade In Up</div>
<div className="animate-slide-in-left">Slide In Left</div>
<div className="animate-slide-in-right">Slide In Right</div>
<div className="animate-scale-in">Scale In</div>
<div className="animate-shimmer">Shimmer</div>
<div className="animate-pulse-glow">Pulse Glow</div>
```

## 📐 Espaçamentos Responsivos

Todos os espaçamentos usam `clamp()` para fluidez:

```css
padding: var(--spacing-10);  /* 0.5rem - 0.625rem */
padding: var(--spacing-20);  /* 1rem - 1.25rem */
padding: var(--spacing-30);  /* 1.5rem - 1.875rem */
padding: var(--spacing-40);  /* 2rem - 2.5rem */
padding: var(--spacing-50);  /* 2.5rem - 3.125rem */
padding: var(--spacing-60);  /* 3rem - 3.75rem */
padding: var(--spacing-80);  /* 4rem - 5rem */
padding: var(--spacing-100); /* 5rem - 6.25rem */
```

## 🎯 Melhores Práticas

### 1. Sempre use variáveis semânticas
```css
/* ✅ BOM */
color: var(--text-primary);
background: var(--bg-primary);

/* ❌ EVITE */
color: var(--neutral-900);
background: #FFFFFF;
```

### 2. Use escalas de cores específicas quando necessário
```css
/* ✅ BOM - para gradientes ou efeitos especiais */
background: linear-gradient(var(--primary-500), var(--primary-700));
```

### 3. Aproveite os estados interativos
```css
/* ✅ BOM */
.button:hover {
  background: var(--state-hover);
}
```

### 4. Use transições suaves
```css
/* ✅ BOM */
transition: var(--transition-base);
transition: var(--transition-fast);
transition: var(--transition-slow);
```

## ♿ Acessibilidade

- Todas as cores foram testadas para contraste WCAG AA/AAA
- Suporte a `prefers-reduced-motion` para animações
- Focus visível em todos os elementos interativos
- Textos alternativos e labels semânticos

## 🎨 Exemplos de Uso

### Botão com gradiente e brilho
```tsx
<Button variant="gradient" className="animate-pulse-glow">
  ✨ Doe Agora
</Button>
```

### Card com efeito glass
```tsx
<Card variant="glass" className="backdrop-blur-xl">
  <h3>Título</h3>
  <p>Conteúdo com efeito vidro</p>
</Card>
```

### Seção com gradiente hero
```tsx
<Section bgVariant="gradient-hero">
  <Container>
    <h2>Título da Seção</h2>
  </Container>
</Section>
```

## 📦 Compatibilidade com Código Legado

O sistema mantém compatibilidade com variáveis antigas:

```css
/* Variáveis legadas ainda funcionam */
--color-base
--color-contrast
--color-accent
--color-accent-2
--color-accent-3
--color-accent-4
```

Mas recomendamos migrar para as novas variáveis semânticas.

## 🚀 Próximos Passos

1. Adicionar mais variantes de componentes
2. Expandir a paleta de cores semânticas
3. Criar mais animações e transições
4. Implementar tema customizável

---

**Desenvolvido com** 💙 **para o Projeto Esporte Crescer**
