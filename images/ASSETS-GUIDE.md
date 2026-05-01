# Guia de Assets - Projeto Esporte Crescer

## Imagens Necessárias

### 1. Hero Background (`hero-bg.jpg`)
- **Dimensões**: 1920x1080px (mínimo)
- **Formato**: JPG otimizado ou WebP
- **Conteúdo**: Crianças praticando esporte, ambiente alegre
- **Peso máximo**: 300KB
- **Orientação**: Paisagem

### 2. Sobre o Projeto (`sobre-projeto.jpg`)
- **Dimensões**: 800x600px
- **Formato**: JPG ou WebP
- **Conteúdo**: Grupo de crianças, professores ou atividade em andamento
- **Peso máximo**: 150KB
- **Orientação**: Paisagem (4:3)

### 3. Open Graph Image (`og-image.jpg`)
- **Dimensões**: 1200x630px (exato)
- **Formato**: JPG
- **Conteúdo**: Logo + slogan + imagem representativa
- **Peso máximo**: 200KB
- **Texto**: Legível e de alto contraste

### 4. Logos de Parceiros
- **Formato**: PNG transparente ou SVG
- **Dimensões**: Máximo 200px de largura
- **Nomenclatura**: `parceiro-nome.png`

### 5. Favicon
- **Arquivo**: `favicon.ico`
- **Dimensões**: 32x32px, 16x16px
- **Localização**: `/public/`

## Otimização de Imagens

### Ferramentas Recomendadas
- **Squoosh** (https://squoosh.app/) - Compressão online
- **TinyPNG** (https://tinypng.com/) - Compressão PNG/JPG
- **SVGOMG** (https://jakearchibald.github.io/svgomg/) - Otimizar SVGs

### Processo
1. Redimensionar para tamanho adequado
2. Comprimir com qualidade 80-85%
3. Converter para WebP quando possível
4. Manter versão JPG como fallback

## Estrutura de Pastas

```
public/
└── images/
    ├── hero-bg.jpg
    ├── sobre-projeto.jpg
    ├── og-image.jpg
    └── parceiros/
        ├── parceiro-1.png
        ├── parceiro-2.png
        └── parceiro-3.png
```

## Checklist de Qualidade

- [ ] Todas as imagens estão otimizadas (<300KB cada)
- [ ] Imagens em formato moderno (WebP) com fallback JPG
- [ ] Alt text descritivo em todas as imagens
- [ ] Aspect ratio correto para evitar layout shift
- [ ] Imagens reais (não stock photos genéricas)
- [ ] Rostos de pessoas com autorização de uso de imagem
- [ ] Marca d'água ou logo da ONG quando apropriado

## Direitos e Licenças

**IMPORTANTE**: Usar apenas:
- Fotos próprias da ONG
- Fotos com autorização escrita dos responsáveis
- Imagens com licença comercial apropriada
- Material criado especificamente para o projeto

**EVITAR**:
- Stock photos sem licença
- Imagens de terceiros sem autorização
- Fotos de menores sem consentimento dos responsáveis
