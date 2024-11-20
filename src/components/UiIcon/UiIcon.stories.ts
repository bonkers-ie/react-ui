import { UiIcon } from "../UiIcon/UiIcon";
import type { Meta, StoryObj } from "@storybook/react";
import { ESize } from "../../_types/sizing.js";

const meta: Meta<typeof UiIcon> = {
	title: "Components/UiIcon",
	component: UiIcon,
	argTypes: {
		size: {
			control: {
				type: "select",
			},
			options: Object.values(ESize),
			description: "Icon Size",
		},
	},
	args: {
		size: ESize.LG,
	},
} satisfies Meta<typeof UiIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		name: ["far", "face-smile"],
	},
};
