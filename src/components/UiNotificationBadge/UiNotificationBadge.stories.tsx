import type { Meta, StoryObj } from "@storybook/react";
import { UiNotificationBadge } from "./UiNotificationBadge";
import { EBadgeOrigin } from "./_types";

const meta = {
	title: "Components/UiNotificationBadge",
	component: UiNotificationBadge,
	argTypes: {
		origin: {
			control: {
				type: "select"
			},
			options: Object.values(EBadgeOrigin),
			description: "The Element origin",
		},
		children: {
			control: {
				type: "text",
			}
		}

	},
	args: {
		origin: EBadgeOrigin.OFFSET_TOP_RIGHT,
		children: "1"
	},
} satisfies Meta<typeof UiNotificationBadge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
