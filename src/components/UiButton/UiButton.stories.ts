import type { Meta, StoryObj } from '@storybook/react';
import { UiButton } from "./UiButton";

const meta = {
    title: 'UiButton',
    component: UiButton,
    parameters: {},
    argTypes: {},
} satisfies Meta<typeof UiButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};