import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { UiCheckbox } from "./UiCheckbox";
import { EJustify } from "../../_types/align";
import { ECheckboxSize } from "./_types";

const meta = {
	title: "Components/UiCheckbox",
	component: UiCheckbox,
	argTypes: {
		justify: {
			control: {
				type: "select"
			},
			options: Object.values(EJustify),
			description: "The Element justify",
		},
		size: {
			control: {
				type: "select"
			},
			options: Object.values(ECheckboxSize),
			description: "The element size can be SM or MD (MD by default)"
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
		checked: {
			control: {
				type: "boolean"
			},
			description: "The Element checked state",
		},

		children: {
			control: {
				type: "text"
			}
		},

	},
	args: {
		children: "Some text",
		justify: EJustify.START,
		invertOrder: false,
		disabled: false,
		checked: false,
		size: ECheckboxSize.MD,
		onChange: (checked: boolean) => {
			console.log(`Checkbox is now ${checked ? "checked" : "unchecked"}`);
		},
	},
} satisfies Meta<typeof UiCheckbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	render: (args) => {
		const [checked, setChecked] = React.useState(args.checked);

		React.useEffect(() => {
			setChecked(args.checked);
		}, [args.checked]);

		const handleChange = (value: boolean) => {
			setChecked(value);
		};
		return (
			<UiCheckbox
				checked={checked}
				onChange={handleChange}
				justify={args.justify}
				invertOrder={args.invertOrder}
				disabled={args.disabled}
				size={args.size}
			>
				{args.children}
			</UiCheckbox>
		);
	}
};
