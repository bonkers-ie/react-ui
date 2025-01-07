import type { Meta, StoryObj } from "@storybook/react";
import { UiPills } from "./UiPills";
import { UiIcon } from "../UiIcon";
import { EBadgeKind, EBadgeSize } from "./_types";
import React from "react";
import { ESize } from "../../_types/sizing";

const meta = {
	title: "Components/UiPills",
	component: UiPills,
	argTypes: {
		size: {
			control: {
				type: "select",
			},
			options: Object.values(EBadgeSize),
			description: "Pills Size",
		},
		kind: {
			control: {
				type: "select",
			},
			options: Object.values(EBadgeKind),
			description: "Pills Kind",
		},
		children: {
			control: {
				type: "text",
			},
			description: "Pills Children",
		}
	},
	args: {
		kind: EBadgeKind.PRIMARY,
		size: EBadgeSize.SMALL,
		children: "Pills",
	},
} satisfies Meta<typeof UiPills>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	render: (args)=>(
		<UiPills
			kind={ args.kind }
			size={ args.size }
			icon={ <UiIcon name={ ["far", "face-smile"] } size={ ESize.XS }/> }
		>
			{ args.children }
		</UiPills>
	)
};
