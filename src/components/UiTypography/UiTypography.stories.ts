import type { Meta, StoryObj } from "@storybook/react";
import { UiTypography } from "./UiTypography";
import { ETextAlign, ETextTransform, ETextWeight, ETypographySizes } from "./_types";
import { EColors } from "../../_types/colors";

const meta = {
	title: "Components/UiTypography",
	component: UiTypography,
	argTypes: {
		children: {
			control: {
				type: "text",
				description: "text or child element/s",
			}
		},
		tag: {
			control: {
				type: "text",
				description: "The tag of the element to render",
			}
		},
		underline: {
			control: {
				type: "boolean",
				description: "The Element underline",
			}
		},
		lineHeight: {
			control: {
				type: "boolean",
				description: "The Element line height 1.5",
			}
		},
		size: {
			control: {
				type: "select",
			},
			options: Object.values(ETypographySizes),
			description: "Typography Size",
		},
		textTransform: {
			control: {
				type: "select",
			},
			options: Object.values(ETextTransform),
			description: "Typography Transform",
		},
		align: {
			control: {
				type: "select",
			},
			options: Object.values(ETextAlign),
			description: "Typography Align",
		},
		weight: {
			control: {
				type: "select",
			},
			options: Object.values(ETextWeight),
			description: "Typography Weight",
		},
		color: {
			control: {
				type: "select",
			},
			options: Object.values(EColors),
			description: "Typography Color",
		},
	},
	args: {
		children: "Typography",
		tag: "p",
		underline: false,
		lineHeight: false,
		size: ETypographySizes.MD,
		textTransform: ETextTransform.NONE,
		align: ETextAlign.LEFT,
		weight: ETextWeight.REGULAR,
		color: EColors.PRIMARY,
	},
} satisfies Meta<typeof UiTypography>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
