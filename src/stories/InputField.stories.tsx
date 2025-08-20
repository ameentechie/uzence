import type { Meta, StoryObj } from '@storybook/react';
import { InputField } from '../components/InputField';

const meta: Meta<typeof InputField> = {
  title: 'Components/InputField',
  component: InputField,
  args: {
    label: 'Username',
    placeholder: 'Enter your username',
    helperText: 'This will be your public username.',
    variant: 'outlined',
    size: 'md',
  },
};
export default meta;

type Story = StoryObj<typeof InputField>;

export const Default: Story = {};
export const Filled: Story = {
  args: { variant: 'filled' },
};
export const Ghost: Story = {
  args: { variant: 'ghost' },
};
export const Invalid: Story = {
  args: { invalid: true, errorMessage: 'Invalid username.' },
};
export const Disabled: Story = {
  args: { disabled: true },
};
export const Loading: Story = {
  args: { loading: true },
};
export const Clearable: Story = {
  args: { clearable: true },
};
export const PasswordToggle: Story = {
  args: { type: 'password', showPasswordToggle: true, label: 'Password', placeholder: 'Enter your password' },
};
export const Small: Story = {
  args: { size: 'sm' },
};
export const Large: Story = {
  args: { size: 'lg' },
};
