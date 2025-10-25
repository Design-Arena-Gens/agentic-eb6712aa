# Nexari Labs Web Experience

Premium marketing website for an AI Automation & IT Solutions agency. Built on Next.js 16 with Tailwind CSS, Framer Motion, and Three.js.

## Available Scripts
- `npm run dev` — start local development
- `npm run lint` — run ESLint checks
- `npm run build` — compile production bundle (must pass before deploy)
- `npm run start` — serve the built output

## Project Notes
- Dark/light theming controlled by `ThemeProvider` (`next-themes`) and CSS variables in `src/app/globals.css`
- Design tokens live in `src/styles/tokens.ts`, surfaced via layout helpers (e.g., `Container`)
- Hero animation powered by `src/components/three/hero-canvas.tsx`
- All content sections reside in `src/components/sections`
- Pages (`/`, `/services`, `/about`, `/contact`) defined in `src/app`

Deploy to Vercel with:
```bash
vercel deploy --prod --yes --token $VERCEL_TOKEN --name agentic-eb6712aa
```
