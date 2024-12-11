
import type { Meta, StoryObj } from "@storybook/react";
import { UiAlert } from "./UiAlert";
import { UiIcon } from "../UiIcon";
import { EAlertTypes } from "./_types";
import React from "react";
import { ESize } from "../../_types/sizing";

const meta = {
	title: "Components/UiAlert",
	component: UiAlert,
	argTypes: {
		kind: {
			control: {
				type: "select",
			},
			options: Object.values(EAlertTypes),
			description: "Alert Kind",
		},
		children: {
			control: {
				type: "text",
			},
			description: "Alert Children",
		}
	},
	args: {
		kind: EAlertTypes.PRIMARY,
		children: "This is a default alert",
	},
} satisfies Meta<typeof UiAlert>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	render: (args)=>(
		<UiAlert
			kind={args.kind}
		>
			<UiIcon name={["far", "face-smile"]} size={ESize.SM}/>
			<span className="text-secondary">
				{args.children}
			</span>

		</UiAlert>
	)
};
