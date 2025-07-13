import type { Meta, StoryObj } from '@storybook/react-vite'
import SampleButton from './index'

const meta: Meta<typeof SampleButton> = {
  title: 'Components/App/SampleButton',
  component: SampleButton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'SampleButton component với purple theme, hỗ trợ variants, sizes, loading state và icon.',
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'outline', 'ghost', 'destructive'],
      description: 'Kiểu variant của button',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'icon'],
      description: 'Kích thước của button',
    },
    isLoading: {
      control: { type: 'boolean' },
      description: 'Hiển thị loading spinner',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Vô hiệu hóa button',
    },
    children: {
      control: { type: 'text' },
      description: 'Nội dung text của button',
    },
    icon: {
      control: { type: 'text' },
      description: 'Icon hiển thị bên trái text (emoji hoặc text)',
    },
    className: {
      control: { type: 'text' },
      description: 'CSS classes tùy chỉnh',
    },
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

// Default story
export const Default: Story = {
  args: {
    children: 'Sample Button',
  },
}

// Variants
export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary Button',
  },
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary Button',
  },
}

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Outline Button',
  },
}

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Ghost Button',
  },
}

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: 'Delete Button',
  },
}

// Sizes
export const Small: Story = {
  args: {
    size: 'sm',
    children: 'Small Button',
  },
}

export const Medium: Story = {
  args: {
    size: 'md',
    children: 'Medium Button',
  },
}

export const Large: Story = {
  args: {
    size: 'lg',
    children: 'Large Button',
  },
}

export const Icon: Story = {
  args: {
    size: 'icon',
    children: '🔍',
  },
}

// States
export const Loading: Story = {
  args: {
    isLoading: true,
    children: 'Loading...',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Disabled Button',
  },
}

export const LoadingDisabled: Story = {
  args: {
    isLoading: true,
    disabled: true,
    children: 'Loading Disabled',
  },
}

// With Icons
export const WithIcon: Story = {
  args: {
    icon: '🚀',
    children: 'Launch App',
  },
}

export const WithIconSecondary: Story = {
  args: {
    variant: 'secondary',
    icon: '📧',
    children: 'Send Email',
  },
}

export const WithIconOutline: Story = {
  args: {
    variant: 'outline',
    icon: '💾',
    children: 'Save File',
  },
}

export const WithIconGhost: Story = {
  args: {
    variant: 'ghost',
    icon: '⚙️',
    children: 'Settings',
  },
}

export const WithIconDestructive: Story = {
  args: {
    variant: 'destructive',
    icon: '🗑️',
    children: 'Delete Item',
  },
}

// Interactive examples
export const Interactive: Story = {
  args: {
    children: 'Click me!',
    onClick: () => alert('Button clicked!'),
  },
}

// Custom styling
export const CustomStyling: Story = {
  args: {
    children: 'Custom Styled',
    className: 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg',
  },
}

// Theme stories
export const LightTheme: Story = {
  args: {
    children: 'Light Theme Button',
  },
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
}

export const DarkTheme: Story = {
  args: {
    children: 'Dark Theme Button',
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
}

// All variants showcase
export const AllVariants: Story = {
  render: () => (
    <div className='flex flex-wrap gap-4'>
      <SampleButton variant='primary'>Primary</SampleButton>
      <SampleButton variant='secondary'>Secondary</SampleButton>
      <SampleButton variant='outline'>Outline</SampleButton>
      <SampleButton variant='ghost'>Ghost</SampleButton>
      <SampleButton variant='destructive'>Destructive</SampleButton>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All variants of SampleButton.',
      },
    },
  },
}

// All sizes showcase
export const AllSizes: Story = {
  render: () => (
    <div className='flex flex-wrap items-center gap-4'>
      <SampleButton size='sm'>Small</SampleButton>
      <SampleButton size='md'>Medium</SampleButton>
      <SampleButton size='lg'>Large</SampleButton>
      <SampleButton size='icon'>🔍</SampleButton>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All sizes of SampleButton.',
      },
    },
  },
}

// Icon buttons showcase
export const IconButtons: Story = {
  render: () => (
    <div className='flex flex-wrap gap-4'>
      <SampleButton size='icon' icon='🚀'>
        Launch
      </SampleButton>
      <SampleButton size='icon' icon='📧'>
        Email
      </SampleButton>
      <SampleButton size='icon' icon='💾'>
        Save
      </SampleButton>
      <SampleButton size='icon' icon='⚙️'>
        Settings
      </SampleButton>
      <SampleButton size='icon' icon='🗑️'>
        Delete
      </SampleButton>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Buttons with different icons.',
      },
    },
  },
}

// Loading states showcase
export const LoadingStates: Story = {
  render: () => (
    <div className='flex flex-wrap gap-4'>
      <SampleButton isLoading>Loading...</SampleButton>
      <SampleButton variant='secondary' isLoading>
        Loading...
      </SampleButton>
      <SampleButton variant='outline' isLoading>
        Loading...
      </SampleButton>
      <SampleButton variant='ghost' isLoading>
        Loading...
      </SampleButton>
      <SampleButton variant='destructive' isLoading>
        Loading...
      </SampleButton>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Loading states of SampleButton.',
      },
    },
  },
}

// Theme comparison showcase
export const ThemeComparison: Story = {
  render: () => (
    <div className='space-y-8'>
      <div>
        <h3 className='mb-4 text-lg font-semibold'>Light Theme</h3>
        <div className='flex flex-wrap gap-4 rounded-lg bg-white p-6 shadow-lg'>
          <SampleButton variant='primary'>Primary</SampleButton>
          <SampleButton variant='secondary'>Secondary</SampleButton>
          <SampleButton variant='outline'>Outline</SampleButton>
          <SampleButton variant='ghost'>Ghost</SampleButton>
          <SampleButton variant='destructive'>Destructive</SampleButton>
        </div>
      </div>

      <div>
        <h3 className='mb-4 text-lg font-semibold text-white'>Dark Theme</h3>
        <div className='flex flex-wrap gap-4 rounded-lg bg-gray-900 p-6 shadow-lg'>
          <SampleButton variant='primary'>Primary</SampleButton>
          <SampleButton variant='secondary'>Secondary</SampleButton>
          <SampleButton variant='outline'>Outline</SampleButton>
          <SampleButton variant='ghost'>Ghost</SampleButton>
          <SampleButton variant='destructive'>Destructive</SampleButton>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'SampleButton variants in light and dark themes.',
      },
    },
  },
}
