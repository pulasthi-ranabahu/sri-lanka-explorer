

# Plan: Update Logo to Transparent Background and Set as Favicon

## Summary
Replace the current logo (which has a blue background box) with a transparent version matching the style in image-53.png -- just the white lotus icon and "Meridian Escapes" text with no background. Also use this logo as the site favicon.

## Changes

### 1. Replace the Logo Asset
- Copy `user-uploads://image-53.png` and crop/use it as the new logo, OR use `user-uploads://image-52.png` as reference to understand the current issue
- Since the second image shows the desired transparent-style logo, we will crop just the logo portion from image-53.png and save it as the new `src/assets/logo.png`
- Note: The uploaded image-53.png is a full screenshot -- we may need to use it as-is and rely on CSS to handle transparency, or ask the user to provide a standalone transparent PNG of just the logo

### 2. CSS Fix for Logo Background Blending
- In `src/components/Header.tsx`, ensure the logo `<img>` tag does not have any background styling that creates the blue box effect
- If the current `logo.png` file itself contains the blue background baked into the image, the only true fix is replacing the image file with a transparent PNG

### 3. Set Logo as Favicon
- Copy the logo image to `public/favicon.png`
- Update `index.html` to reference the new favicon: `<link rel="icon" href="/favicon.png" type="image/png">`

## Important Note
The blue background appears to be baked into the current `logo.png` file itself. To get a truly transparent logo, you would need to provide a PNG version of just the lotus + text with a transparent background. If you have one, please upload it. Otherwise, I can attempt to use the cropped version from image-53.png, though it may include some of the website background.

## Files to Modify
| File | Change |
|------|--------|
| `src/assets/logo.png` | Replace with transparent logo |
| `public/favicon.png` | Copy logo for favicon use |
| `index.html` | Update favicon reference |
| `src/components/Header.tsx` | Minor cleanup if needed |

