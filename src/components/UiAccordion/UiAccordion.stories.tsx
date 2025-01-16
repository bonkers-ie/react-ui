import type { Meta, StoryObj } from "@storybook/react";
import { UiAccordion } from "./UiAccordion.base";
import { UiAccordionItem } from "./UiAccordionItem";
import { EColors, ETextWeight, ETypographySizes, UiTypography } from "../UiTypography";
import { UiIcon } from "../UiIcon";
import React from "react";
import { EAccordionType } from "./_types";
import { ESize } from "../../_types/sizing";
import cx from "classnames";

const meta = {
	title: "Components/UiAccordion",
	component: UiAccordion,
	argTypes: {
		defaultValue: {
			control: {
				description: "The array of values to be opened by default, must match the id of the accordion item",
				type: "text",
			},
		},
		type: {
			options: [EAccordionType.SINGLE, EAccordionType.MULTI],
			control: {
				type: "radio",
				description: "The type of accordion, single open or multiple open at once",
			},
		},
		handleTrigger: {
			action: "handleTrigger",
			description: "The function to be called when an accordion item is clicked",
		},
		children: {
			control: {
				type: "text",
				description: "The child content of the accordion",
			},
		},

	},
	args: {
		defaultValue: [],
		type: EAccordionType.SINGLE,
		children: "Content",
		handleTrigger: (id: string) => {
			console.log(`Item: ${id}`);
		},
	},
} as Meta<typeof UiAccordion>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
	render: (args) => {
		return (
			<UiAccordion className="col-auto flex flex-col justify-start gap-xs" { ...args }>
				<UiAccordionItem className="overflow-hidden rounded bg-secondary-alt-200" id="section1">
					<UiAccordionItem.Trigger className="flex flex-row items-center justify-between px-sm py-xs">
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
						<UiTypography className="bg-secondary-alt-300 p-md" color={ EColors.SECONDARY }>Content for Item</UiTypography>
					</UiAccordionItem.Content>
				</UiAccordionItem>

				<UiAccordionItem id="section2">
					<UiAccordionItem.Trigger>Unstyled Item</UiAccordionItem.Trigger>
					<UiAccordionItem.Content>
						Content for Unstyled Item
					</UiAccordionItem.Content>
				</UiAccordionItem>
			</UiAccordion>
		);
	},
};

export const Details: Story = {
	render: () => {
		return (
			<UiAccordion>
				<UiAccordionItem id="user-image">
					<UiAccordionItem.Trigger className='rounded-md bg-secondary-alt-200 px-xs py-xxs'>
						{
							(isOpen) =>
								<div className="flex flex-row items-center gap-sm">
									<div className="max-h-xxxl max-w-xxxl overflow-hidden rounded-full bg-secondary-alt-400">
										<img src="https://i.pravatar.cc?img=12" alt="avatar" />
									</div>
									<div className='grid w-full'>
										<UiTypography
											lineHeight
											weight={ ETextWeight.SEMI_BOLD }
											color={ EColors.SECONDARY_500 }
										>
											{ "Ms Jane Doe" }
										</UiTypography>
										<UiTypography
											lineHeight
											size={ ETypographySizes.SM }
											color={ EColors.SECONDARY_400 }
										>
											{ "jane.doe@bonkers.ie" }
										</UiTypography>

									</div>

									<div className={ cx("transition h-fit mr-sm text-secondary-500", isOpen ? "rotate-180" : "") }>
										<UiIcon name={ ["fas", "chevron-down"] } size={ ESize.SM } />
									</div>
								</div>
						}
					</UiAccordionItem.Trigger>
					<UiAccordionItem.Content className="px-sm py-xs">
						{ "Content" }
					</UiAccordionItem.Content>
				</UiAccordionItem>
			</UiAccordion>
		);
	}
};
