import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './alert';

type Story = StoryObj;

const meta: Meta = {
  title: 'Components/Alert',
  component: 'pp-alert',
  render: ({ closable, open }) =>
    html`<pp-alert ?closable=${closable} ?open=${open}>
      This is an alert message
    </pp-alert>`,
};

export default meta;

export const Default: Story = {
  args: {
    open: true,
  },
};

export const Closable: Story = {
  args: {
    closable: true,
  },
};
