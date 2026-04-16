# Design Brief

**Direction**: Premium asset dashboard — collectors' portfolios deserve clarity and confidence. Deep emerald primary with warm accent. Light backgrounds for data readability, dark mode tuned for evening trading. Serif headers (Fraunces) for authority, sans-body (GeneralSans) for scanning. Emerald for gains, orange for highlights, red for losses.

**Tone**: Data-driven, trustworthy, focused. Every element serves portfolio clarity — no decoration.

**Palette**:

| Token | Light OKLCH | Dark OKLCH | Purpose |
|-------|-------------|-----------|---------|
| Primary | 0.52 0.16 142 | 0.68 0.14 142 | Portfolio gains, CTAs, active states — deep emerald |
| Secondary | 0.75 0.04 240 | 0.35 0.03 240 | Neutral support, secondary UI — slate |
| Accent | 0.60 0.15 30 | 0.72 0.13 30 | Highlights, card details — burnt orange |
| Destructive | 0.55 0.22 25 | 0.65 0.19 22 | Losses, red flags — consistent red |
| Success | via chart-2 | via chart-2 | Positive trends — gold |
| Background | 0.98 0.01 0 | 0.12 0.01 0 | Main content surface |
| Muted | 0.92 0.02 0 | 0.28 0.01 0 | Secondary surfaces, footer, dividers |

**Typography**:

| Layer | Font | Size | Weight | Usage |
|-------|------|------|--------|-------|
| Display | Fraunces serif | 2xl–3xl | 600–900 | Page titles, card names, stat labels |
| Body | GeneralSans sans | sm–base | 400–600 | Content, descriptions, form labels |
| Mono | GeistMono | xs–sm | 400 | Prices, history values, codes |

**Structural Zones**:

| Zone | Background | Border | Purpose |
|------|-----------|--------|---------|
| Header | `bg-primary` text-white | None | Navigation, title — full-width elevated |
| Sidebar | `bg-sidebar` | `border-r border-sidebar-border` | Card list, search, filters — left nav |
| Main | `bg-background` | None | Charts, stats, card grid — main content |
| Footer | `bg-muted` | `border-t border-muted` | Summary info — bottom anchor |
| Cards | `bg-card` | `border border-border` | Individual holdings — 10px rounding |

**Elevation & Depth**: Cards shadow via `shadow-sm` for subtle separation. No glow or neon. Primary interactive elements (buttons) full-color, secondary (filters) outlined, tertiary (stats) typography-only.

**Spacing & Rhythm**: 1rem base grid. Header 1.5rem padding. Content sections 2rem gaps. Card internals 1rem. Consistent density across mobile and desktop.

**Component Patterns**: 
- Buttons: full-width on mobile, inline on desktop; color by hierarchy (primary fill, secondary outline, muted text)
- Cards: grid-based, equal height, price/gain side-by-side, mini-chart or badge in corner
- Stats: large serif numbers, small-cap labels below, delta % in emerald (↑) or red (↓)
- Lists: table or grid; search/filter as sticky top; no pagination (infinite scroll or load-more)

**Motion**: `transition-smooth` (all 0.3s) on hover/focus for buttons, cards, filters. No entrance animations. Hover states: shadow increase, color saturation boost.

**Constraint**: Mobile-first responsive. Sidebar collapses to hamburger on `sm`. Charts redraw for viewport. Data always scannable (no horizontal scroll for prices/values).

**Signature Detail**: Portfolio gain/loss displayed as percentage badge with + or − prefix, tinted emerald or red. Appears prominently in header stats and sidebar summary.
