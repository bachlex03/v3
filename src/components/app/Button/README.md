# Button Component

Button component sử dụng `class-variance-authority` (CVA) để quản lý variants và styling.

## Cách sử dụng

```tsx
import { Button } from '~/components/app'

// Button cơ bản
<Button>Click me</Button>

// Button với variants
<Button variant="primary">Primary Button</Button>
<Button variant="secondary">Secondary Button</Button>
<Button variant="outline">Outline Button</Button>
<Button variant="ghost">Ghost Button</Button>
<Button variant="destructive">Destructive Button</Button>

// Button với sizes
<Button size="sm">Small Button</Button>
<Button size="md">Medium Button</Button>
<Button size="lg">Large Button</Button>
<Button size="icon">🔍</Button>

// Button với loading state
<Button isLoading>Loading...</Button>

// Button disabled
<Button disabled>Disabled Button</Button>

// Button với custom className
<Button className="custom-class">Custom Button</Button>
```

## Variants

- `primary`: Button chính với background primary
- `secondary`: Button phụ với background secondary
- `outline`: Button với border outline
- `ghost`: Button trong suốt, chỉ hiển thị khi hover
- `destructive`: Button cho các hành động nguy hiểm

## Sizes

- `sm`: Small (h-9 px-3 text-sm)
- `md`: Medium (h-10 px-4 py-2) - default
- `lg`: Large (h-11 px-8)
- `icon`: Icon button (h-10 w-10)

## Props

```tsx
type Props = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    isLoading?: boolean
  }
```

- Tất cả props của HTML button element
- `variant`: Button variant
- `size`: Button size
- `isLoading`: Hiển thị loading spinner
- `className`: Custom CSS classes
