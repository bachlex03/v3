# Layouts

This directory contains layout components that provide consistent structure and styling across different pages.

## Purpose

Layout components wrap page content and provide:

- Consistent page structure
- Common UI elements (headers, footers, navigation)
- Responsive design patterns
- Theme and styling context
- Special effects (like mouse gradients)

## Structure

```
Layouts/
├── README.md                    # This file
├── index.tsx                   # Layout exports
├── DefaultLayout/              # Default layout for most pages
├── ExperienceLayout/           # Specialized layout for experience page
├── MouseGradientLayout/              # Mouse gradient effect component
└── [other-layouts]/           # Additional layout components
```

## Usage Example

```typescript
// In routes.ts
import { DefaultLayout } from '~/components/layouts'

const routes = [
  {
    path: '/',
    component: HomePage,
    layout: DefaultLayout,
  },
]
```

## Guidelines

- Each layout should accept `children` prop
- Use consistent prop interfaces (extend ILayoutProps)
- Keep layouts focused on structure, not content
- Make layouts responsive by default
- Use alias imports (`~/`) for all imports
