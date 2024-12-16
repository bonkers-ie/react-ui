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
		onChange: (value: boolean, name?: string) => console.log(`${name ? name : "Value"} updated to ${value}`),
		size: ECheckboxSize.MD
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

		const handleChange = (isChecked: boolean) => {
			setChecked(isChecked);
			args.onChange(isChecked);
		};

		return (
			<UiCheckbox
				{...args}
				checked={checked}
				onChange={handleChange}
			/>
		);
	}
};

export const CheckboxGroup: Story = {
	render: (args) => {
		const [checkedItems, setCheckedItems] = React.useState({
			option1: false,
			option2: true,
			option3: false,
		});

		const handleChange = (isChecked: boolean, name: string) => {
			setCheckedItems(prev => ({
				...prev,
				[name]: isChecked
			}));
			args.onChange?.(isChecked, name as keyof typeof checkedItems);
		};

		return (
			<div className="flex flex-col gap-sm">
				<UiCheckbox
					{...args}
					name="option1"
					checked={checkedItems.option1}
					onChange={(isChecked) => handleChange(isChecked, "option1")}
				>
					Option 1
				</UiCheckbox>
				<UiCheckbox
					{...args}
					name="option2"
					checked={checkedItems.option2}
					onChange={(isChecked) => handleChange(isChecked, "option2")}
				>
					Option 2
				</UiCheckbox>
				<UiCheckbox
					{...args}
					name="option3"
					checked={checkedItems.option3}
					onChange={(isChecked) => handleChange(isChecked, "option3")}
				>
					Option 3
				</UiCheckbox>
			</div>
		);
	}
};
