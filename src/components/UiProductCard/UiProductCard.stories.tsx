
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
				type: "text"
			},
			description: "The title text",
		},
		subtitle: {
			control: {
				type: "text"
			},
			description: "The subtitle text",
		},
	},
	args: {
		title: "This is a Title",
		subtitle: "This is a Subtitle",
	},
} satisfies Meta<typeof UiProductCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: (args) => {
		const header = (
			<div className="flex w-fit rounded-full bg-primary p-sm text-white">
				<UiIcon name={["far", "face-smile"]} size={ESize.LG} />
			</div>
		);
		return (
			<UiProductCard {...args} header={header} />
		);
	}
};

export const Variants: Story = {
	render: (args) => {
		const header1 = (
			<div className="flex w-fit rounded-full bg-primary p-sm text-white">
				<UiIcon name={["far", "face-angry"]} size={ESize.MD} />
			</div>
		);

		const header2 = (
			<div className="flex w-fit rounded-full bg-primary p-xxs text-white">
				<UiIcon name={["far", "face-meh"]} size={ESize.LG} />
			</div>
		);
		return (

			<div className="grid w-[412px] grid-cols-2 gap-xs">
				<UiProductCard {...args} header={header1} />
				<UiProductCard {...args} header={header2} badgeText="UP TO €586 OFF" />
			</div>
		);
	}
};
