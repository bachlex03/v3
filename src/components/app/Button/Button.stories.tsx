import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import Button, { buttonVariants } from './index'
import { FiDownload, FiArrowRight, FiPlus, FiHeart } from 'react-icons/fi'

// Sample icons for demonstration
const SampleIcon = () => (
  <svg className='h-4 w-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 6v6m0 0v6m0-6h6m-6 0H6' />
  </svg>
)

const ArrowIcon = () => (
  <svg className='h-4 w-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 7l5 5m0 0l-5 5m5-5H6' />
  </svg>
)

const meta: Meta<typeof Button> = {
  title: 'Components/App/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A versatile button component with multiple variants, sizes, and states.

## Features
- Multiple variants (primary, secondary)
- Different sizes (sm, md, lg, icon)
- Loading states with spinner
- Icon support (before/after)
- Disabled states
- Hover and active animations
- Full accessibility support
- **Smart spacing**: Automatically removes margins for icon-only buttons

## Usage
\`\`\`tsx
import { Button, buttonVariants } from '~/components/app/Button'
import { FiDownload } from 'react-icons/fi'

// Button with text and icon
<Button 
  icon={<FiDownload />}
  iconPosition="after"
>
  Download CV
</Button>

// Icon-only button (no margins needed)
<Button 
  icon={<FiPlus />}
  className="p-3"
>
</Button>
\`\`\`

## Smart Spacing
The component automatically detects icon-only buttons and removes unnecessary margins:
- **With text**: Icons get proper spacing (mr-2 for before, ml-2 for after)
- **Icon only**: No margins applied, perfect for icon-only buttons
        `,
      },
    },
  },
  argTypes: {
    children: {
      control: 'text',
      description: 'Button content',
    },
    variants: {
      control: 'select',
      options: [
        buttonVariants({ variant: 'primary', size: 'sm' }),
        buttonVariants({ variant: 'primary', size: 'md' }),
        buttonVariants({ variant: 'primary', size: 'lg' }),
        buttonVariants({ variant: 'primary', size: 'icon' }),
      ],
      description: 'Button variant and size combination',
    },
    isLoading: {
      control: 'boolean',
      description: 'Show loading spinner',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable button interaction',
    },
    icon: {
      control: 'select',
      options: ['none', 'download', 'arrow', 'plus', 'heart'],
      description: 'Icon to display',
      mapping: {
        none: undefined,
        download: <FiDownload className='h-4 w-4' />,
        arrow: <FiArrowRight className='h-4 w-4' />,
        plus: <FiPlus className='h-4 w-4' />,
        heart: <FiHeart className='h-4 w-4' />,
      },
    },
    iconPosition: {
      control: 'radio',
      options: ['before', 'after'],
      description: 'Icon position relative to text',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
    onClick: {
      action: 'clicked',
      description: 'Click event handler',
    },
  },
  args: {
    children: 'Button Text',
    variants: buttonVariants({ variant: 'primary', size: 'md' }),
    isLoading: false,
    disabled: false,
    icon: 'none',
    iconPosition: 'before',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

// Base button story
export const Default: Story = {
  args: {
    children: 'Default Button',
  },
}

// Variants
export const Primary: Story = {
  args: {
    children: 'Primary Button',
    variants: buttonVariants({ variant: 'primary', size: 'md' }),
  },
}

// Sizes
export const Small: Story = {
  args: {
    children: 'Small Button',
    variants: buttonVariants({ variant: 'primary', size: 'sm' }),
  },
}

export const Medium: Story = {
  args: {
    children: 'Medium Button',
    variants: buttonVariants({ variant: 'primary', size: 'md' }),
  },
}

export const Large: Story = {
  args: {
    children: 'Large Button',
    variants: buttonVariants({ variant: 'primary', size: 'lg' }),
  },
}

export const IconOnly: Story = {
  args: {
    children: '',
    variants: buttonVariants({ variant: 'primary', size: 'icon' }),
    icon: <FiPlus />,
    className: 'p-3',
  },
}

// States
export const Loading: Story = {
  args: {
    children: 'Loading Button',
    isLoading: true,
  },
}

export const LoadingWithIcon: Story = {
  args: {
    children: 'Loading with Icon',
    isLoading: true,
    icon: <FiDownload className='h-4 w-4' />,
    iconPosition: 'before',
  },
}

export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    disabled: true,
  },
}

export const LoadingAndDisabled: Story = {
  args: {
    children: 'Loading & Disabled',
    isLoading: true,
    disabled: true,
  },
}

// Icon positions
export const IconBefore: Story = {
  args: {
    children: 'Icon Before',
    icon: <FiDownload />,
    iconPosition: 'before',
  },
}

export const IconAfter: Story = {
  args: {
    children: 'Icon After',
    icon: <FiArrowRight />,
    iconPosition: 'after',
  },
}

// Real-world examples
export const DownloadButton: Story = {
  args: {
    children: 'Download CV',
    icon: <FiDownload />,
    iconPosition: 'after',
    className: 'mb-20',
  },
}

export const SubmitButton: Story = {
  args: {
    children: 'Submit Form',
    icon: <FiArrowRight />,
    iconPosition: 'after',
  },
}

export const AddButton: Story = {
  args: {
    children: 'Add Item',
    icon: <FiPlus />,
    iconPosition: 'before',
  },
}

// Smart spacing showcase
export const SmartSpacing: Story = {
  render: () => (
    <div className='space-y-6'>
      <div className='space-y-4'>
        <h3 className='text-lg font-semibold'>Smart Spacing Demo</h3>
        <p className='text-sm text-gray-600'>
          The Button component automatically detects icon-only buttons and removes unnecessary margins.
        </p>
      </div>

      <div className='grid grid-cols-2 gap-8'>
        <div className='space-y-3'>
          <h4 className='text-sm font-medium'>With Text (Auto margins)</h4>
          <div className='space-y-2'>
            <Button icon={<FiDownload />} iconPosition='before'>
              Download File
            </Button>
            <Button icon={<FiArrowRight />} iconPosition='after'>
              Continue
            </Button>
            <Button icon={<FiPlus />} iconPosition='before'>
              Add New Item
            </Button>
          </div>
        </div>

        <div className='space-y-3'>
          <h4 className='text-sm font-medium'>Icon Only (No margins)</h4>
          <div className='space-y-2'>
            <Button icon={<FiDownload />} className='p-3'></Button>
            <Button icon={<FiArrowRight />} className='p-3'></Button>
            <Button icon={<FiPlus />} className='p-3'></Button>
          </div>
        </div>
      </div>

      <div className='text-center text-xs text-gray-500'>
        <p>Left: Icons get automatic spacing when text is present</p>
        <p>Right: No margins applied for icon-only buttons</p>
      </div>
    </div>
  ),
}

// Interactive examples
export const Interactive: Story = {
  render: () => {
    const [count, setCount] = useState(0)
    const [isLoading, setIsLoading] = useState(false)

    const handleClick = async () => {
      setIsLoading(true)
      setCount((prev) => prev + 1)
      // Simulate async operation
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setIsLoading(false)
    }

    return (
      <div className='space-y-4'>
        <div className='text-center'>
          <p className='mb-2 text-lg font-semibold'>Click Count: {count}</p>
          <Button onClick={handleClick} isLoading={isLoading} disabled={isLoading}>
            {isLoading ? 'Processing...' : 'Click Me!'}
          </Button>
        </div>

        <div className='text-center'>
          <p className='mb-2 text-sm text-gray-600'>Button will show loading state for 1 second</p>
        </div>
      </div>
    )
  },
}

// All variants showcase
export const AllVariants: Story = {
  render: () => (
    <div className='space-y-4'>
      <div className='grid grid-cols-2 gap-4'>
        <div className='space-y-2'>
          <h3 className='text-sm font-semibold'>Sizes</h3>
          <div className='space-y-2'>
            <Button variants={buttonVariants({ variant: 'primary', size: 'sm' })}>Small</Button>
            <Button variants={buttonVariants({ variant: 'primary', size: 'md' })}>Medium</Button>
            <Button variants={buttonVariants({ variant: 'primary', size: 'lg' })}>Large</Button>
            <Button variants={buttonVariants({ variant: 'primary', size: 'icon' })} className='p-3'>
              <FiPlus className='h-6 w-6' />
            </Button>
          </div>
        </div>

        <div className='space-y-2'>
          <h3 className='text-sm font-semibold'>States</h3>
          <div className='space-y-2'>
            <Button>Normal</Button>
            <Button isLoading>Loading</Button>
            <Button disabled>Disabled</Button>
            <Button isLoading disabled>
              Loading & Disabled
            </Button>
          </div>
        </div>
      </div>

      <div className='space-y-2'>
        <h3 className='text-sm font-semibold'>Icon Positions</h3>
        <div className='flex gap-2'>
          <Button icon={<FiDownload />} iconPosition='before'>
            Icon Before
          </Button>
          <Button icon={<FiArrowRight />} iconPosition='after'>
            Icon After
          </Button>
        </div>
      </div>
    </div>
  ),
}

// Playground story for testing all props
export const Playground: Story = {
  args: {
    children: 'Customize Me',
    variants: buttonVariants({ variant: 'primary', size: 'md' }),
    isLoading: false,
    disabled: false,
    icon: 'download',
    iconPosition: 'before',
    className: '',
  },
}

// Accessibility showcase
export const Accessibility: Story = {
  render: () => (
    <div className='space-y-4'>
      <div className='space-y-2'>
        <h3 className='text-sm font-semibold'>ARIA Labels</h3>
        <div className='space-y-2'>
          <Button aria-label='Submit form'>Submit</Button>
          <Button aria-label='Delete item' aria-describedby='delete-desc'>
            Delete
          </Button>
          <p id='delete-desc' className='text-xs text-gray-600'>
            This action cannot be undone
          </p>
        </div>
      </div>

      <div className='space-y-2'>
        <h3 className='text-sm font-semibold'>Loading States</h3>
        <div className='space-y-2'>
          <Button isLoading aria-busy='true'>
            Processing...
          </Button>
          <Button isLoading aria-busy='true' aria-live='polite'>
            Saving changes...
          </Button>
        </div>
      </div>

      <div className='space-y-2'>
        <h3 className='text-sm font-semibold'>Keyboard Navigation</h3>
        <div className='space-y-2'>
          <Button tabIndex={0}>Tab to focus</Button>
          <Button tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && console.log('Enter pressed')}>
            Press Enter
          </Button>
        </div>
      </div>
    </div>
  ),
}

// Performance showcase
export const Performance: Story = {
  args: {
    isLoading: true,
  },

  render: () => {
    const [buttons, setButtons] = useState(10)

    return (
      <div className='space-y-4'>
        <div className='flex items-center gap-4'>
          <label className='text-sm font-medium'>Number of buttons: {buttons}</label>
          <input
            type='range'
            min='1'
            max='100'
            value={buttons}
            onChange={(e) => setButtons(Number(e.target.value))}
            className='w-32'
          />
        </div>

        <div className='grid grid-cols-5 gap-2'>
          {Array.from({ length: buttons }, (_, i) => (
            <Button key={i} variants={buttonVariants({ variant: 'primary', size: 'sm' })}>
              B{i + 1}
            </Button>
          ))}
        </div>

        <p className='text-center text-xs text-gray-600'>
          Test rendering performance with different numbers of buttons
        </p>
      </div>
    )
  },
}
