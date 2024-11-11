import type { Meta, StoryObj } from '@storybook/react';
import { UiColors } from './UiColors';


const meta = {
    title: 'abra/UiColors',
    component: UiColors,
    parameters: {},
    argTypes: {},
} satisfies Meta<typeof UiColors>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};