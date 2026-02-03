
# Plan: Use Uploaded Sigiriya Image

## Summary
Replace the current Sigiriya image across the website with the uploaded image showing a panoramic view of Sigiriya Rock Fortress.

## Changes Required

### 1. Copy Uploaded Image to Project
- Copy `user-uploads://image-50.png` to `src/assets/sigiriya.png`
- This allows proper bundling and optimization through Vite

### 2. Update FeaturedDestinations.tsx
- Import the Sigiriya image from `@/assets/sigiriya.png`
- Update the Sigiriya destination (id: 1) to use the imported image

### 3. Update PopularPackages.tsx  
- Import the Sigiriya image from `@/assets/sigiriya.png`
- Update the Cultural Triangle Discovery package (id: 1) to use the imported image (since it features Sigiriya)

### 4. Update Destinations.tsx Page
- Import the Sigiriya image from `@/assets/sigiriya.png`
- Update the Sigiriya destination to use the imported image

## Files to Modify
| File | Change |
|------|--------|
| `src/assets/sigiriya.png` | Copy uploaded image here |
| `src/components/FeaturedDestinations.tsx` | Import and use new Sigiriya image |
| `src/components/PopularPackages.tsx` | Import and use new Sigiriya image |
| `src/pages/Destinations.tsx` | Import and use new Sigiriya image |

## Technical Details
- Using ES6 import for the image ensures proper bundling
- Import statement: `import sigiriyaImage from "@/assets/sigiriya.png"`
- Replace URL strings with the imported `sigiriyaImage` variable
- No changes to layout, animations, or any other existing functionality
