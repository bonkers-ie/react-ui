import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { UiSelect } from "./UiSelect";

const meta = {
	title: "Components/UiSelect",
	component: UiSelect,
	argTypes: {
		children: {
			control: {
				type: "text"
			}
		},
		disabled: {
			control: {
				type: "boolean"
			},
			description: "Disable the select element"
		},
		heading: {
			control: {
				type: "text"
			},
			description: "Heading of the select element"
		},
		subLabel: {
			control: {
				type: "text"
			},
			description: "Sublabel of the select element"
		},
		value: {
			control: {
				type: "text"
			},
			description: "Value of the select element"
		},
	},
	args: {
		disabled: false,
		heading: "Heading",
		subLabel: "subLabel",
		value: "",
		onChange: (event: React.ChangeEvent<HTMLSelectElement>) => console.log(event.target.value)
	},
} satisfies Meta<typeof UiSelect>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	render: (args) => {
		const [value, setValue] = React.useState(args.value);

		const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
			setValue(event.target.value);
		};

		return (
			<React.Fragment>
				<UiSelect { ...args } value={ value } onChange={ handleChange }>
					<option value="" disabled hidden>Select an option</option>
					<option value="1">Option 1</option>
					<option value="2">Option 2</option>
					<option value="3">Option 3</option>
				</UiSelect>
			</React.Fragment>
		);
	}
};
