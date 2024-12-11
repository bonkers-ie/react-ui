import type { Meta, StoryObj } from "@storybook/react";
import { UiToggle } from "./UiToggle";
// import { UiIcon } from "../UiIcon";
// import { EBadgeKind, EBadgeSize } from "./_types";
//import React from "react";
// import { ESize } from "../../_types/sizing";

const meta = {
	title: "Components/UiToggle",
	component: UiToggle,
	argTypes: {
		children: {
			control: {
				type: "text",
			},
			description: "header",
		},
		title: {
			control: {
				type: "text",
			},
			description: "title",
		},
		disabled: {
			control: {
				type: "boolean",
			},
			description: "Toggle Disabled",
		},
		invertOrder: {
			control: {
				type: "boolean"
			},
			description: "The Element order state",
		}

	},
	args: {

		children: "header",
		title: "title",
		disabled: false,
		invertOrder: false,

	},
} satisfies Meta<typeof UiToggle>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
