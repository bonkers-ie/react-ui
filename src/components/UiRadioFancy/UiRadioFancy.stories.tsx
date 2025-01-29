import type { Meta, StoryObj } from "@storybook/react";
import { UiRadioFancy } from "./UiRadioFancy";
import React, { useState } from "react";
import { ERadioTypes } from "./_types";

const meta = {
	title: "Components/UiRadioFancy",
	component: UiRadioFancy,
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
		radioType: {
			control: {
				type: "select",
			},
			options: Object.values(ERadioTypes),
			description: " radio type "
		}

	},
	args: {
		children: "Title",
		disabled: false,
		subHeader: "DG2 = Rural supply region",
		radioType: ERadioTypes.DEFAULT,
		onChange: (value: string) => console.log(value),
		active: false,
		value: "value",
	},
} satisfies Meta<typeof UiRadioFancy>;

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
			<div className={ args.radioType === ERadioTypes.COMPACT ? "grid grid-cols-2 gap-sm" : "grid grid-rows-2 gap-sm" }>
				<UiRadioFancy
					disabled={ args.disabled }
					icon={ ["far", "face-smile"] }
					radioType={ args.radioType }
					value="value1"
					onChange={ handleChange }
					active={ selectedValue === "value1" }

				>
					{ args.children }

				</UiRadioFancy>

				<UiRadioFancy
					disabled={ args.disabled }
					icon={ ["far", "face-smile"] }
					subHeader={ args.subHeader }
					radioType={ args.radioType }
					value="value2"
					onChange={ handleChange }
					active={ selectedValue === "value2" }

				>
					{ args.children }

				</UiRadioFancy>
			</div>
		);

	},
};
