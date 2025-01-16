
import type { Meta, StoryObj } from "@storybook/react";
import { UiSkeleton } from "./UiSkeleton";
import { ESkeletonKind } from "./_types";
import React from "react";

const meta = {
	title: "Components/UiSkeleton",
	component: UiSkeleton,
	argTypes: {
		kind: {
			control: {
				type: "select",
			},
			options: Object.values(ESkeletonKind),
			description: "Skeleton Kind",
		},

	},
	args: {
		kind: ESkeletonKind.RESULT_CARD,

	},
} satisfies Meta<typeof UiSkeleton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	render: (args) => (
		<UiSkeleton
			kind={ args.kind }

		>

		</UiSkeleton>
	)
};
