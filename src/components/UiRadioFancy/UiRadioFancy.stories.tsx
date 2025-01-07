import type { Meta, StoryObj } from "@storybook/react";
import { UiRadioFancy } from "./UiRadioFancy";
import React from "react";

const meta = {
	title: "Components/UiRadioFancy",
	component: UiRadioFancy,
	argTypes: {

		children: {
			control: {
				type: "text",
			},
			description: "RadioFancy Children",
		},
		disabled: {
			control: {
				type: "boolean",
			},
			description: "Radio disabled",
		},
		subHeader: {
			control: {
				type: "text",
			},
			description: "RadioFancy Children",
		},

	},
	args: {
		children: "Title",
		disabled: false,
		subHeader: "DG2 = Rural supply region"
	},
} satisfies Meta<typeof UiRadioFancy>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	render: (args) => (
		<div>
			<UiRadioFancy
				disabled={args.disabled}
				icon={["far", "face-smile"]}

			>
				{args.children}

			</UiRadioFancy>

			<br/>

			<UiRadioFancy
				disabled={args.disabled}
				icon={["far", "face-smile"]}
				subHeader={args.subHeader}

			>
				{args.children}

			</UiRadioFancy>
		</div>

	)
};
