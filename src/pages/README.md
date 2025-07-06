# Pages

This directory contains all page-level components for the portfolio website.

## Purpose

Pages represent the main views/routes of the application. Each page component corresponds to a specific route and contains the main content and layout for that section of the website.

## Structure

```
pages/
├── README.md                    # This file
├── index.tsx                   # Page exports
├── Home/                       # Home page component
├── Experience/                 # Experience page component
├── Contact/                    # Contact page component
└── [other-pages]/             # Additional page components
```

## Page Organization

Each page follows this structure:

- **Folder per page**: Each page has its own directory
- **index.tsx**: Main page component
- **Components**: Page-specific components (if needed)
- **Types**: Page-specific TypeScript types (if needed)

## Usage Example

```typescript
// In routes.ts
import HomePage from '~/pages/Home'
import ExperiencePage from '~/pages/Experience'

const routes = [
  { path: '/', component: HomePage },
  { path: '/experience', component: ExperiencePage },
]
```

## Guidelines

- Use PascalCase for page component names
- Each page should be in its own directory
- Export as default export from index.tsx
- Keep pages focused on layout and composition
- Move reusable logic to hooks or utilities
- Use appropriate layouts for each page
