import type { Meta, StoryObj } from "@storybook/react";
import { UiListItem } from "./UiListItem";
import { UiList } from "./UiList";
import { UiIcon } from "../UiIcon";
import React from "react";
import { EListItemSize, EListItemSpacing } from "./_types";

const meta = {
	title: "Components/UiList",
	component: UiList,
	argTypes: {
		size: {
			control: {
				type: "select",
			},
			options: Object.values(EListItemSize),
			description: "Icon Size",
		},
		spacing: {
			control: {
				type: "select",
			},
			options: Object.values(EListItemSpacing),
			description: "Icon Spacing",
		}
	},
	args: {
		size: EListItemSize.SM,
		spacing: EListItemSpacing.DEFAULT
	},
} satisfies Meta<typeof UiList>;

export default meta;

type Story = StoryObj<typeof meta>;

const IconComponent = ()=>{
	return <UiIcon name={ ["far", "face-smile"] }/>;
};

export const Primary: Story = {
	render: (args)=> (
		<UiList size={ args.size } spacing={ args.spacing }>
			<UiListItem prefix={ IconComponent() }>Item 1<br/> Item 1</UiListItem>
			<UiListItem prefix={ IconComponent() }>Item 2</UiListItem>
			<UiListItem>Item 3</UiListItem>
		</UiList>
	)
};
