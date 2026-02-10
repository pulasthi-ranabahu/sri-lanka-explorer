

# Plan: Replace Logo with Inline SVG Component (Guaranteed Transparency)

## Problem
The AI-generated "transparent" PNG still has a visible gray/white background box. PNG background removal is unreliable.

## Solution
Create the logo as an **inline SVG React component** instead of a raster image. This guarantees a perfectly transparent background with crisp edges at any size.

The SVG will reproduce the lotus icon and "Meridian Escapes" text in white, matching the current design exactly. No background rectangle -- just the shapes themselves.

## Steps

### 1. Create `src/components/Logo.tsx`
- Build an SVG component drawing the lotus flower icon and "Meridian Escapes" text
- Accept `className` prop for sizing (`h-10`, `h-14`, etc.)
- Default fill color: white (works on both the dark header and dark footer backgrounds)

### 2. Update `src/components/Header.tsx`
- Replace `import logo from "@/assets/logo.png"` with `import Logo from "@/components/Logo"`
- Replace `<img src={logo} ... />` with `<Logo className={...} />`
- Keep exact same sizing classes (`h-10` / `h-14`) and positioning

### 3. Update `src/components/Footer.tsx`
- Same swap: replace `<img src={logo} ... />` with `<Logo className="h-14 mb-2" />`

### 4. Favicon
- Keep the current `public/favicon.png` (the AI-generated version works fine at 16x16/32x32 favicon size where the background box isn't noticeable)
- Or generate a simpler lotus-only favicon SVG

## What Stays the Same
- All layout, sizes, positions, colors, fonts, spacing, sections, content
- "Discover Sri Lanka" subtitle text
- Logo dimensions and placement in header and footer

## Files to Create/Modify
| File | Change |
|------|--------|
| `src/components/Logo.tsx` | New -- inline SVG logo component |
| `src/components/Header.tsx` | Swap `<img>` for `<Logo>` component |
| `src/components/Footer.tsx` | Swap `<img>` for `<Logo>` component |

