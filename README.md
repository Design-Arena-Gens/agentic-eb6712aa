# Nexari Labs — AI Automation & IT Solutions Agency

Enterprise-grade marketing site built with Next.js 16 (App Router), Tailwind CSS, Three.js, and Framer Motion. The experience is tuned for premium, futuristic storytelling with a dark/light theme system, rich motion, and an interactive 3D hero.

## ✨ Highlights
- Four fully responsive pages: Home, Services, About, Contact
- Advanced Three.js hero animation rendered with `@react-three/fiber`
- Global dark/light theming powered by `next-themes`
- Modular sections & shared layout primitives (e.g., `Container`, `Button`, `ThemeToggle`)
- Style tokens defined in `app/src/styles/tokens.ts` and consumed via utility helpers
- Framer Motion micro-interactions across navigation, cards, and content reveals
- Production build verified with `npm run build`

## 🗂 Structure
```
app/
├── public/               # Static assets
├── src/
│   ├── app/              # App Router pages & layouts
│   ├── components/       # UI, layout, sections, and 3D systems
│   ├── lib/              # Utilities & navigation data
│   └── styles/tokens.ts  # Design tokens (spacing, color, typography)
└── package.json          # Scripts & dependencies
```

## 🚀 Local Development
```bash
cd app
npm install
npm run dev
```
Navigate to `http://localhost:3000`.

## 🧱 Production Build
```bash
npm run lint
npm run build
```
Both commands must succeed before deployment. The project targets Vercel; a production deployment command is provided below.

## 📦 Deployment
After verifying the production build, deploy with Vercel (requires `VERCEL_TOKEN`):
```bash
vercel deploy --prod --yes --token $VERCEL_TOKEN --name agentic-eb6712aa
```

## 🧭 Key Components
- `app/src/components/layout/navbar.tsx` — Motion-rich navigation with theme toggle and mobile menu
- `app/src/components/three/hero-canvas.tsx` — Custom Three.js scene for the hero animation
- `app/src/components/sections/*` — Reusable section blocks for the landing experience
- `app/src/components/services/services-page.tsx` — Services detail view with accelerators & governance badges
- `app/src/components/contact/contact-page.tsx` — Interactive contact form with global office details

## 🎨 Styling System
- Tailwind CSS v4 (using the new `@import "tailwindcss"` pipeline)
- Custom gradients, glassmorphism, and grid overlays defined in `app/src/app/globals.css`
- Tokens exported from `app/src/styles/tokens.ts` feed layout primitives such as `Container`

## 📄 License
MIT — feel free to adapt and extend.
