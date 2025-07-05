# Assets Directory

This directory contains all static assets for the Portfolio v3 project.

## Structure

```
src/assets/
├── fonts/           # Font files
│   ├── Calibre/     # Primary font family
│   ├── Inter/       # Secondary font family
│   └── SFMono/      # Monospace font family
├── images/          # Image assets
│   └── react.svg    # React logo (example)
├── index.ts         # Main assets export
├── images/          # Image exports
│   └── index.ts
└── README.md        # This file
```

## Font Usage

### Available Font Families

1. **Calibre** - Primary font family

   - Weights: 300, 400, 500, 600, 700
   - Styles: Normal, Italic
   - Usage: Main headings, body text

2. **Inter** - Secondary font family

   - Full weight range with variable fonts
   - Usage: Alternative to Calibre, UI components

3. **SF Mono** - Monospace font family
   - Weights: 400, 500, 600
   - Styles: Normal, Italic
   - Usage: Code blocks, technical text

### CSS Variables

```css
/* Font families */
--font-sans:
  'Calibre', system-ui, sans-serif --font-inter: 'Inter', system-ui, sans-serif --font-mono: 'SF Mono',
  monospace /* Font weights */ --font-weight-light: 300 --font-weight-normal: 400 --font-weight-medium: 500
    --font-weight-semibold: 600 --font-weight-bold: 700;
```

## Image Usage

### Importing Images

```typescript
import { reactLogo } from '@/assets'
// or
import { reactLogo } from '@/assets/images'
```

### Adding New Images

1. Place image files in appropriate subdirectories
2. Export them in `src/assets/images/index.ts`
3. Re-export in `src/assets/index.ts`

## Best Practices

1. **Performance**: Use appropriate image formats (WebP, AVIF when possible)
2. **Accessibility**: Provide alt text for all images
3. **Optimization**: Compress images before adding to repository
4. **Naming**: Use descriptive, kebab-case filenames
5. **Organization**: Group related assets in subdirectories

## Font Loading Strategy

- Uses `font-display: swap` for better performance
- Fallback fonts provided for each font family
- Fonts are loaded in main.tsx before other styles
