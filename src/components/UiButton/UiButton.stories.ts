import type { Meta, StoryObj } from "@storybook/react";
import { UiButton } from "./UiButton";
import { EButtonSizes, EButtonTypes, EButtonWeight } from "./_types";

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
		weight: {
			control: {
				type: "select"
			},
			options: Object.values(EButtonWeight),
			description: "Button Weight",
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
		weight: EButtonWeight.BOLD
	},
} satisfies Meta<typeof UiButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
