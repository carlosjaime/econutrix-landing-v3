# EcoNutrix Landing Page

Landing page de **EcoNutrix** construida con **Astro** para presentar el producto, beneficios, acceso anticipado y conversión por email.

## Resumen

- Framework: Astro
- Estilos: Tailwind CSS v4 + CSS custom
- Tipografía: Manrope
- Objetivo: landing de alto rendimiento, SEO base y diseño responsive (desktop/tablet/mobile)
- Idioma principal: Español

## Stack Técnico

- `astro`
- `tailwindcss` + `@tailwindcss/vite`
- `@fontsource/manrope`
- HTML semántico + CSS moderno

## Requisitos

- Node.js `>=22.12.0`
- pnpm (gestionado vía Corepack)

## Instalación

```bash
corepack pnpm install
```

## Scripts Disponibles

```bash
# Desarrollo local
corepack pnpm dev

# Build de producción
corepack pnpm build

# Previsualizar build
corepack pnpm preview
```

## Estructura del Proyecto

```text
.
├── public/
│   ├── favicon_io/
│   └── images/
├── src/
│   ├── assets/
│   │   └── images/
│   ├── components/
│   │   └── HeroSection.astro
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── global.css
├── astro.config.mjs
└── package.json
```

## Secciones Implementadas

1. Hero + Header superpuesto (desktop/mobile con hamburger)
2. Pain points / problema
3. Cómo funciona (3 pasos)
4. Beneficios/features
5. Contexto y tags
6. Pricing / acceso anticipado
7. Captura de email: “¿Prefieres probarlo primero?”
8. Pre-footer CTA
9. Footer

## SEO y Rendimiento

- Meta tags SEO (title, description, canonical, OG, Twitter)
- JSON-LD (`WebSite`)
- Imagen hero optimizada con `astro:assets` (`avif`/`webp`)
- Favicon completo (`favicon_io`) con `manifest`

## Favicons

Los íconos están en:

`public/favicon_io/`

Configurados en el `<head>` de:

`src/pages/index.astro`

## Flujo Recomendado

```bash
# 1) correr dev
corepack pnpm dev

# 2) validar build de producción
corepack pnpm build

# 3) revisar preview
corepack pnpm preview
```

## Convenciones

- Mantener componentes UI en `src/components`
- Mantener estilos globales en `src/styles/global.css`
- Usar rutas públicas para assets estáticos en `public/`
- Priorizar accesibilidad y diseño responsive en cada ajuste visual
