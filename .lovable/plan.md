

# Plan: Remove Logo Background and Set as Favicon

## Summary
Use AI image generation to remove the blue background from the current logo, creating a transparent PNG. Then update the logo asset and set it as the favicon. No layout, color, font, or content changes.

## Steps

### 1. Generate Transparent Logo via AI
- Use the Lovable AI image generation model (`google/gemini-2.5-flash-image`) via an edge function to remove the blue background from the current `logo.png`
- Prompt: "Remove the blue rectangular background from this logo. Keep only the white lotus icon and 'Meridian Escapes' text with a fully transparent background. Preserve crisp edges."
- Save the result as the new `src/assets/logo.png`

**Fallback approach**: If AI background removal doesn't produce clean results, I'll create the logo as an inline SVG component instead -- drawing the lotus and text in white with no background. This guarantees a perfect transparent result.

### 2. Replace Logo Asset
- Overwrite `src/assets/logo.png` with the new transparent version
- No import changes needed -- both `Header.tsx` and `Footer.tsx` already import from `@/assets/logo.png`

### 3. Set Favicon
- Copy the transparent logo (or a simplified lotus-only version) to `public/favicon.png`
- Update `index.html` to add: `<link rel="icon" href="/favicon.png" type="image/png">`

## Files to Modify
| File | Change |
|------|--------|
| `src/assets/logo.png` | Replace with transparent version |
| `public/favicon.png` | New file -- logo for browser tab |
| `index.html` | Add favicon link tag |

## What Stays the Same
- Header layout, logo size (`h-10`/`h-14`), and positioning
- Footer logo usage
- All colors, fonts, spacing, sections, and content
- "Discover Sri Lanka" subtitle text next to logo
