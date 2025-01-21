import type { Meta, StoryObj } from "@storybook/react";
import { UiNotificationBadge } from "./UiNotificationBadge";
import { EBadgeOrigin } from "./_types";
import { EColors } from "../../_types/colors";
import React from "react";

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
		showZero: {
			control: {
				type: "boolean",
			},
			description: "Determines if the badge is visible when count is zero",
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
		origin: EBadgeOrigin.OFFSET_TOP_RIGHT,
		showZero: false,
		color: EColors.ERROR
	},
};

export default meta;

type Story = StoryObj<typeof UiNotificationBadge>;

export const Primary: Story = {
	render: (args) => (
		<div className="flex gap-sm">
			<div className="relative size-xl rounded-full bg-primary">
				<UiNotificationBadge { ...args } notificationCount={ 5 } />
			</div>
			<div className="relative size-xl rounded-sm bg-secondary">
				<UiNotificationBadge { ...args } notificationCount={ "New!" } />
			</div>
			<div className="relative h-lg w-xl rounded-sm bg-error">
				<UiNotificationBadge { ...args } notificationCount={ "BADGE" } color={ EColors.ACCENT_ALT }/>
			</div>
			<div className="relative h-xl w-xxxxxl rounded-sm bg-accent">
				<UiNotificationBadge { ...args } notificationCount={ "BADGE" } color={ EColors.PRIMARY } icon={ ["far", "face-smile"] }/>
			</div>
		</div>
	),
};
