import type { Meta, StoryObj } from "@storybook/react";
import { UiButton } from "./UiButton";
import { EButtonSizes, EButtonTypes } from "./_typings";

const meta = {
    title: "Components/UiButton",
    component: UiButton,
    parameters: {
        layout: "centered",
        controls: { expanded: true }
    },
    args: {
        kind: EButtonTypes.PRIMARY,
        size: EButtonSizes.DEFAULT,
        fullWidth: false,
        disabled: false,
    },
    argTypes: {
        kind: {
            control: {
                type: "select"
            },
            options: Object.values(EButtonTypes),
            description: "Button Type",
        },
        size: {
            control: {
                type: "select"
            },
            options: Object.values(EButtonSizes),
            description: "Button Size",
        },
        fullWidth: {
            control: {
                type: "boolean",
            },
            description: "Button Width Full",
        },
        disabled: {
            control: {
                type: "boolean",
            },
            description: "Button Disabled",
        },
    },
} satisfies Meta<typeof UiButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        kind: EButtonTypes.PRIMARY,
        children: "Primary Button",
    },
};

export const ButtonVariants: Story = {
    args: {
        children: "Button",
    },
    argTypes: {
        kind: {
            control: {
                type: "select",
                options: Object.values(EButtonTypes),
            },
        },
        size: {
            control: {
                type: "select",
                options: Object.values(EButtonSizes),
            },
        },
        fullWidth: {
            control: "boolean",
        },
        disabled: {
            control: "boolean",
        },
    },
};