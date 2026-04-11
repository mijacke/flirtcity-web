# Flirtcity Web

Landing page for the **Flirtcity** dating app — a modern, animated single-page website built with Next.js 16.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **UI:** React 19, Framer Motion
- **Styling:** Tailwind CSS 4

## Project Structure

```
app/
├── [lang]/            # i18n dynamic route (default: en)
│   ├── layout.tsx     # Root layout with fonts & metadata
│   ├── page.tsx       # Landing page
│   ├── error.tsx      # Error boundary
│   ├── not-found.tsx  # 404 page
│   └── loading.tsx    # Loading state
├── components/
│   ├── layout/        # Header, Footer, Container
│   ├── sections/      # Hero, HowItWorks, WhyChoose, Security, UserStories, DownloadCTA
│   ├── icons/         # SVG icon components
│   ├── ui/            # Reusable UI primitives
│   └── animations/    # Motion wrappers
├── i18n/              # i18n configuration
├── locales/           # Translation files (en.json)
├── globals.css        # Global styles & design tokens
├── robots.ts          # SEO robots config
└── sitemap.ts         # SEO sitemap generator
middleware.ts          # i18n locale redirect middleware
```

## Getting Started

### Prerequisites

- Node.js ≥ 18
- npm

### Install & Run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command         | Description              |
| --------------- | ------------------------ |
| `npm run dev`   | Start dev server         |
| `npm run build` | Production build         |
| `npm run start` | Serve production build   |
| `npm run lint`  | Run ESLint               |

## Internationalization

The app uses path-based i18n routing via middleware (`/en/`, `/sk/`, etc.). Translations are stored in `app/locales/*.json`. Currently supported locale: **English**.

## License

Private — all rights reserved.
