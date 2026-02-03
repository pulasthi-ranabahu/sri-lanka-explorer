

# Hero Section & Destinations Fix Plan

## Issues Identified

Based on the screenshots provided:

1. **Bluish filter too strong** - The navy gradient overlay (`from-navy-900/70 via-navy-800/60 to-navy-950/80`) makes images look too blue/dark
2. **Images not showing in Featured Destinations** - Sigiriya, Ella, Kandy, and Galle cards show gray backgrounds (Unsplash URLs not loading)
3. **Transition speed too slow** - Current 6-second interval with 1.5s crossfade is sluggish
4. **Need more hero images** - Currently 6 images, could add 2-3 more for variety
5. **No scroll-triggered slide animations** - Missing the parallax/slide-in effects like tourslanka.com

---

## Changes Overview

### 1. HeroSection.tsx - Remove Blue Filter & Speed Up

**Gradient Overlay Fix:**
- Change from heavy navy overlay to subtle dark gradient
- Use `from-black/40 via-black/20 to-black/50` instead of navy tones
- This will show true image colors without blue tint

**Speed Improvements:**
- Reduce interval from 6000ms to 4000ms (4 seconds per image)
- Reduce crossfade duration from 1.5s to 0.8s
- Reduce Ken Burns scale duration from 6s to 4s

**Add More Images:**
- Add 3 additional high-quality Sri Lanka images
- Total: 9 images for more variety
- Include: Polonnaruwa, Anuradhapura, Trincomalee, Nuwara Eliya

### 2. FeaturedDestinations.tsx - Fix Broken Images

**Replace All Image URLs with Reliable Sources:**

| Destination | New Image |
|-------------|-----------|
| Sigiriya | Pexels or different Unsplash URL that works |
| Ella | Nine Arch Bridge clear image |
| Yala | Leopard safari wildlife |
| Mirissa | Tropical beach with palm trees |
| Kandy | Temple of the Tooth exterior |
| Galle | Fort lighthouse (new image) |

**Add Scroll Slide Animation:**
- Use `whileInView` with slide-in variants
- Cards slide in from left/right when scrolling
- Staggered animation for professional effect

### 3. Add Scroll-Triggered Slide Effects (Like tourslanka.com)

**New Animation Variants:**
- `slideInLeft`: Elements slide in from left on scroll
- `slideInRight`: Elements slide in from right on scroll
- `slideInUp`: Elements slide up with fade

**Apply to Sections:**
- Featured Destinations: Cards alternate slide left/right
- Why Choose Us: Stats slide in from sides
- Popular Packages: Cards slide up with stagger
- Testimonials: Slide in from right

---

## Technical Implementation

### File: src/components/HeroSection.tsx

**Changes:**
1. Modify gradient overlay class (line 78):
   - From: `bg-gradient-to-b from-navy-900/70 via-navy-800/60 to-navy-950/80`
   - To: `bg-gradient-to-b from-black/30 via-transparent to-black/50`

2. Speed up interval (line 40):
   - From: `6000`
   - To: `4000`

3. Speed up animations (lines 63-74):
   - Opacity duration: `1.5` to `0.8`
   - Scale duration: `6` to `4`
   - Exit opacity: `1.5` to `0.8`

4. Add 3 more images to heroImages array:
   - Polonnaruwa ancient city
   - Nuwara Eliya tea plantations
   - Trincomalee beach

### File: src/components/FeaturedDestinations.tsx

**Changes:**
1. Replace all 6 image URLs with working alternatives:
   - Use Pexels CDN or verified Unsplash photos
   - Ensure high quality (1920px width)

2. Add slide animation variants:
   - Create `slideInLeftVariants` and `slideInRightVariants`
   - Apply alternating animations based on index

3. Update itemVariants for scroll effect:
   - Add `x` transform for horizontal slide
   - Increase duration slightly for smoothness

### Image URL Replacements

**Sigiriya:**
```text
https://images.pexels.com/photos/4254555/pexels-photo-4254555.jpeg?auto=compress&cs=tinysrgb&w=1920
```

**Ella (Nine Arch Bridge):**
```text
https://images.pexels.com/photos/4254559/pexels-photo-4254559.jpeg?auto=compress&cs=tinysrgb&w=1920
```

**Yala (Leopard):**
```text
https://images.pexels.com/photos/3755013/pexels-photo-3755013.jpeg?auto=compress&cs=tinysrgb&w=1920
```

**Mirissa (Beach):**
```text
https://images.pexels.com/photos/1430677/pexels-photo-1430677.jpeg?auto=compress&cs=tinysrgb&w=1920
```

**Kandy (Temple):**
```text
https://images.pexels.com/photos/4254555/pexels-photo-4254555.jpeg?auto=compress&cs=tinysrgb&w=1920
```

**Galle (Fort/Lighthouse):**
```text
https://images.pexels.com/photos/4254559/pexels-photo-4254559.jpeg?auto=compress&cs=tinysrgb&w=1920
```

---

## Animation Implementation Details

### Slide-In Animation Variants

```text
slideInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
}

slideInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
}
```

### Apply Based on Index

```text
Even index cards (0, 2, 4): slideInLeft
Odd index cards (1, 3, 5): slideInRight
```

---

## Files to Modify

| File | Changes |
|------|---------|
| `src/components/HeroSection.tsx` | Remove blue filter, speed up transitions, add images |
| `src/components/FeaturedDestinations.tsx` | Fix image URLs, add slide animations |
| `src/components/WhyChooseUs.tsx` | Add slide-in scroll effects |
| `src/components/PopularPackages.tsx` | Add slide-in scroll effects |

---

## Expected Result

After implementation:
- Hero images display with natural colors (no blue tint)
- Faster, smoother image transitions (4 seconds, 0.8s crossfade)
- All destination cards show proper images
- Galle shows new lighthouse/fort image
- Sections slide in smoothly when scrolling (like tourslanka.com)
- Professional, polished animation feel throughout

