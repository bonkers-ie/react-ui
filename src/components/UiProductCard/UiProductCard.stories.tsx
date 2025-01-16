import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { UiProductCard } from "./UiProductCard";
import { UiIcon } from "../UiIcon";
import { ESize } from "../../_types/sizing";

const meta = {
	title: "Components/UiProductCard",
	component: UiProductCard,
	argTypes: {
		title: {
			control: {
				type: "text",
			},
			description: "The title text",
		},
		subtitle: {
			control: {
				type: "text",
			},
			description: "The subtitle text",
		},
		header: {
			description:
				"The element to display in the header area of the card",
		},
		badgeText: {
			description: "The text or component displayed in the badge",
		},
	},
	args: {
		title: "This is a Title",
		subtitle: "This is a Subtitle",
		badgeText: "",
		header: null,
	},
} satisfies Meta<typeof UiProductCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: (args) => {
		const Header = (
			<div className="flex w-fit rounded-full bg-primary p-sm text-white">
				<UiIcon name={ ["far", "face-smile"] } size={ ESize.LG } />
			</div>
		);
		return <UiProductCard { ...args } header={ Header } />;
	},
};

export const Variants: Story = {
	render: (args) => {
		const Header1 = (
			<div className="flex w-fit rounded-full bg-primary p-sm text-white">
				<UiIcon name={ ["far", "face-angry"] } size={ ESize.MD } />
			</div>
		);

		const Header2 = (
			<div className="flex w-fit rounded-full bg-primary p-xxs text-white">
				<UiIcon name={ ["far", "face-meh"] } size={ ESize.LG } />
			</div>
		);

		return (
			<div className="grid w-[412px] grid-cols-2 gap-xs">
				<UiProductCard { ...args } header={ Header1 } />
				<UiProductCard
					{ ...args }
					header={ Header2 }
					badgeText="UP TO €586 OFF"
				/>
			</div>
		);
	},
};

export const Test1: Story = {
	args: {
		title: "This is a Titleajhs",
		subtitle: "This is a Subtitle uablobv",
		badgeText: "",
		header: null,
	},

	render: (args) => {
		const Header = (
			<div className="flex w-fit rounded-full bg-primary p-sm text-white">
				<UiIcon name={ ["far", "face-smile"] } size={ ESize.LG } />
			</div>
		);
		return <UiProductCard { ...args } header={ Header } />;
	},
};
