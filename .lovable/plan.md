

# Complete Website Overhaul: Logo, Colors, and Animations

## Overview

This plan addresses four major changes:
1. Replace the current "SL" logo with the Meridian Escapes lotus logo
2. Add background imagery to the Testimonials section
3. Improve animation sections across the site (like tourslanka.com stilt fishermen section)
4. Change the yellow/gold accent color to a refined teal/blue theme

---

## 1. Official Logo Integration

### Current State
- Header shows "SL" in a circular badge with "Ceylon Voyages" text
- Footer has the same "SL" logo
- Using gold/yellow background color

### Changes

**Copy uploaded logo to project:**
- Copy `user-uploads://image-18.png` to `src/assets/logo.png`

**Header.tsx modifications:**
- Replace the circular "SL" badge with the actual lotus logo image
- Keep brand name as "Meridian Escapes" (matching the logo)
- Update tagline to "Discover Sri Lanka"
- Logo will display with proper sizing (height 40px for normal, 32px when scrolled)

**Footer.tsx modifications:**
- Replace the "SL" badge with the same logo image
- Update brand name to "Meridian Escapes"

---

## 2. Color Theme Update - Yellow to Teal

### Current Colors
- Secondary (accent): `38 92% 50%` - Warm gold/orange
- Creates a warm but somewhat dated feel

### New Teal Theme (Matching Logo)
Based on the Meridian Escapes logo's elegant teal color:

| Property | Current Value | New Value |
|----------|---------------|-----------|
| Secondary | `38 92% 50%` (gold) | `180 60% 45%` (teal) |
| Secondary foreground | `0 0% 10%` | `0 0% 100%` (white text) |

**Files to modify:**

**index.css - Update CSS variables:**
```text
--secondary: 180 60% 45%;    /* Teal */
--secondary-foreground: 0 0% 100%;  /* White text on teal */
```

This automatically updates:
- "Book Now" buttons throughout
- Navigation hover states
- Quote icons and star ratings in testimonials
- Section accent colors
- "Sri Lanka" text in hero section
- All interactive elements

---

## 3. Testimonials Section Enhancement

### Current State
- Dark navy background with subtle blur effects
- No background imagery
- Basic card layout

### Changes

**Add background image with parallax effect:**
- Use iconic Sri Lanka imagery (Sigiriya or cultural scene)
- Apply similar parallax effect as ExperienceCTA section
- Maintain dark overlay for text readability

**Enhanced styling:**
- Gradient overlay: `from-navy-950/95 via-navy-900/90 to-navy-950/95`
- Subtle parallax movement on scroll
- Refined quote icon styling with teal accent

**Working Image URL:**
```text
https://images.pexels.com/photos/10049063/pexels-photo-10049063.jpeg?auto=compress&cs=tinysrgb&w=1920
```
(Sigiriya Rock Fortress - iconic Sri Lanka scene)

---

## 4. Animation Improvements

### Current Issues
- Some animations feel basic or disconnected
- Missing the smooth parallax transitions like tourslanka.com
- ExperienceCTA needs stilt fishermen image (like reference)

### Changes

**ExperienceCTA.tsx - Update background image:**
Replace leopard with stilt fishermen image to match reference:
```text
https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=1920
```
(Stilt Fishermen at sunset - matches the reference image exactly)

**Improve animation timing across sections:**

| Component | Change |
|-----------|--------|
| ExperienceCTA | Smoother parallax, faster text animations |
| Testimonials | Add parallax background, refine carousel timing |
| WhyChooseUs | Snappier slide-in animations |
| FeaturedDestinations | Improve stagger timing |

**Animation refinements:**
- Reduce animation delays for snappier feel
- Increase viewport trigger margin for earlier activation
- Add subtle scale effects on scroll for depth
- Smoother easing curves: `[0.25, 0.46, 0.45, 0.94]`

---

## Files to Modify

| File | Changes |
|------|---------|
| `src/assets/logo.png` | CREATE - Copy uploaded logo |
| `src/index.css` | Update secondary color from gold to teal |
| `src/components/Header.tsx` | Replace logo, update brand name |
| `src/components/Footer.tsx` | Replace logo, update brand name |
| `src/components/Testimonials.tsx` | Add background image with parallax |
| `src/components/ExperienceCTA.tsx` | Update to stilt fishermen image |
| `src/components/HeroSection.tsx` | Ensure teal accent works properly |

---

## Visual Summary

### Before
- Gold/yellow accent colors
- "SL" circular badge logo
- Plain dark background on testimonials
- Leopard image in parallax section

### After
- Elegant teal accent colors (matching logo)
- Meridian Escapes lotus logo
- Sigiriya background image on testimonials with parallax
- Stilt fishermen image in parallax section (like reference)
- Refined, faster animations throughout

---

## Technical Details

### Logo Import Pattern
```typescript
import logo from "@/assets/logo.png";

<img src={logo} alt="Meridian Escapes" className="h-10" />
```

### Parallax Implementation (Testimonials)
```typescript
const { scrollYProgress } = useScroll({
  target: containerRef,
  offset: ["start end", "end start"]
});
const y = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);
```

### Teal Color System
- Primary use: Buttons, hover states, accent text
- Contrast: White text on teal backgrounds
- Harmony: Works with existing navy/blue primary colors
- Professional: More refined than bright gold

---

## Expected Result

After implementation:
- Cohesive brand identity with Meridian Escapes lotus logo
- Sophisticated teal accent color throughout
- Parallax backgrounds on both ExperienceCTA (stilt fishermen) and Testimonials (Sigiriya)
- Smoother, professional animations matching tourslanka.com reference
- All imagery authentic Sri Lanka scenes

