import type { Meta, StoryObj } from "@storybook/react";
import { UiNotificationBadge } from "./UiNotificationBadge";
import { EBadgeOffset } from "./_types";
import { EColors } from "../../_types/colors";
import React from "react";
import { UiIcon } from "../UiIcon/UiIcon";
import { ESize } from "../../_types/sizing";

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
		color: {
			control: {
				type: "select",
			},
			options: Object.values(EColors),
			description: "Typography Color",
		},
		children: {
			control: {
				type: "text"
			}
		}
	},
	args: {
		offset: EBadgeOffset.DEFAULT,
		color: EColors.ERROR,
		children: "5"
	},
};

export default meta;

type Story = StoryObj<typeof UiNotificationBadge>;

export const Primary: Story = {
	render: (args) => (
		<div className="flex gap-sm">
			<div className="relative size-xl rounded-full bg-primary">
				<UiNotificationBadge { ...args } />
			</div>
			<div className="relative size-xxl rounded-sm bg-secondary">
				<UiNotificationBadge { ...args } children={ "New" } />
			</div>
			<div className="relative size-xxl rounded-full bg-accent">
				<UiNotificationBadge { ...args } children={ <UiIcon name={ ["far", "face-smile"] } size={ ESize.XXS } /> } />
			</div>

		</div>
	),
};
