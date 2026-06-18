# Karan Malakar Founder Portfolio Foundation

## 1. Architecture

The portfolio is structured as a cinematic founder experience, not a resume site. Phase 1 establishes the production foundation only: app shell, theme, layout primitives, SEO, metadata, responsive rules, and animation language. Founder-specific content from the CV should enter in Phase 2 after the CV is available in the workspace and approved as the source of truth.

Core stack:

- Next.js 15 with App Router
- TypeScript in strict mode
- Tailwind CSS design tokens
- Server-first React components
- CSS-first animation for performance
- Structured SEO and metadata routes

## 2. Folder Structure

```txt
src/
  app/
    layout.tsx
    page.tsx
    not-found.tsx
    robots.ts
    sitemap.ts
  components/
    layout/
      cinematic-shell.tsx
      site-background.tsx
      site-chrome.tsx
    sections/
      foundation-stage.tsx
    seo/
      json-ld.tsx
    ui/
      container.tsx
      glass-panel.tsx
  config/
    site.ts
  lib/
    cn.ts
    fonts.ts
    seo.ts
  styles/
    globals.css
docs/
  foundation-architecture.md
```

## 3. Component Hierarchy

```txt
RootLayout
  HomePage
    JsonLd
    CinematicShell
      SiteBackground
      SiteChrome
      FoundationStage
        Container
        GlassPanel
```

Phase 2 sections should slot into `CinematicShell` beneath the foundation layer as independent section modules.

## 4. Page Structure

Current Phase 1 page:

- Global layout and metadata
- Cinematic shell
- Background atmosphere
- Navigation chrome
- Foundation status stage

Planned Phase 2 page modules:

- Opening founder film
- Origin story
- WeDrip ecosystem
- Ventures and proof
- Northeast India thesis
- Founder operating system
- Press, signal, and contact

## 5. Responsive Strategy

The system uses a max-width site container with fluid gutters, mobile-first grids, and `clamp()` typography for hero-scale text. The default composition is single-column on mobile, two-column on larger screens, and capped at a 1440px content width for premium editorial control.

Rules:

- No viewport-width font scaling beyond controlled `clamp()` ranges
- Stable component dimensions for chrome, panels, and stage elements
- Touch-friendly spacing on mobile
- Header navigation collapses to identity-first chrome before Phase 2 mobile navigation is approved

## 6. Animation Strategy

The animation language is cinematic but performance-conscious:

- CSS transforms and opacity only for ambient motion
- Fixed background atmosphere isolated from content layout
- Reduced-motion support globally
- No heavy client animation library in Phase 1
- Future Phase 2 motion should use scroll-linked reveals sparingly and keep content readable first

## 7. SEO Strategy

Phase 1 includes:

- App Router metadata API
- Canonical URL foundation
- Open Graph and Twitter metadata placeholders
- Robots route
- Sitemap route
- Person and WebSite JSON-LD
- Region and ecosystem positioning

Before launch:

- Replace placeholder domain if needed
- Add real Open Graph image
- Add CV-verified achievements and company names
- Expand structured data with sameAs links, organizations, and founder credentials
