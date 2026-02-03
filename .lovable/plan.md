

# Hero Image Slideshow and Background Fix Plan

## Overview
Transform the hero section from a video background (which isn't loading) to an animated image slideshow with smooth crossfade transitions, similar to tourslanka.com. Also ensure all other section backgrounds display correctly.

---

## Current Issues

Based on the screenshot provided:
1. **Hero section shows gray/blue gradient** - The Vimeo video source is not loading, leaving only the gradient overlay visible
2. **No visual imagery in hero** - Users see blank blue instead of beautiful Sri Lanka scenery
3. **Other sections may have image loading issues** - Some Unsplash URLs may need updating for reliability

---

## Solution: Animated Image Slideshow

### Hero Section Changes (src/components/HeroSection.tsx)

**Replace video background with:**
- Array of 5-6 high-quality Sri Lanka images
- Auto-cycling every 6 seconds
- Smooth crossfade transitions (1.5s duration)
- Ken Burns effect (subtle zoom from 100% to 110%)
- Image position indicators (optional dots)

**Image Set for Hero Slideshow:**
1. Sigiriya Lion Rock - iconic fortress at golden hour
2. Nine Arch Bridge, Ella - with lush green surroundings  
3. Yala Safari - leopard or elephant in natural habitat
4. Mirissa Beach - palm trees and tropical coastline
5. Tea Plantations - misty hill country scenery
6. Galle Fort - colonial architecture with lighthouse

---

## Technical Implementation

### HeroSection.tsx Modifications

**New imports:**
```text
- Add useState, useEffect from React
- Already has AnimatePresence from framer-motion
```

**New state and logic:**
```text
- heroImages array with 5-6 image URLs
- currentImageIndex state (default 0)
- useEffect with setInterval for 6-second auto-advance
- AnimatePresence for smooth image transitions
```

**Animation specifications:**
```text
- Crossfade: opacity 0 to 1 over 1.5 seconds
- Scale: 1.0 to 1.1 over 6 seconds (Ken Burns zoom)
- Exit: opacity fade out while next image fades in
- Easing: ease-in-out for smooth transitions
```

**Structure change:**
```text
Remove:
- <video> element and <source> tag
- poster attribute

Add:
- AnimatePresence container
- motion.img with absolute positioning
- Animated key-based image swapping
```

---

## Image URLs (Reliable Sources)

### Hero Slideshow Images
Using high-quality, reliably loading Unsplash images:

| Slide | Location | Description |
|-------|----------|-------------|
| 1 | Sigiriya | Ancient rock fortress with panoramic views |
| 2 | Ella | Nine Arch Bridge with train or green hills |
| 3 | Yala | Wildlife safari scene - leopard or elephants |
| 4 | Mirissa | Tropical beach with palm trees |
| 5 | Hill Country | Tea plantation terraces |
| 6 | Galle | Fort lighthouse at sunset |

### Updated Section Images

**FeaturedDestinations.tsx:**
- Verify all 6 destination images load correctly
- Use consistent Unsplash URL format with auto parameters

**WhyChooseUs.tsx:**
- Update main image to show authentic Sri Lanka tourism scene

**PopularPackages.tsx:**
- Update all 5 package card images with relevant scenes

**TourBuilderCTA.tsx:**
- Update background image to stunning landscape

---

## Files to Modify

| File | Changes |
|------|---------|
| `src/components/HeroSection.tsx` | Replace video with animated image slideshow |
| `src/components/FeaturedDestinations.tsx` | Verify/update image URLs |
| `src/components/WhyChooseUs.tsx` | Update main feature image |
| `src/components/PopularPackages.tsx` | Update package images |
| `src/components/TourBuilderCTA.tsx` | Update background image |

---

## Animation Flow

```text
Image 1 displays (0-6s)
  ↓ [1.5s crossfade]
Image 2 displays (6-12s)
  ↓ [1.5s crossfade]
Image 3 displays (12-18s)
  ↓ [1.5s crossfade]
... continues cycling
```

### CSS/Framer Motion Variants

```text
enter: { opacity: 0, scale: 1.0 }
center: { opacity: 1, scale: 1.1, transition: { opacity: 1.5s, scale: 6s } }
exit: { opacity: 0 }
```

---

## Expected Result

After implementation:
- Hero section displays stunning Sri Lanka imagery with smooth transitions
- Each image zooms subtly for cinematic effect
- Automatic 6-second rotation keeps content fresh
- All section backgrounds load reliably
- Visual experience matches professional tourism sites like tourslanka.com

