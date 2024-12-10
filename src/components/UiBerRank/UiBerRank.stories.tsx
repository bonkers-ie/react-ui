import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { EBerSize } from "./_types";
import { UiBerRank } from "./UiBerRank";

const meta = {
	title: "Components/UiBerRank",
	component: UiBerRank,
	argTypes: {
		rank: {
			control: {
				type: "range",
				min: 0,
				max: 15
			},
			description: "The Element rank from 0 to 15",
		},
		size: {
			control: {
				type: "select"
			},
			options: Object.values(EBerSize),
			description: "The size of the rank",
		}
	},
	args: {
		rank: 0,
		size: EBerSize.MEDIUM
	},
} satisfies Meta<typeof UiBerRank>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	render: (args)=>(
		<UiBerRank
			rank={args.rank}
			size={args.size}
		/>
	)
};
