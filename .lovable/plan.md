

# Color Theme and Image Update Plan

## Overview
Transform the current teal/gold theme to a modern blue, white, and black color scheme inspired by tourslanka.com, while updating all images with authentic, high-quality Sri Lanka tourism photography.

---

## Color Scheme Changes

### New Color Palette (Blue, White, Black)

**Primary Colors:**
- Primary Blue: `#1E40AF` (Deep royal blue - main brand color)
- Primary Dark: `#1E3A5F` (Navy blue for headers/footer)
- Accent Blue: `#3B82F6` (Bright blue for CTAs and highlights)

**Neutrals:**
- White: `#FFFFFF` (Clean backgrounds)
- Off-White: `#F8FAFC` (Subtle section backgrounds)
- Black: `#0F172A` (Text and dark elements)
- Gray: `#64748B` (Muted text)

**Accent:**
- Gold/Orange: `#F59E0B` (CTA buttons, highlights - keeping for warmth)

---

## Files to Update

### 1. src/index.css
Update CSS custom properties:
- Change `--primary` from teal to deep blue (`210 80% 40%`)
- Change `--secondary` to accent gold/orange for CTAs
- Update `--background` to pure white
- Update `--foreground` to near-black
- Update gradients to use blue tones
- Update shadows to use blue-tinted neutrals

### 2. tailwind.config.ts
- Replace `teal` color scale with `blue` scale
- Keep `gold` for accent highlights
- Add new navy/slate color utilities if needed

### 3. src/components/Header.tsx
- Update logo styling to use new blue brand colors
- Change "Ceylon Voyages" branding colors
- Update mobile menu background colors

### 4. src/components/HeroSection.tsx
- Change gradient overlay from teal to deep blue
- Update "gold-400" text accents
- Update floating stats card styling
- Replace hero video poster with new imagery

### 5. src/components/FeaturedDestinations.tsx
Update all 6 destination images with accurate Sri Lanka photos:
- Sigiriya: Iconic lion rock fortress aerial/front view
- Ella: Nine Arch Bridge with train or tea plantations
- Yala: Leopard or elephant safari scene
- Mirissa: Beach with palm trees or whale watching
- Kandy: Temple of the Tooth or Kandy Lake
- Galle: Galle Fort lighthouse or Dutch colonial streets

Update gradient overlays to blue tones.

### 6. src/components/WhyChooseUs.tsx
- Update stat icon backgrounds to blue
- Change section background pattern color
- Update floating card accent colors
- Replace main image with authentic guide/tour scene

### 7. src/components/PopularPackages.tsx
Update package images:
- Cultural Triangle: Sigiriya or ancient ruins
- Wildlife Safari: Yala leopard or elephant gathering
- Beach & Wellness: South coast beach or Ayurveda
- Hill Country: Ella train or tea estate
- Complete Sri Lanka: Aerial landscape view

Update card styling with blue accents.

### 8. src/components/Testimonials.tsx
- Change section background from teal to deep blue/navy
- Update decorative blur elements
- Adjust text contrast for blue background

### 9. src/components/TourBuilderCTA.tsx
- Update gradient overlay to blue tones
- Change background image to stunning landscape
- Update "gold-400" accents to new color scheme

### 10. src/components/Footer.tsx
- Change `bg-teal-900` to navy/dark blue
- Update social button hover states
- Maintain good contrast for accessibility

---

## New Image URLs

### Hero Section
```text
Poster: Sigiriya at sunrise or aerial Sri Lanka coastline
```

### Destinations (6 cards)
```text
1. Sigiriya - https://images.unsplash.com/photo-1580181257892-ce5e3c5a2e0c (lion rock)
2. Ella - https://images.unsplash.com/photo-1566654183375-3dc8c7bf4a18 (Nine Arch Bridge)
3. Yala - https://images.unsplash.com/photo-1573412840729-b4ed54f49397 (leopard)
4. Mirissa - https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d (beach palm)
5. Kandy - https://images.unsplash.com/photo-1625222260311-ae620c4b3f78 (temple)
6. Galle - https://images.unsplash.com/photo-1586016413664-864c0dd76f53 (fort)
```

### Packages (5 cards)
```text
1. Cultural Triangle - Ancient temple/Sigiriya
2. Wildlife Safari - Elephants at Minneriya
3. Beach Retreat - Unawatuna/Mirissa beach
4. Hill Country - Tea plantation landscape
5. Complete Sri Lanka - Panoramic island view
```

### Why Choose Us
```text
Main image: Friendly local guide with tourists
```

### Tour Builder CTA
```text
Background: Stunning tea plantation hills or Ella gap view
```

---

## Technical Implementation

### CSS Variable Updates (index.css)
```text
:root {
  --primary: 217 91% 60%;           /* Bright blue */
  --primary-foreground: 0 0% 100%;
  --secondary: 38 92% 50%;          /* Warm orange/gold for CTAs */
  --background: 0 0% 100%;          /* Pure white */
  --foreground: 222 47% 11%;        /* Near black */
  --muted: 210 40% 96%;             /* Light gray-blue */
  --accent: 217 91% 60%;            /* Blue accent */
}
```

### Tailwind Color Scale Updates
```text
blue: {
  50-900: Standard blue scale for UI elements
}
navy: {
  Custom darker blue for footer/headers
}
```

### Component-Specific Changes
- Replace all `teal-*` classes with `blue-*` or `slate-*`
- Replace `gold-400` with `amber-400` or `orange-400`
- Update gradient classes throughout
- Ensure proper contrast ratios (WCAG AA)

---

## Summary

This update will transform the website to match the clean, professional aesthetic of tourslanka.com while maintaining the modern interactive features already built:

1. **Color**: Teal/gold transforms to blue/white/black
2. **Images**: Generic stock photos replaced with authentic Sri Lanka imagery
3. **Feel**: Clean, trustworthy, and travel-industry appropriate
4. **Consistency**: All components updated for cohesive look

