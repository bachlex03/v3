# Utilities

This directory contains utility functions and helper modules that provide common functionality across the application.

## Purpose

Utility functions provide:

- Reusable helper functions
- Common operations and transformations
- Cross-cutting functionality
- Pure functions without side effects

## Structure

```
utils/
├── README.md                    # This file
├── tw-merge.ts                 # Tailwind CSS class merging utility
└── [other-utils].ts           # Additional utility functions
```

## Available Utilities

### tw-merge.ts

- **Purpose**: Merge Tailwind CSS classes intelligently
- **Features**: Handles class conflicts, conditional classes
- **Usage**: Combining dynamic CSS classes with proper precedence

## Usage Example

```typescript
import { cn } from '~/utils/tw-merge'

const Button = ({ className, variant, ...props }) => {
  return (
    <button
      className={cn(
        'px-4 py-2 rounded-md font-medium',
        variant === 'primary' && 'bg-blue-500 text-white',
        variant === 'secondary' && 'bg-gray-200 text-gray-900',
        className
      )}
      {...props}
    />
  )
}
```

## Common Utility Categories

### String Utilities

- Text formatting and manipulation
- String validation and sanitization
- URL and slug generation

### Array Utilities

- Array transformations and filtering
- Sorting and grouping operations
- Data manipulation helpers

### Object Utilities

- Object merging and cloning
- Property access and validation
- Data transformation helpers

### Date Utilities

- Date formatting and parsing
- Time calculations and comparisons
- Timezone handling

### Validation Utilities

- Input validation functions
- Form validation helpers
- Data type checking

## Guidelines

- Keep utilities pure (no side effects)
- Use TypeScript for type safety
- Write comprehensive tests for utilities
- Keep functions focused on single responsibility
- Use descriptive function names
- Export utilities as named exports
- Document complex utility functions with JSDoc
