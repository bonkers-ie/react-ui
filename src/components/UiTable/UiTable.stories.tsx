import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { UiTable, UiTableRow, UiTableCell } from "./index.ts";
import { ETableKind } from "./_types";
import { ETextWeight } from "../UiTypography";

const meta = {
	title: "Components/UiTable",
	component: UiTable,
	argTypes: {
		kind: {
			control: {
				type: "select"
			},
			options: Object.values(ETableKind),
			description: "The row kind",
		},
	},
	args: {
		kind: ETableKind.DEFAULT,
	},
} satisfies Meta<typeof UiTable>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	render: (args) => {

		const defaultList = {
			text1: "some text",
			text2: "some text2",
			text3: "some text3",
			extraText: false
		};

		const list = [
			defaultList,
			defaultList,
			defaultList,
			defaultList,
			defaultList,
			{
				...defaultList,
				extraText: true
			}
		];

		const subText = (
			<>
				<p>23.620 cent x</p>
				<p>4,200 kWh</p>
			</>
		);

		return (
			<UiTable className="w-full" kind={args.kind}>
				{list.map((row, index) => (
					<UiTableRow key={index}>
						<UiTableCell weight={ETextWeight.SEMI_BOLD}>
							{row.text1}
						</UiTableCell>
						<UiTableCell>
							{row.text2}
						</UiTableCell>

						<UiTableCell weight={ETextWeight.SEMI_BOLD} subText={row.extraText && (subText)}>
							{row.text3}
						</UiTableCell>
					</UiTableRow>
				))}
			</UiTable>
		);
	}
};
