import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { UiInputText } from "./UiInputText";
import { EInputState } from "./_types";
import { UiAccordionInfoDropdown } from "../UiAccordion";

const meta = {
	title: "Components/UiInput/UiInputText",
	component: UiInputText,
	argTypes: {
		id: {
			description: "The id of the input",
			control: {
				type: "text",
			},
		},
		disabled: {
			description: "If the input is disabled",
			control: {
				type: "boolean",
			},
		},
		title: {
			description: "The title of the input",
			control: {
				type: "text",
			},
		},
		subtitle: {
			description: "The subtitle of the input",
			control: {
				type: "text",
			},
		},
		placeholder: {
			description: "The placeholder of the input",
			control: {
				type: "text",
			},
		},
		state: {
			options: [EInputState.DEFAULT, EInputState.SUCCESS, EInputState.ERROR],
			description: "The state of the input",
			control: {
				type: "radio",
			},
		},
		statusMessage: {
			description: "The status message of the input",
			control: {
				type: "text",
			},
			if: {
				arg: "state",
				neq: EInputState.DEFAULT
			},

		}
	},
	args: {
		id: "testInput",
		disabled: false,
		title: "Title",
		subtitle: "Subtitle",
		placeholder: "Placeholder",
		state: EInputState.DEFAULT,
		statusMessage: "Error message"
	},
} as Meta<typeof UiInputText>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	render: (args) => {
		const Info = () => (<UiAccordionInfoDropdown title="What's this?">Lorem, ipsum dolor.</UiAccordionInfoDropdown>);
		return (
			<UiInputText infoComponent={ <Info /> } onFocus={ () => console.log("focus") } { ...args } />
		);
	},
};
