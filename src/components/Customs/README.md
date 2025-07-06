# Custom Components

This directory contains custom-built UI components that are specific to this portfolio project.

## Purpose

Custom components provide:

- Project-specific UI elements
- Unique design implementations
- Custom interactions and animations
- Reusable components with portfolio-specific styling

## Structure

```
Customs/
├── README.md                    # This file
├── index.ts                    # Component exports
├── Button/                     # Custom button component
├── GlowCard/                   # Card component with glow effect
└── [other-customs]/           # Additional custom components
```

## Available Components

### Button

- **Purpose**: Custom button with portfolio-specific styling
- **Features**: Consistent styling, hover effects, accessibility

### GlowCard

- **Purpose**: Card component with subtle glow effect on hover
- **Features**: Hover animations, gradient backgrounds, interactive effects
- **Usage**: For highlighting important content sections

## Usage Example

```typescript
import { Button, GlowCard } from '~/components/Customs'

const MyPage = () => {
  return (
    <div>
      <GlowCard>
        <h2>Featured Project</h2>
        <p>Project description...</p>
        <Button onClick={handleClick}>View Project</Button>
      </GlowCard>
    </div>
  )
}
```

## Guidelines

- Focus on portfolio-specific design requirements
- Maintain consistent styling with the overall theme
- Include hover and interactive states
- Use TypeScript for all props and interfaces
- Follow accessibility best practices
- Export components as named exports
