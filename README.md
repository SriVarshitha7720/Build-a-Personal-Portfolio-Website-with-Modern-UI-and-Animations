# Personal Portfolio Website

A premium, highly interactive, and fully responsive personal portfolio website designed and developed from scratch. It features rich typography, custom glassmorphism components, parallax scrolling effects, and scroll-triggered transitions.

## Author & Project Info

- **Developer**: Srivarshitha Narla
- **Project Role**: Frontend / Full-Stack Software Developer
- **Live Deployed Site**: [srivarshitha-narla-portfolio.vercel.app](https://srivarshitha-narla-portfolio.vercel.app)
- **Source Code**: [GitHub Repository](https://github.com/Srivarshitha-Narla/personal-portfolio)

---

## Technology Stack

- **Framework**: [React 19](https://react.dev/) + [Vite](https://vite.dev/) (Scaffolded with React JS template)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) (Native CSS theme configuration)
- **Motion & Interactions**: [Framer Motion v12](https://www.framer.com/motion/) (Custom scroll timelines, stagger grids, fade reveals, and parallax components)
- **Icons**: [Lucide React](https://lucide.dev/) (Modern vector icon sets)
- **Fonts**: [Outfit](https://fonts.google.com/specimen/Outfit) (Headings) & [Inter](https://fonts.google.com/specimen/Inter) (Body text) via Google Fonts API
- **Optimization**: Pillow python scripts for asset compression (WebP conversions < 80KB)

---

## Core Features & Implementation

1. **Sticky Glassmorphic Navigation**: A blur-backdrop floating header that tracks scroll depth, manages active page highlights, and transforms into a clean slide-over drawer on mobile screens.
2. **Parallax Scrolling**: Background glowing shapes in the Hero section translate dynamically on different scroll ratios utilizing Framer Motion's `useScroll` and `useTransform` hooks.
3. **Scroll-Triggered Reveals**: Multi-card grids, text boxes, and skill progress bars animate into view with staggered entry delays when entering the viewport.
4. **Optimized Assets**: Assets are converted to highly compressed WebP format and lazy loaded when positioned below the fold to guarantee fast load times.
5. **Accessibility Standards**: Outfitted with a `@media (prefers-reduced-motion: reduce)` block in the global CSS to disable all transition effects for visitors with motion sensitivity.
6. **Descriptive Meta Tags**: Includes optimized meta description tags and document titles for search engine indexers.

---

## Setup & Local Run Instructions

### Prerequisites
- Node.js (version `18.x` or newer)
- npm (version `9.x` or newer)

### Step 1: Clone the repository
```bash
git clone https://github.com/Srivarshitha-Narla/personal-portfolio.git
cd personal-portfolio
```

### Step 2: Install dependencies
```bash
npm install
```

### Step 3: Run development server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173/` (or the address printed by Vite in your terminal).

### Step 4: Production Build
Verify output package sizes and lint checks locally:
```bash
npm run build
npm run preview
```
