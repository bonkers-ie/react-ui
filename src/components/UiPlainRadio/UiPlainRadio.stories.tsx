import type { Meta, StoryObj } from "@storybook/react";
import { UiPlainRadio } from "./UiPlainRadio";
import React, { useState } from "react";

const meta = {
	title: "Components/UiPlainRadio",
	component: UiPlainRadio,
	argTypes: {
		children: {
			control: {
				type: "text",
			},
			description: "RadioFancy Children",
		},
		disabled: {
			control: {
				type: "boolean",
			},
			description: "Radio disabled",
		},
		subHeader: {
			control: {
				type: "text",
			},
			description: "RadioFancy Children",
		},
	},
	args: {
		children: "Rural",
		disabled: false,
		subHeader: "DG2 = Rural supply region",
		onChange: (value: string) => console.log(value),
		checked: false,
		value: "value",
		name: "Value"
	},
} satisfies Meta<typeof UiPlainRadio>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	render: (args) => {
		const [selectedValue, setSelectedValue] = useState<string>("value1");

		const handleChange = (value: string) => {
			setSelectedValue(value);
			if (args.onChange) {
				args.onChange(value);
			}
		};

		return (
			<div>
				<UiPlainRadio
					disabled={args.disabled}
					name="Value1"
					value="value1"
					onChange={handleChange}
					checked={selectedValue === "value1"}
					children={args.children}

				>

				</UiPlainRadio>

				<br />

				<UiPlainRadio
					disabled={args.disabled}
					name="Value2"
					value="value2"
					onChange={handleChange}
					checked={selectedValue === "value2"}
					children={args.children}
					subHeader={args.subHeader}
				>

				</UiPlainRadio>
			</div>
		);
	},
};
