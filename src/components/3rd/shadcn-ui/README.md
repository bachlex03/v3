# Shadcn/UI Components

This directory contains components from the Shadcn/UI library, providing high-quality, accessible UI components.

## Purpose

Shadcn/UI components offer:

- Pre-built, accessible components
- Consistent design system
- Tailwind CSS integration
- Copy-paste component architecture
- Customizable and themeable

## Structure

```
Shadcn/
├── README.md                    # This file
├── index.ts                    # Component exports
└── [shadcn-components]/        # Individual Shadcn components
```

## About Shadcn/UI

Shadcn/UI is a collection of reusable components built using Radix UI and Tailwind CSS. Components are:

- **Copy-paste friendly**: Not a traditional library, components are copied into your project
- **Accessible**: Built on Radix UI primitives for accessibility
- **Customizable**: Full control over styling and behavior
- **Modern**: Uses latest React patterns and TypeScript

## Usage Example

```typescript
import { Button, Card, Input } from '~/components/Shadcn'

const MyForm = () => {
  return (
    <Card>
      <Input placeholder="Enter your name" />
      <Button>Submit</Button>
    </Card>
  )
}
```

## Installation

Components are added individually using the Shadcn CLI:

```bash
npx shadcn-ui@latest add button
npx shadcn-ui@latest add card
npx shadcn-ui@latest add input
```

## Guidelines

- Use Shadcn components for common UI patterns
- Customize components by modifying the copied code
- Maintain consistent theming across components
- Follow Shadcn's naming conventions
- Keep components in their original structure
