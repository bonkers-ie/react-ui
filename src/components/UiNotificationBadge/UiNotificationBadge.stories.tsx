import type { Meta, StoryObj } from "@storybook/react";
import { UiNotificationBadge } from "./UiNotificationBadge";
import { EBadgeOrigin } from "./_types";

const meta: Meta<typeof UiNotificationBadge> = {
	title: "Components/UiNotificationBadge",
	component: UiNotificationBadge,
	argTypes: {
		origin: {
			control: {
				type: "select",
			},
			options: Object.values(EBadgeOrigin),
			description: "The position of the badge relative to its container",
		},
		notificationCount: {
			control: {
				type: "number",
			},
			description: "The number or content displayed inside the badge",
		},
		showZero: {
			control: {
				type: "boolean",
			},
			description: "Determines if the badge is visible when count is zero",
		},
	},
	args: {
		origin: EBadgeOrigin.OFFSET_TOP_RIGHT,
		notificationCount: 5,
		showZero: false,
	},
};

export default meta;

type Story = StoryObj<typeof UiNotificationBadge>;

export const Primary: Story = {};
