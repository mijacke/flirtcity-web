# Flirtcity Web

Landing page for **Flirtcity** — an LGBTQ+ dating app. A modern, animated single-page website with glassmorphism UI, gradient effects, and Framer Motion animations.

## Tech Stack

| Layer     | Technology                              |
| --------- | --------------------------------------- |
| Framework | Next.js 16 (App Router, Server Components) |
| Language  | TypeScript 5                            |
| UI        | React 19, Framer Motion 12             |
| Styling   | Tailwind CSS 4 (PostCSS plugin)         |
| Fonts     | Outfit (primary), Montserrat (secondary) — via `next/font/google` |
| SEO       | Dynamic metadata, `robots.ts`, `sitemap.ts` |
| i18n      | Path-based routing via middleware (`/en/`, …) |

## Project Structure

```
flirtcity-web/
├── app/
│   ├── [lang]/                     # i18n dynamic route segment
│   │   ├── layout.tsx              # Root layout (fonts, metadata, HTML shell)
│   │   ├── page.tsx                # Landing page (assembles all sections)
│   │   ├── error.tsx               # Error boundary
│   │   ├── not-found.tsx           # 404 page
│   │   └── loading.tsx             # Loading skeleton
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx          # Navigation bar with mobile menu (dialog)
│   │   │   ├── Footer.tsx          # Footer with links and socials
│   │   │   └── Container.tsx       # Reusable width-constrained wrapper
│   │   ├── sections/
│   │   │   ├── Hero.tsx            # Hero section with phone mockups & match cards
│   │   │   ├── HowItWorks.tsx      # 4-step onboarding flow
│   │   │   ├── WhyChoose.tsx       # Feature highlights grid
│   │   │   ├── UserStories.tsx     # Testimonials carousel
│   │   │   ├── Security.tsx        # Privacy & safety section
│   │   │   └── DownloadCTA.tsx     # App store download call-to-action
│   │   ├── ui/
│   │   │   ├── AppMockup.tsx       # Phone device frame component
│   │   │   ├── GradientText.tsx    # Animated pearl gradient text
│   │   │   ├── SectionHeading.tsx  # Section title with eyebrow label
│   │   │   └── StoreButton.tsx     # App Store / Google Play button
│   │   ├── icons/
│   │   │   ├── SocialIcon.tsx      # Social media icon (Instagram, TikTok, etc.)
│   │   │   └── UserIcon.tsx        # User avatar placeholder icon
│   │   └── animations/
│   │       └── FadeIn.tsx          # Scroll-triggered fade-in wrapper (Framer Motion)
│   ├── i18n/
│   │   └── config.ts              # Supported locales & default language
│   ├── locales/
│   │   ├── en.json                # English translations
│   │   └── getDictionary.ts       # Server-side dictionary loader
│   ├── globals.css                # Design tokens, keyframes, utility classes
│   ├── favicon.ico
│   ├── robots.ts                  # SEO robots.txt generator
│   └── sitemap.ts                 # SEO sitemap.xml generator
├── public/
│   └── images/
│       └── design/                # Static assets organized per section (46 files)
│           ├── header/            # Logo
│           ├── hero/              # Phone mockups, portraits, prisms, store badges
│           ├── how-it-works/      # Step illustrations (SVG)
│           ├── why-choose-flirtcity/ # Feature card visuals (SVG)
│           ├── user-stories/      # User avatars (PNG) & star icon
│           ├── security/          # Shield icons, phone mockup, verification UI
│           ├── download-cta/      # Store badges & logo variants
│           └── footer/            # Footer logo
├── middleware.ts                  # i18n locale detection & redirect
├── next.config.ts                 # Next.js configuration
├── tsconfig.json                  # TypeScript configuration
├── postcss.config.mjs             # PostCSS — Tailwind CSS v4 plugin
├── package.json
└── .gitignore
```

## Getting Started

### Prerequisites

- Node.js ≥ 18
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — redirects to `/en/` automatically.

### Production Build

```bash
npm run build
npm run start
```

## Available Scripts

| Command         | Description                     |
| --------------- | ------------------------------- |
| `npm run dev`   | Start development server        |
| `npm run build` | Create optimized production build |
| `npm run start` | Serve production build           |
| `npm run lint`  | Run ESLint                       |

## Internationalization

Path-based i18n routing via Next.js middleware:

- URL without locale prefix → auto-redirect to `/en/`
- Translations stored in `app/locales/*.json`
- Currently supported: **English** (`en`)

To add a new locale:

1. Add the locale code to `app/i18n/config.ts`
2. Create `app/locales/{locale}.json` with translated strings
3. Register the import in `app/locales/getDictionary.ts`

## Design System

Defined in `app/globals.css` using Tailwind CSS v4 `@theme` directive:

- **Colors** — dark purple backgrounds, pearl gradient accents (pink → cyan)
- **Typography** — Outfit (headings/body), Montserrat (UI elements)
- **Surfaces** — glassmorphism cards with blur, soft borders, and inner highlights
- **Animations** — `float`, `drift`, `shimmer`, `pulseGlow`, `bob` (all respect `prefers-reduced-motion`)
- **Utilities** — `section-shell`, `glass-panel`, `pearl-text`, `surface-card`, `eyebrow`

## License

Private — all rights reserved.
