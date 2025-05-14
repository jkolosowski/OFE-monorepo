import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './button';

type Story = StoryObj;

const meta: Meta = {
  title: 'Components/Button',
  component: 'pp-button',
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: [
        'default',
        'primary',
        'success',
        'neutral',
        'warning',
        'danger',
        'text',
      ],
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
    loading: {
      control: { type: 'boolean' },
    },
    outline: {
      control: { type: 'boolean' },
    },
    pill: {
      control: { type: 'boolean' },
    },
    circle: {
      control: { type: 'boolean' },
    },
    type: {
      control: { type: 'select' },
      options: ['button', 'submit', 'reset'],
    },
  },
  args: {
    variant: 'primary',
    size: 'medium',
    disabled: false,
    loading: false,
    outline: false,
    pill: false,
    circle: false,
    type: 'button',
  },
  render: ({ variant, size, disabled, loading, outline, pill, circle, type }) =>
    html`<pp-button
      variant=${variant}
      size=${size}
      ?disabled=${disabled}
      ?loading=${loading}
      ?outline=${outline}
      ?pill=${pill}
      ?circle=${circle}
      type=${type}
    >
      Button
    </pp-button>`,
};

export default meta;

export const Primary: Story = {
  args: {
    variant: 'primary',
  },
};

export const Loading: Story = {
  args: {
    loading: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
