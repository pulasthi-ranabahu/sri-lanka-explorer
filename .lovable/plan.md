

# Plan: Add Chat Widget Script to Website

## Summary
Add the agent chat widget SDK script to the site so it loads on every page.

## Approach
Since this is a React/Vite SPA, the cleanest way is to add the script tag directly to `index.html` before the closing `</body>` tag. This ensures the widget loads once and persists across all routes.

## Technical Details

### File: `index.html`
- Add the provided `<script>` block just before `</body>`
- The script dynamically loads the widget SDK from the R2 CDN and initializes it with the provided token
- Uses `defer` and `async` so it won't block page rendering

### No other files need to change
The widget is self-contained and will render its own floating UI element on every page automatically.

