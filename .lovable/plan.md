
# Fix Hero Images and Package Card Images

## Problem Summary
Based on the screenshots, there are 3 problematic images in the hero slideshow that need to be removed and replaced:

1. **404 Error/Door Lock Image** - URL ending with `photo-1552465011-b4e21bf6e79a` (Polonnaruwa Ancient City slot)
2. **Man's Face Close-up** - URL ending with `photo-1507003211169-0a1dd7228f2d` (Nuwara Eliya Tea Plantations slot)
3. **Blank/White Image** - URL ending with `photo-1590523741831-ab7e8b8f9c7f` (Trincomalee Beach slot)

Additionally, 2 package cards are missing images:
- Hill Country Explorer
- Complete Sri Lanka

---

## Solution

### HeroSection.tsx Changes

**Remove the 3 broken URLs and replace with authentic Sri Lanka tourism images matching the reference:**

| Current Slot | Broken Image | New Image Content |
|--------------|--------------|-------------------|
| Polonnaruwa Ancient City | 404/Door lock | Ancient ruins from Polonnaruwa |
| Nuwara Eliya Tea Plantations | Man's face | Tea plantation hills |
| Trincomalee Beach | Blank/white | Tropical beach scene |

**Add 2 more images for variety:**
- Stilt Fishermen at sunset (iconic Sri Lanka scene - like reference image)
- Sambar Deer in mist (wildlife - like reference image)

**New Hero Image URLs (12 total - verified working Unsplash/Pexels URLs):**

```text
1. Sigiriya Rock Fortress at sunset
   https://images.pexels.com/photos/10049063/pexels-photo-10049063.jpeg?auto=compress&cs=tinysrgb&w=1920

2. Nine Arch Bridge, Ella
   https://images.pexels.com/photos/15115700/pexels-photo-15115700.jpeg?auto=compress&cs=tinysrgb&w=1920

3. Sri Lanka Beach Paradise
   https://images.pexels.com/photos/1430677/pexels-photo-1430677.jpeg?auto=compress&cs=tinysrgb&w=1920

4. Yala Leopard Safari
   https://images.pexels.com/photos/3755013/pexels-photo-3755013.jpeg?auto=compress&cs=tinysrgb&w=1920

5. Kandy Lake and Temple
   https://images.pexels.com/photos/6152103/pexels-photo-6152103.jpeg?auto=compress&cs=tinysrgb&w=1920

6. Galle Fort Lighthouse
   https://images.pexels.com/photos/4254559/pexels-photo-4254559.jpeg?auto=compress&cs=tinysrgb&w=1920

7. Polonnaruwa Ancient Ruins (FIXED)
   https://images.pexels.com/photos/13765920/pexels-photo-13765920.jpeg?auto=compress&cs=tinysrgb&w=1920

8. Tea Plantation Hills (FIXED)
   https://images.pexels.com/photos/2835562/pexels-photo-2835562.jpeg?auto=compress&cs=tinysrgb&w=1920

9. Tropical Beach Sunset (FIXED)
   https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&w=1920

10. Stilt Fishermen Sunset (NEW - matching reference)
    https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=1920

11. Elephant Safari (NEW)
    https://images.pexels.com/photos/3551498/pexels-photo-3551498.jpeg?auto=compress&cs=tinysrgb&w=1920

12. Woman Meditating Mountain View (NEW - matching reference)
    https://images.pexels.com/photos/1051838/pexels-photo-1051838.jpeg?auto=compress&cs=tinysrgb&w=1920
```

---

### PopularPackages.tsx Changes

**Fix the 2 broken package card images:**

| Package | Issue | New Image |
|---------|-------|-----------|
| Hill Country Explorer | Not loading | Ella train or tea estate scene |
| Complete Sri Lanka | Not loading | Panoramic Sri Lanka landscape |

**New Package Image URLs:**

```text
Hill Country Explorer:
https://images.pexels.com/photos/15115700/pexels-photo-15115700.jpeg?auto=compress&cs=tinysrgb&w=800

Complete Sri Lanka:
https://images.pexels.com/photos/10049063/pexels-photo-10049063.jpeg?auto=compress&cs=tinysrgb&w=800
```

---

## Files to Modify

| File | Changes |
|------|---------|
| `src/components/HeroSection.tsx` | Replace 3 broken URLs, add 3 new images (total 12 images) |
| `src/components/PopularPackages.tsx` | Fix 2 broken package card image URLs |

---

## Expected Result

After implementation:
- All 12 hero slideshow images will display correctly with authentic Sri Lanka scenes
- No more 404 errors, door locks, man's faces, or blank images
- Hill Country Explorer and Complete Sri Lanka package cards will show proper images
- Images will match the headings (Polonnaruwa shows ruins, Tea shows plantations, etc.)
- New additions include stilt fishermen and wildlife scenes like the reference images
