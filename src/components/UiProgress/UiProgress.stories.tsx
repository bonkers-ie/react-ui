import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { UiProgress } from "./UiProgress";

const meta = {
	title: "Components/UiProgress",
	component: UiProgress,
	argTypes: {
		min: {
			control: {
				type: "number",
			},
			description: "The minimum value",
		},
		max: {
			control: {
				type: "number",
			},
			description: "The maximum value",
		},
		current: {
			control: {
				type: "number",
			},
		},
		progressText: {
			control: {
				type: "text",
			},
		},
	},
	args: {
		min: 0,
		max: 5,
		current: 3,
		progressText: "Step 3 of 5",
	},
} satisfies Meta<typeof UiProgress>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	render: (args) => (
		<UiProgress
			{ ...args }
			progressText={ `Step ${args.current} of ${args.max}` }
		/>
	),

};
