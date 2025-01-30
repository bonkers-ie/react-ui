import type { Meta, StoryObj } from "@storybook/react";
import { UiNotificationBadge } from "./UiNotificationBadge";
import { EBadgeOffset, EBadgeSizes, EBadgeTypes } from "./_types";
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
		kind: {
			control: {
				type: "select",
			},
			options: Object.values(EBadgeTypes),
			description: "Color types badges",
		},
		children: {
			control: {
				type: "text"
			}
		},
		size: {
			control: {
				type: "select",
			},
			options: Object.values(EBadgeSizes),
			description: "Badge sizes",
		},

	},
	args: {
		offset: EBadgeOffset.DEFAULT,
		kind: EBadgeTypes.DEFAULT,
		size: EBadgeSizes.DEFAULT,
		children: "1"
	},
};

export default meta;

type Story = StoryObj<typeof UiNotificationBadge>;

export const Primary: Story = {
	render: (args) => (
		<div className="flex gap-sm">
			<div className="relative">
				<UiNotificationBadge { ...args } />
			</div>
			<div className="relative size-xxl rounded-full bg-primary">
				<UiNotificationBadge { ...args } />
			</div>

		</div>
	),
};

export const Variant: Story = {

	render: (args) => (
		<div className="flex h-xxl w-xxxxl gap-md rounded-sm bg-secondary-alt-600 p-xxs">
			<div className="relative">
				<UiNotificationBadge { ...args } size={ EBadgeSizes.DEFAULT }
					offset={ EBadgeOffset.OFFSET_TOP_LEFT } />
			</div>
			<div className="relative">
				<UiNotificationBadge { ...args } size={ EBadgeSizes.LARGE }
					offset={ EBadgeOffset.OFFSET_TOP_LEFT }/>
			</div>

		</div>
	),
};
