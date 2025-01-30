import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { UiButton } from "./UiButton";
import { EButtonSizes, EButtonTypes, EButtonWeight } from "./_types";
import { ESize } from "../../_types/sizing";
import { UiIcon } from "../UiIcon";

const meta = {
	title: "Components/UiButton",
	component: UiButton,
	argTypes: {
		kind: {
			control: {
				type: "select"
			},
			options: Object.values(EButtonTypes),
			description: "Button Type",
		},
		size: {
			control: {
				type: "select"
			},
			options: Object.values(EButtonSizes),
			description: "Button Size",
		},
		fullWidth: {
			control: {
				type: "boolean",
			},
			description: "Button Width Full",
		},
		disabled: {
			control: {
				type: "boolean",
			},
			description: "Button Disabled",
		},
		weight: {
			control: {
				type: "select"
			},
			options: Object.values(EButtonWeight),
			description: "Button Weight",
		},
		children: {
			control: {
				type: "text",
			},
			description: "Text or component",
		}
	},
	args: {
		children: "Button",
		kind: EButtonTypes.PRIMARY_BRAND,
		size: EButtonSizes.DEFAULT,
		fullWidth: false,
		disabled: false,
		weight: EButtonWeight.BOLD
	},
} satisfies Meta<typeof UiButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
export const Variants: Story = {
	render: (args) => (
		<div className='flex flex-col gap-lg'>
			<div className='flex flex-col gap-sm'>
				<div className='flex gap-sm'>
					<UiButton { ...args } kind={ EButtonTypes.PRIMARY_BRAND }>
						<p>CLICK</p>
					</UiButton>
					<UiButton { ...args } kind={ EButtonTypes.PRIMARY_ACCENT }>
						<p>CLICK</p>
					</UiButton>
					<UiButton { ...args } kind={ EButtonTypes.PRIMARY_NEUTRAL }>
						<p>CLICK</p>
					</UiButton>
					<UiButton { ...args } kind={ EButtonTypes.PRIMARY_DESTRUCTIVE }>
						<p>CLICK</p>
					</UiButton>
					<UiButton { ...args } kind={ EButtonTypes.PRIMARY_INVERSE }>
						<p>CLICK</p>
					</UiButton>
					<UiButton { ...args } kind={ EButtonTypes.PRIMARY_BRAND } disabled>
						<p>CLICK</p>
					</UiButton>
				</div>
				<div className='flex gap-sm'>
					<UiButton { ...args } kind={ EButtonTypes.SECONDARY_BRAND }>
						<p>CLICK</p>
					</UiButton>
					<UiButton { ...args } kind={ EButtonTypes.SECONDARY_ACCENT }>
						<p>CLICK</p>
					</UiButton>
					<UiButton { ...args } kind={ EButtonTypes.SECONDARY_NEUTRAL }>
						<p>CLICK</p>
					</UiButton>
					<UiButton { ...args } kind={ EButtonTypes.SECONDARY_DESTRUCTIVE }>
						<p>CLICK</p>
					</UiButton>
					<UiButton { ...args } kind={ EButtonTypes.SECONDARY_INVERSE }>
						<p>CLICK</p>
					</UiButton>
					<UiButton { ...args } kind={ EButtonTypes.SECONDARY_BRAND } disabled>
						<p>CLICK</p>
					</UiButton>
				</div>
				<div className='flex gap-sm'>
					<UiButton { ...args } kind={ EButtonTypes.TERTIARY_BRAND }>
						<p>CLICK</p>
					</UiButton>
					<UiButton { ...args } kind={ EButtonTypes.TERTIARY_ACCENT }>
						<p>CLICK</p>
					</UiButton>
					<UiButton { ...args } kind={ EButtonTypes.TERTIARY_NEUTRAL }>
						<p>CLICK</p>
					</UiButton>
					<UiButton { ...args } kind={ EButtonTypes.TERTIARY_DESTRUCTIVE }>
						<p>CLICK</p>
					</UiButton>
					<UiButton { ...args } kind={ EButtonTypes.TERTIARY_INVERSE }>
						<p>CLICK</p>
					</UiButton>
					<UiButton { ...args } kind={ EButtonTypes.TERTIARY_BRAND } disabled>
						<p>CLICK</p>
					</UiButton>
				</div>
			</div>
			<div className='flex flex-col gap-sm'>
				<div className='flex gap-sm'>
					<UiButton { ...args } kind={ EButtonTypes.PRIMARY_BRAND }>
						<UiIcon name={ ["far", "face-angry"] } size={ ESize.MD } />
						<p>CLICK</p>
					</UiButton>
					<UiButton { ...args } kind={ EButtonTypes.PRIMARY_ACCENT }>
						<UiIcon name={ ["far", "face-angry"] } size={ ESize.MD } />
						<p>CLICK</p>
					</UiButton>
					<UiButton { ...args } kind={ EButtonTypes.PRIMARY_NEUTRAL }>
						<UiIcon name={ ["far", "face-angry"] } size={ ESize.MD } />
						<p>CLICK</p>
					</UiButton>
					<UiButton { ...args } kind={ EButtonTypes.PRIMARY_DESTRUCTIVE }>
						<UiIcon name={ ["far", "face-angry"] } size={ ESize.MD } />
						<p>CLICK</p>
					</UiButton>
					<UiButton { ...args } kind={ EButtonTypes.PRIMARY_INVERSE }>
						<UiIcon name={ ["far", "face-angry"] } size={ ESize.MD } />
						<p>CLICK</p>
					</UiButton>
					<UiButton { ...args } kind={ EButtonTypes.PRIMARY_BRAND } disabled>
						<UiIcon name={ ["far", "face-angry"] } size={ ESize.MD } />
						<p>CLICK</p>
					</UiButton>
				</div>
				<div className='flex gap-sm'>
					<UiButton { ...args } kind={ EButtonTypes.SECONDARY_BRAND }>
						<UiIcon name={ ["far", "face-angry"] } size={ ESize.MD } />
						<p>CLICK</p>
					</UiButton>
					<UiButton { ...args } kind={ EButtonTypes.SECONDARY_ACCENT }>
						<UiIcon name={ ["far", "face-angry"] } size={ ESize.MD } />
						<p>CLICK</p>
					</UiButton>
					<UiButton { ...args } kind={ EButtonTypes.SECONDARY_NEUTRAL }>
						<UiIcon name={ ["far", "face-angry"] } size={ ESize.MD } />
						<p>CLICK</p>
					</UiButton>
					<UiButton { ...args } kind={ EButtonTypes.SECONDARY_DESTRUCTIVE }>
						<UiIcon name={ ["far", "face-angry"] } size={ ESize.MD } />
						<p>CLICK</p>
					</UiButton>
					<UiButton { ...args } kind={ EButtonTypes.SECONDARY_INVERSE }>
						<UiIcon name={ ["far", "face-angry"] } size={ ESize.MD } />
						<p>CLICK</p>
					</UiButton>
					<UiButton { ...args } kind={ EButtonTypes.SECONDARY_BRAND } disabled>
						<UiIcon name={ ["far", "face-angry"] } size={ ESize.MD } />
						<p>CLICK</p>
					</UiButton>
				</div>
				<div className='flex gap-sm'>
					<UiButton { ...args } kind={ EButtonTypes.TERTIARY_BRAND }>
						<UiIcon name={ ["far", "face-angry"] } size={ ESize.MD } />
						<p>CLICK</p>
					</UiButton>
					<UiButton { ...args } kind={ EButtonTypes.TERTIARY_ACCENT }>
						<UiIcon name={ ["far", "face-angry"] } size={ ESize.MD } />
						<p>CLICK</p>
					</UiButton>
					<UiButton { ...args } kind={ EButtonTypes.TERTIARY_NEUTRAL }>
						<UiIcon name={ ["far", "face-angry"] } size={ ESize.MD } />
						<p>CLICK</p>
					</UiButton>
					<UiButton { ...args } kind={ EButtonTypes.TERTIARY_DESTRUCTIVE }>
						<UiIcon name={ ["far", "face-angry"] } size={ ESize.MD } />
						<p>CLICK</p>
					</UiButton>
					<UiButton { ...args } kind={ EButtonTypes.TERTIARY_INVERSE }>
						<UiIcon name={ ["far", "face-angry"] } size={ ESize.MD } />
						<p>CLICK</p>
					</UiButton>
					<UiButton { ...args } kind={ EButtonTypes.TERTIARY_BRAND } disabled>
						<UiIcon name={ ["far", "face-angry"] } size={ ESize.MD } />
						<p>CLICK</p>
					</UiButton>
				</div>
			</div>
			<div className='flex flex-col gap-sm'>
				<UiButton { ...args } kind={ EButtonTypes.PRIMARY_BRAND } fullWidth>
					<p>CLICK</p>
				</UiButton>
				<UiButton { ...args } kind={ EButtonTypes.SECONDARY_BRAND } fullWidth>
					<p>CLICK</p>
				</UiButton>
				<UiButton { ...args } kind={ EButtonTypes.TERTIARY_BRAND } fullWidth>
					<p>CLICK</p>
				</UiButton>
			</div>
		</div>
	)
};
