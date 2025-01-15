import type { Meta, StoryObj } from "@storybook/react";
import { UiAccordion } from "./UiAccordionBase";
import { UiAccordionItem } from "./UiAccordionItem";
import { EColors, UiTypography } from "../UiTypography";
import { UiIcon } from "../UiIcon";
import React from "react";
import { EAccordionType } from "./_types";
import { ESize } from "../../_types/sizing";
import cx from "classnames";

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
					<UiAccordionItem className="rounded bg-secondary-alt-200 px-sm py-xs" id="section1">
						<UiAccordionItem.Trigger className="flex flex-row items-center justify-between">
							{ (isOpen) =>
								<>
									<UiTypography color={ EColors.PRIMARY }>Item</UiTypography>
									{
										<div className={ cx( "transition","text-primary-700", isOpen ? "rotate-180" : "rotate-0") }>
											<UiIcon name={ ["far", "face-smile"] } size={ ESize.XS } />
										</div>
									}
								</>
							}
						</UiAccordionItem.Trigger>
						<UiAccordionItem.Content>
							<UiTypography className="rounded-lg bg-secondary-alt-300 p-md">Content for Item</UiTypography>
						</UiAccordionItem.Content>
					</UiAccordionItem>

					<UiAccordionItem id="section2">
						<UiAccordionItem.Trigger>Unstyled Item</UiAccordionItem.Trigger>
						<UiAccordionItem.Content>
							Content for Unstyled Item
						</UiAccordionItem.Content>
					</UiAccordionItem>
				</UiAccordion>
			</div>
		);
	},
};
