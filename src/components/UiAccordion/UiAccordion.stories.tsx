import type { Meta, StoryObj } from "@storybook/react";
import { UiAccordion } from "./UiAccordion";
import { UiAccordionItem } from "./UiAccordionItem";
import { EColors, UiTypography } from "../UiTypography";
import React from "react";
import { EAccordionType } from "./_types";

const meta = {
	title: "Components/UiAccordion",
	component: UiAccordion,
	argTypes: {
		title: {
			control: {
				type: "text",
				description: "The title of the accordion",
			},
		},
		children: {
			control: {
				type: "text",
				description: "The content of the accordion",
			},
		},
		isOpen: {
			control: {
				type: "boolean",
				description: "The initial state of the accordion",
			},
		},
		onToggle: {
			control: {
				type: "function",
				description: "The callback to handle the state change of the accordion",
			},
		},
	},
} as Meta<typeof UiAccordion>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
	render: () => {
		const handleTrigger = (id: string) => {
			console.log(`Item: ${id}`);
		};
		return (
			<div>
				<UiAccordion handleTrigger={ handleTrigger } className="col-auto flex flex-col justify-start gap-xs" type={ EAccordionType.SINGLE }>
					<UiAccordionItem className="" id="section1">
						<UiAccordionItem.Trigger>
							{ (isOpen) =>
								<>
									<UiTypography color={ EColors.PRIMARY }>Header 1</UiTypography>
									{
										isOpen
											? <UiTypography color={ EColors.PRIMARY }>Open</UiTypography>
											: <UiTypography color={ EColors.PRIMARY }>Closed</UiTypography>
									}
								</>
							}
						</UiAccordionItem.Trigger>
						<UiAccordionItem.Content>
							<UiTypography className="rounded-lg bg-secondary-alt-200 p-md">Content for section 1</UiTypography>
						</UiAccordionItem.Content>
					</UiAccordionItem>

					<UiAccordionItem id="section2">
						<UiAccordionItem.Trigger>Test 1</UiAccordionItem.Trigger>
						<UiAccordionItem.Content>
							Content for section 2
						</UiAccordionItem.Content>
					</UiAccordionItem>
				</UiAccordion>
			</div>
		);
	},
};
