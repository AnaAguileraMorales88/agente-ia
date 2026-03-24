# 🤖 AI Agents Landing Page

> Página web de información sobre **Agentes IA para el sector reformas** — capta más clientes, responde 24/7 y cierra más obras sin levantar el teléfono.

---

## 📋 Descripción

Landing page profesional desarrollada para presentar los servicios de **agentes de inteligencia artificial especializados en el sector de reformas**. El objetivo es convertir visitas en demos agendadas, mostrando de forma clara y persuasiva cómo la IA puede automatizar la captación, filtrado y seguimiento de clientes.

---

## 🚀 Tech Stack

| Tecnología | Versión | Uso |
|---|---|---|
| [React](https://react.dev/) | ^19 | Framework UI |
| [Vite](https://vitejs.dev/) | ^8 | Bundler y dev server |
| [Tailwind CSS](https://tailwindcss.com/) | v4 | Estilos utility-first |
| [@tailwindcss/vite](https://tailwindcss.com/docs/installation/using-vite) | latest | Plugin oficial Tailwind v4 + Vite |

---

## 🎨 Sistema de Diseño

### Paleta de colores

| Color | Hex | Uso |
|---|---|---|
| 🔵 Azul corporativo | `#1F3A5F` | Títulos, navbar, footer, elementos de marca |
| ⚪ Blanco | `#FFFFFF` | Fondo principal |
| ⚫ Gris elegante | `#2E2E2E` | Texto de párrafos |
| 🟢 Verde rentable | `#2E7D5B` | Botones CTA, detalles destacados |
| 🩶 Gris claro | `#f5f7fa` | Fondos de secciones alternadas |

### Tipografía

| Fuente | Uso |
|---|---|
| [Poppins](https://fonts.google.com/specimen/Poppins) (600, 700) | Títulos `h1` → `h6` |
| [Inter](https://fonts.google.com/specimen/Inter) (400, 500, 600) | Cuerpo de texto, botones, navegación |

---

## ♿ Accesibilidad

Este proyecto implementa **100% de estándares WCAG** como requisito no negociable:

- ✅ HTML semántico puro — sin `<div>` innecesarios (`<header>`, `<main>`, `<nav>`, `<section>`, `<article>`, `<figure>`, `<footer>`, `<ul>`, `<ol>`, `<li>`)
- ✅ Todos los elementos interactivos tienen `aria-label` descriptivo
- ✅ Imágenes con `alt` text contextual y significativo
- ✅ Iconos decorativos con `aria-hidden="true"`
- ✅ Landmarks ARIA correctamente definidos (`aria-labelledby` por sección)
- ✅ Focus visible en todos los elementos interactivos (`focus-visible:outline`)
- ✅ Menú móvil con `aria-expanded` y `aria-controls`
- ✅ Contraste de color validado para texto y fondos

---

## 📱 Responsive Design

Diseño adaptado para los tres breakpoints principales:

| Dispositivo | Breakpoint | Comportamiento |
|---|---|---|
| Móvil | `< 768px` | Layout en columna, menú hamburguesa |
| Tablet | `md: 768px` | Layout en columna o dos columnas según sección |
| Escritorio | `lg: 1024px+` | Layout completo, navegación horizontal |

---

## 🗂 Estructura del proyecto

```
ai-agents-landing/
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── assets/                  # Imágenes y recursos estáticos
│   │   ├── logo.png
│   │   ├── logo-white.png
│   │   ├── hero.png
│   │   └── ...
│   ├── components/
│   │   ├── Header.jsx           # Navbar sticky con menú hamburguesa
│   │   ├── Hero.jsx             # Sección principal con CTA
│   │   ├── Problem.jsx          # El problema que tiene el cliente
│   │   ├── Scenario.jsx         # Imagina este escenario
│   │   ├── WhatWeOffer.jsx      # Catálogo de Agentes IA
│   │   ├── ValueProposition.jsx # Propuesta única de valor
│   │   ├── WhyUs.jsx            # Por qué confiar en nosotros
│   │   ├── UseCases.jsx         # Casos de uso reales
│   │   ├── Faq.jsx              # Preguntas frecuentes
│   │   ├── Cta.jsx              # Llamada a la acción final
│   │   └── Footer.jsx           # Footer con redes sociales
│   ├── App.jsx                  # Composición principal
│   ├── index.css                # Estilos globales + variables Tailwind
│   └── main.jsx                 # Entry point
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

---

## 📦 Instalación y uso

### Prerrequisitos

- Node.js `>= 18`
- npm `>= 9`

### Clonar el repositorio

```bash
git clone https://github.com/AnaAguileraMorales88/ai-agents-landing.git
cd ai-agents-landing
```

### Instalar dependencias

```bash
npm install
```

### Iniciar servidor de desarrollo

```bash
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

### Build para producción

```bash
npm run build
```

### Preview del build

```bash
npm run preview
```

---

## 🧩 Secciones de la página

| # | Componente | Descripción | ID de anclaje |
|---|---|---|---|
| 1 | `Header` | Navbar sticky con logo y links de navegación | — |
| 2 | `Hero` | Título principal, descripción y CTA principal | `#inicio` |
| 3 | `WhatWeOffer` | Catálogo de 4 agentes IA disponibles | `#que-ofrecemos` |
| 4 | `Problem` | Problema que tiene el cliente potencial | `#problema` |
| 5 | `Scenario` | Escenario ideal con la solución implementada | `#escenario` |
| 6 | `ValueProposition` | 4 pilares de la propuesta de valor | `#servicios` |
| 7 | `WhyUs` | Razones para confiar en el equipo | `#sobre-nosotros` |
| 8 | `UseCases` | Casos de uso reales en formato timeline | `#casos` |
| 9 | `Faq` | Objeciones frecuentes resueltas | `#dudas` |
| 10 | `Cta` | CTA final con imagen y botón de contacto | `#contacto` |
| 11 | `Footer` | Logo, frase, redes sociales y copyright | — |

---

## 📧 Contacto

¿Quieres saber cómo un Agente IA puede transformar tu negocio de reformas?

📩 [ia.atencion.digital@gmail.com](mailto:ia.atencion.digital@gmail.com)

---

## Autora

Ana Aguilera Morales 
