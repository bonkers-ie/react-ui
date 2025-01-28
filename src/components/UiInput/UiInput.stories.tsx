import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { UiInputText } from "./UiInputText";
import { EInputKind } from "./_types";
import { UiAccordionInfoDropdown } from "../UiAccordion";
import { UiInputBase } from "./UiInput.base";
import { UiIcon } from "../UiIcon";
import { ESize } from "../../_types/sizing";

const meta = {
	title: "Components/UiInputBase",
	component: UiInputBase,
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
		placeholder: {
			description: "The placeholder of the input",
			control: {
				type: "text",
			},
		},
		kind: {
			options: [
				EInputKind.DEFAULT,
				EInputKind.SUCCESS,
				EInputKind.ERROR,
			],
			description: "The state of the input",
			control: {
				type: "radio",
			},
		},
		type: {
			description: "The type of the input",
			control: {
				type: "select",
			},
			options: ["text", "password", "email", "number", "tel", "url"],
		},
		preIcon: {
			description: "The ReactNode positioned before the input",
		},
		postIcon: {
			description: "The ReactNode positioned after the input",
		}
	},
	args: {
		id: "testInput",
		disabled: false,
		kind: EInputKind.DEFAULT,
		type: "text",
		placeholder: "Placeholder",
		postIcon: undefined,
		preIcon: undefined,
	},
} as Meta<typeof UiInputText>;

export default meta;

type Story = StoryObj<typeof meta>;

export const BaseInput: Story = {
	name: "UiInputBase",
	render: (args) => (
		<UiInputBase { ...args } />
	)
};

export const BaseInputWithIcons: Story = {
	name: "UiInputBase with Icons",
	render: (args) => (
		<UiInputBase
			{ ...args }
			placeholder="Pre and Post Icons..."
			preIcon={ <UiIcon size={ ESize.SM } name={ ["far", "face-smile"] } /> }
			postIcon="$ Dollar"
			id="baseIcons"
		/>
	),
};

export const TextInput: Story = {
	name: "UiInputText",
	render: (args) => {
		const Info = () => (
			<UiAccordionInfoDropdown title="What's this?">
				Lorem, ipsum dolor.
			</UiAccordionInfoDropdown>
		);
		return (
			<UiInputText
				title="Title"
				subtitle="Subtitle"
				infoComponent={ <Info /> }
				onFocus={ () => console.log("focus") }
				{ ...args }
			/>
		);
	},
};

export const TextInputVariations: Story  = {
	name: "UiInputText Kinds",
	render: (args) => (
		<div className="mt-sm flex w-full flex-row gap-sm">
			<UiInputText
				{ ...args }
				id="errorInput"
				placeholder="Error Input"
				kind={ EInputKind.ERROR }
				statusMessage="Backend is broken again"
			/>
			<UiInputText
				id="successInput"
				placeholder="Success Input"
				kind={ EInputKind.SUCCESS }
				statusMessage="You spelled that right!"
			/>
		</div>
	)
};
