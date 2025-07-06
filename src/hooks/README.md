# Hooks

This directory contains custom React hooks that provide reusable logic across the application.

## Purpose

Custom hooks help extract component logic into reusable functions, following the React hooks pattern. They allow us to:

- Share stateful logic between components
- Separate concerns and keep components clean
- Create testable, isolated functionality
- Follow React best practices

## Structure

```
hooks/
├── README.md                    # This file
├── useMousePosition.ts          # Hook for tracking mouse position
└── [other-hooks].ts            # Additional custom hooks
```

## Usage Example

```typescript
import { useMousePosition } from '~/hooks/useMousePosition'

const MyComponent = () => {
  const { x, y } = useMousePosition()

  return (
    <div>
      Mouse position: {x}, {y}
    </div>
  )
}
```

## Guidelines

- All hooks should start with `use` prefix
- Use TypeScript for type safety
- Include proper cleanup in useEffect when needed
- Keep hooks focused on a single responsibility
- Export hooks as named exports
