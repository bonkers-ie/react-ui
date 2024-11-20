import type { Meta, StoryObj } from "@storybook/react";
import { UiButton } from "./UiButton";
import { EButtonSizes, EButtonTypes } from "./_typings";

const meta = {
	title: "Components/UiButton",
	component: UiButton,
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
		children: {
			control: {
				type: "text",
			},
			description: "Text or component",
		}
	},
	args: {
		children: "Button",
		kind: EButtonTypes.PRIMARY,
		size: EButtonSizes.DEFAULT,
		fullWidth: false,
		disabled: false,
	},
} satisfies Meta<typeof UiButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
