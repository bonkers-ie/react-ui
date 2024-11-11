import type { Meta, StoryObj } from '@storybook/react';
import { UiColors } from './ui-colors';

const meta = {
    title: 'Colors/UiColors',
    component: UiColors,
    parameters: {},
    argTypes: {},
} satisfies Meta<typeof UiColors>;

export default meta;

type Story = StoryObj<typeof UiColors>;

export const Primary: Story = {};