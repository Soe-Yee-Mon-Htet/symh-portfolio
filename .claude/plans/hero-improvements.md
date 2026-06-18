# Hero Section Improvements Plan

## Current State Analysis

**What works:**
- Dark theme (`surface` background) consistent with the rest of the portfolio
- Gradient text on the name using `gradient-text` utility
- Clear CTA buttons with hover states
- Animated bounce scroll indicator
- Responsive text sizing

**What's weak:**
- Background lacks depth — only two simple blur circles
- No entrance animations — feels static on page load
- No greeting or visual hook above the fold
- Typography hierarchy could be stronger
- Missing a visual anchor (avatar, code snippet, or terminal)
- No social proof or status indicator (e.g., "Available for work")
- CTA primary button uses ExternalLink icon for an in-page anchor — should use ArrowRight

---

## Planned Improvements

### 1. Entrance Animations (staggered fade-in-up)
- Each element (greeting → heading → title → subtitle → CTAs → scroll) fades in with increasing delay
- Use custom CSS keyframes + Tailwind animation utilities
- Keeps the section feeling polished and professional

### 2. Background Visual Upgrade
- Add a subtle grid/dot pattern overlay (SVG pattern or CSS `radial-gradient`)
- Keep the two existing blur orbs but reposition for better balance
- Add a subtle animated gradient shift on the orbs

### 3. Add Greeting Eyebrow
- Small text above the main heading: "👋 Hello, I'm"
- Provides a warm, personal entrance hook

### 4. Status / Availability Badge
- Small indicator showing "🟢 Available for work" below the subtitle
- Adds credibility and a modern freelance/portfolio convention

### 5. CTA Button Improvements
- Replace `ExternalLink` icon on primary CTA with `ArrowRight` (since it's an in-page anchor, not external)
- Refine button shadows and hover transitions
- Add a subtle glow effect on hover for the primary button

### 6. Scroll Indicator Upgrade
- Replace bare `ArrowDown` with a styled "Scroll" label + animated mouse indicator (a small pill shape with a moving dot)
- More refined than a simple bouncing icon

### 7. Typography Refinements
- Tighten `max-w` on subtitle for better line length
- Adjust spacing between elements
- Ensure proper font weight contrast between heading/title/subtitle

### 8. Data Updates
- Add `greeting`, `statusText` fields to `heroData`
- Update Hero component to consume the new fields

---

## Files to Change

| File | Change |
|------|--------|
| `src/components/Hero.jsx` | Major — rewrite the section JSX with new structure, animations, elements |
| `src/index.css` | Minor — add custom animation keyframes and the grid pattern utility |
| `src/data/portfolioData.js` | Minor — add `greeting` and `statusText` fields to `heroData` |

## What Stays the Same
- Color palette (primary/accent/surface)
- `gradient-text` utility
- Core layout: centered, full-screen, text-focused
- Two-CTA structure
- Scroll-to-next-section behavior
