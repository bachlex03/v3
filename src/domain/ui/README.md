# UI Domain

This directory contains UI-related domain logic, interfaces, and types that define the structure and contracts for user interface components.

## Purpose

The UI domain layer provides:

- Type definitions for UI components
- Interface contracts for component props
- UI-specific business logic
- Separation of concerns between UI and business logic

## Structure

```
ui/
├── README.md                    # This file
├── interfaces/                 # TypeScript interfaces for UI components
│   ├── ILayoutProps.ts         # Layout component interfaces
│   └── [other-interfaces].ts  # Additional UI interfaces
└── [other-ui-domain]/         # Additional UI domain logic
```

## Domain-Driven Design

This follows Domain-Driven Design (DDD) principles by:

- **Separating UI concerns**: UI-specific types and interfaces
- **Clear boundaries**: UI domain is separate from business domain
- **Type safety**: Strong typing for UI component contracts
- **Consistency**: Standardized interfaces across UI components

## Usage Example

```typescript
// Using UI domain interfaces
import type { ILayoutProps } from '~/domain/ui/interfaces/ILayoutProps'

// Component follows UI domain contract
interface MyLayoutProps extends ILayoutProps {
  theme?: 'light' | 'dark'
}

export const MyLayout: FC<MyLayoutProps> = ({ children, theme }) => {
  return (
    <div className={`layout ${theme}`}>
      {children}
    </div>
  )
}
```

## Guidelines

- Keep UI domain separate from business domain
- Use interfaces for component contracts
- Follow consistent naming conventions
- Export types and interfaces as named exports
- Document complex domain concepts
