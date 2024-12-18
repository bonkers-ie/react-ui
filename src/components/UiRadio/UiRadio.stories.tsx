import React from "react";
import { UiRadio } from "./UiRadio";
import { EJustify } from "../../_types/align";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
	title: "Components/UiRadio",
	component: UiRadio,
	argTypes: {
		justify: {
			control: {
				type: "select"
			},
			options: Object.values(EJustify),
			description: "The Element justify",
		},
		invertOrder: {
			control: {
				type: "boolean"
			},
			description: "The Element order",
		},
		disabled: {
			control: {
				type: "boolean"
			},
			description: "The Element disabled state",
		},
		children: {
			control: {
				type: "text"
			}
		},
	},
	args: {
		children: "Some text",
		onChange: (value: unknown) => console.log(`Value updated to ${value}`),
		justify: EJustify.START,
		invertOrder: false,
		disabled: false,
	},
} satisfies Meta<typeof UiRadio>;

export default meta;

type Story = StoryObj<typeof UiRadio>;

export const Default: Story = {
	render: (args) => {
		const [selectedValue, setSelectedValue] = React.useState<string>("value_3");

		const handleChange = (value: string) => {
			setSelectedValue(value);
			args.onChange(value);
		};

		return (
			<div className="grid gap-xxs">
				<UiRadio
					{...args}
					name="radio"
					value="value_1"
					checked={selectedValue === "value_1"}
					onChange={handleChange}
				/>
				<UiRadio
					{...args}
					name="radio"
					value="value_2"
					checked={selectedValue === "value_2"}
					onChange={handleChange}
				/>
				<UiRadio
					{...args}
					name="radio"
					value="value_3"
					checked={selectedValue === "value_3"}
					onChange={handleChange}
				/>
				<UiRadio
					{...args}
					name="radio"
					value="value_4"
					checked={selectedValue === "value_4"}
					onChange={handleChange}
				/>
			</div>
		);
	}
};
