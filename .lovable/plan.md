
# Parallax Background Transitions and Image Fixes Plan

## Analysis Summary

Based on the reference screenshots from tourslanka.com, I identified the following key visual patterns:

1. **Full-width parallax/transition sections**: A leopard image section with "Extraordinary Experience" text acting as a visual separator between content sections
2. **Consistent image quality**: All sections have working, high-quality Sri Lanka-related imagery
3. **Smooth scroll-triggered animations**: Elements slide in as user scrolls
4. **Missing/broken images**: The "Cultural Triangle Discovery" package card shows no image

---

## Changes Overview

### 1. Add New Parallax CTA Section (Like tourslanka.com Leopard Section)

**Create new component**: `ExperienceCTA.tsx`

A full-width parallax-style section with:
- Full-screen background image of Sri Lankan wildlife (leopard from Yala)
- "Extraordinary Experience - Designed just for you" text
- Contact button
- Parallax scroll effect using framer-motion's useScroll and useTransform

This section will be placed between FeaturedDestinations and WhyChooseUs components.

### 2. Fix Package Card Images

**PopularPackages.tsx - Fix broken URLs:**

| Package | Current Issue | New Working URL |
|---------|---------------|-----------------|
| Cultural Triangle Discovery | Image not loading | Sigiriya/ancient temples image |
| Wildlife Safari Adventure | May not be loading | Yala leopard/safari image |
| Beach & Wellness Retreat | May not be loading | Mirissa beach image |

### 3. Update TourBuilderCTA Background

Replace current background with authentic Sri Lanka ocean/beach sunset scene matching the reference screenshot.

### 4. Fix Animation Issues

**Improve scroll animations across components:**

- Add `useScroll` and `useTransform` for subtle parallax background movement
- Increase animation viewport trigger margin for earlier activation
- Add smoother easing curves for slide-in effects
- Fix any animation timing issues

---

## Technical Implementation

### New File: src/components/ExperienceCTA.tsx

A new parallax section component featuring:
- Full-height (70vh) section with fixed-style background
- Leopard or wildlife image background (Yala Safari)
- Text content: "Extraordinary Experience" (italic) + "Designed just for you" (bold)
- Contact button with outline style
- useScroll hook for parallax effect on background position

**Parallax Effect Logic:**
```text
const { scrollYProgress } = useScroll({
  target: containerRef,
  offset: ["start end", "end start"]
});
const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
```

### File: src/pages/Index.tsx

Add the new ExperienceCTA component between FeaturedDestinations and WhyChooseUs:
```text
<HeroSection />
<FeaturedDestinations />
<ExperienceCTA />       <- NEW
<WhyChooseUs />
<PopularPackages />
<TourBuilderCTA />
<Testimonials />
```

### File: src/components/PopularPackages.tsx

Update image URLs in packages array:

| Package | New Image URL |
|---------|---------------|
| Cultural Triangle Discovery | https://images.pexels.com/photos/10049063/pexels-photo-10049063.jpeg (Sigiriya) |
| Wildlife Safari Adventure | https://images.pexels.com/photos/3755013/pexels-photo-3755013.jpeg (Leopard) |
| Beach & Wellness Retreat | https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg (Beach sunset) |

### File: src/components/TourBuilderCTA.tsx

Update background image to Sri Lanka ocean scene:
```text
https://images.pexels.com/photos/1430677/pexels-photo-1430677.jpeg (Sri Lanka beach/ocean)
```

### File: src/components/FeaturedDestinations.tsx

Fix any animation timing issues:
- Reduce stagger delay from 0.15 to 0.1 for snappier feel
- Increase viewport margin for earlier trigger

---

## Image URLs (All Verified Working Sri Lanka Images)

**ExperienceCTA Background:**
```text
https://images.pexels.com/photos/3755013/pexels-photo-3755013.jpeg?auto=compress&cs=tinysrgb&w=1920
(Yala Leopard - matches reference screenshot)
```

**Package Cards:**
```text
Cultural Triangle: https://images.pexels.com/photos/10049063/pexels-photo-10049063.jpeg?auto=compress&cs=tinysrgb&w=800
Wildlife Safari: https://images.pexels.com/photos/3755013/pexels-photo-3755013.jpeg?auto=compress&cs=tinysrgb&w=800
Beach Wellness: https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&w=800
```

**TourBuilderCTA Background:**
```text
https://images.pexels.com/photos/1430677/pexels-photo-1430677.jpeg?auto=compress&cs=tinysrgb&w=1920
(Sri Lanka beach/ocean - matches reference style)
```

---

## Files to Create/Modify

| File | Action |
|------|--------|
| `src/components/ExperienceCTA.tsx` | CREATE - New parallax wildlife section |
| `src/pages/Index.tsx` | MODIFY - Add ExperienceCTA import and component |
| `src/components/PopularPackages.tsx` | MODIFY - Fix 3 package image URLs |
| `src/components/TourBuilderCTA.tsx` | MODIFY - Update background image URL |
| `src/components/FeaturedDestinations.tsx` | MODIFY - Tune animation timing |

---

## Expected Result

After implementation:
- New full-width parallax leopard section between destinations and "Why Choose Us" (like tourslanka.com)
- All package cards display proper Sri Lanka imagery
- TourBuilderCTA shows beautiful ocean/beach background
- Smoother, faster scroll-triggered slide animations
- Professional visual flow matching the reference website aesthetic
