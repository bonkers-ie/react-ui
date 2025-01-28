import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { UiInputRange } from "./UiInputRange";

const meta = {
	title: "Components/UiInputRange",
	component: UiInputRange,
	argTypes: {
		min: {
			control: {
				type: "number"
			},
			description: "The minimum range value",
		},
		max: {
			control: {
				type: "number"
			},
			description: "The maximum range value",
		},
		step: {
			control: {
				type: "number"
			},
			description: "The step increment of the range",
		}
	},
	args: {
		min: 0,
		max: 100,
		step: 1,
		disabled: false,
		value: 50,
		onChangeHandler: (val?	) => console.log(val)
	},
} satisfies Meta<typeof UiInputRange>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: (args) => {
		const [value, setValue] = React.useState(args.value);
		const handleChange = (val:number) => {
			setValue(val);
			args.onChangeHandler(val);
		};
		return (
			<div>
				<UiInputRange
					{ ...args }
					value={ value }
					onChangeHandler={ handleChange }
				/>
				<div style={ {
					marginTop: "2rem"
				} }>
					Current value: { value }
				</div>
			</div>
		);
	},
	args: {
		min: 0,
		max: 100,
		step: 1,
		value: 50,
		onChangeHandler: () => {}
	},
};

// Range from negative to positive
export const NegativeRange: Story = {
	render: (args) => {
		const [value, setValue] = React.useState(args.value);
		const handleChange = (val:number) => {
			setValue(val);
			args.onChangeHandler(val);
		};
		return (
			<div>
				<UiInputRange
					{ ...args }
					value={ value }
					onChangeHandler={ handleChange }
				/>
				<div style={ {
					marginTop: "2rem"
				} }>
					Current value: { value }
				</div>
			</div>
		);
	},
	args: {
		min: -50,
		max: 50,
		step: 5,
		value: 0,
		onChangeHandler: () => {}
	},
};

// Decimal steps story
export const DecimalSteps: Story = {
	render: (args) => {
		const [value, setValue] = React.useState(args.value);
		const handleChange = (val:number) => {
			setValue(val);
			args.onChangeHandler(val);
		};
		return (
			<div>
				<UiInputRange
					{ ...args }
					value={ value }
					onChangeHandler={ handleChange }
				/>
				<div style={ {
					marginTop: "2rem"
				} }>
					Current value: { value }
				</div>
			</div>
		);
	},
	args: {
		min: 0,
		max: 1,
		step: 0.1,
		value: 0.5,
		onChangeHandler: () => {}
	},
};

// Disabled state
export const Disabled: Story = {
	args: {
		disabled: true
	},
};
