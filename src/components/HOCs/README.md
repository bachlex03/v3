# Higher-Order Components (HOCs)

This directory contains Higher-Order Components that provide reusable logic and functionality to other components.

## Purpose

HOCs enable:

- Code reuse across components
- Cross-cutting concerns (authentication, logging, etc.)
- Component composition and enhancement
- Separation of concerns

## Structure

```
HOCs/
├── README.md                   # This file
├── WithAuth.ts                 # HOC exports
└── hoc-components.ts           # Individual HOC implementations
```

## What are HOCs?

Higher-Order Components are functions that take a component and return a new component with additional functionality. They follow the pattern:

```typescript
const EnhancedComponent = withSomeFeature(OriginalComponent)
```

## Usage Example

```typescript
// Example HOC
import { withAuth } from '~/components/HOCs'

const ProtectedPage = withAuth(MyPage)

// Or with hooks (modern alternative)
import { useAuth } from '~/hooks/useAuth'

const MyPage = () => {
  const { isAuthenticated } = useAuth()

  if (!isAuthenticated) {
    return <LoginPrompt />
  }

  return <PageContent />
}
```

## Common HOC Patterns

- **withAuth**: Authentication wrapper
- **withLoading**: Loading state management
- **withErrorBoundary**: Error handling
- **withTheme**: Theme injection
- **withAnalytics**: Analytics tracking

## Guidelines

- Use HOCs sparingly - prefer custom hooks when possible
- Name HOCs with `with` prefix (e.g., `withAuth`)
- Keep HOCs focused on a single responsibility
- Use TypeScript for proper typing
- Consider custom hooks as a modern alternative
- Document HOC behavior and requirements
