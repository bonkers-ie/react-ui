import type { Meta, StoryObj } from "@storybook/react";
import { UiNotificationBadge } from "./UiNotificationBadge";
import { EBadgeOffset } from "./_types";
import { EColors } from "../../_types/colors";
import React from "react";

const meta: Meta<typeof UiNotificationBadge> = {
	title: "Components/UiNotificationBadge",
	component: UiNotificationBadge,
	argTypes: {
		offset: {
			control: {
				type: "select",
			},
			options: Object.values(EBadgeOffset),
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
		offset: EBadgeOffset.DEFAULT,
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
				<UiNotificationBadge { ...args } notificationCount={ "New" } />
			</div>
			<div className="relative size-xl rounded-sm bg-error">
				<UiNotificationBadge { ...args } notificationCount={ "!" } color={ EColors.ACCENT_ALT }/>
			</div>
			<div className="relative size-xl rounded-sm bg-accent">
				<UiNotificationBadge { ...args } notificationCount color={ EColors.PRIMARY } icon={ ["far", "face-smile"] }/>
			</div>
		</div>
	),
};
