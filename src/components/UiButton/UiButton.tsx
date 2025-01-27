import React from "react";
import { EButtonSizes, EButtonTypes, EButtonWeight, EButtonVariants } from "./_types.ts";
import cx from "classnames";
import css from "./UiButton.module.css";

type TButtonProps = {
	kind?: EButtonTypes;
	variant?: EButtonVariants;
	size?: EButtonSizes;
	fullWidth?: boolean;
	weight?: EButtonWeight;
	prefix?: React.ReactNode;
	postfix?: React.ReactNode;
} & React.HTMLAttributes<HTMLElement> &
React.ButtonHTMLAttributes<HTMLElement> &
React.AnchorHTMLAttributes<HTMLElement>

const typeClasses = {
	[EButtonTypes.PRIMARY]: `
		border
		shadow-md
		text-white
	`,
	[EButtonTypes.SECONDARY]: `
		bg-white
		border
		shadow-md
	`,
	[EButtonTypes.TERTIARY]: `
		bg-transparent
		border-transparent
		box-shadow-none
		underline
	`,
};

const variantClasses = {
	[EButtonTypes.PRIMARY]: {
		[EButtonVariants.BRAND]: `
			text-white
			bg-primary-600
			border-primary-600
			hover:bg-primary-700
			active:bg-primary-800
		`,
		[EButtonVariants.ACCENT]: `
			text-white
			bg-primary-800
			border-primary-800
			hover:bg-primary-700
			active:bg-primary-800
		`,
		[EButtonVariants.NEUTRAL]: `
			bg-secondary
			border-secondary
			text-white
			hover:bg-secondary-400
			active:bg-secondary-500
		`,
		[EButtonVariants.DESTRUCTIVE]: `
			bg-error
			border-error
			text-white
			hover:bg-error-600
			active:bg-error-700
		`,
	},
	[EButtonTypes.SECONDARY]: {
		[EButtonVariants.BRAND]: `
			text-primary-600
			bg-white
			border-primary-600
			hover:bg-primary-50
			active:bg-primary-100
			active:border-primary-700
			active:text-primary-700
		`,
		[EButtonVariants.ACCENT]: `
			text-primary-800
			bg-white
			border-primary-800
			hover:bg-primary-50
			hover:border-primary-700
			hover:text-primary-700
			active:bg-primary-100
			active:border-primary-800
			active:text-primary-800
		`,
		[EButtonVariants.NEUTRAL]: `
			text-secondary
			bg-white
			border-secondary
			hover:bg-secondary-alt-200
			hover:border-secondary-400
			hover:text-secondary-400
			active:bg-secondary-alt-300
		`,
		[EButtonVariants.DESTRUCTIVE]: `
			text-error
			bg-white
			border-error
			hover:bg-error-100
			hover:border-error-600
			hover:text-error-600
			active:bg-error-200
			active:border-error-700
			active:text-error-700
		`,
	},
	[EButtonTypes.TERTIARY]: {
		[EButtonVariants.BRAND]: `
			text-primary-600
			bg-transparent
			border-transparent
			hover:bg-primary-50
			hover:no-underline
			active:bg-primary-100
		`,
		[EButtonVariants.ACCENT]: `
			text-primary-800
			bg-transparent
			border-transparent
			hover:bg-primary-50
			active:bg-primary-100
		`,
		[EButtonVariants.NEUTRAL]: `
			text-secondary
			bg-transparent
			border-transparent
			hover:bg-secondary-50
			active:bg-secondary-100
		`,
		[EButtonVariants.DESTRUCTIVE]: `
			text-error
			bg-transparent
			border-transparent
			hover:bg-error-50
			active:bg-error-100
		`,
	},
};

const disabledStyles = {
	"disabled:bg-secondary-alt-300": true,
	"disabled:border-transparent": true,
	"disabled:box-shadow-none": true,
	"disabled:text-white": true,
	"disabled:no-underline": true,
};

const sizeClasses = {
	[EButtonSizes.SMALL]: "px-md py-xxs",
	[EButtonSizes.MEDIUM]: "p-sm",
	[EButtonSizes.LARGE]: "p-md",
	[EButtonSizes.DEFAULT]: "px-md py-sm",
};

const weightClasses = {
	[EButtonWeight.DEFAULT]: "font-medium",
	[EButtonWeight.BOLD]: "font-bold",
};

export const UiButton: React.FC<TButtonProps> = ({
	kind = EButtonTypes.PRIMARY,
	variant = EButtonVariants.BRAND,
	size = EButtonSizes.DEFAULT,
	fullWidth = false,
	disabled = false,
	children,
	weight = EButtonWeight.BOLD,
	onClick,
	prefix,
	postfix,
	...rest
}) => {
	return (
		<button
			{ ...rest }
			onClick={ onClick }
			className={ cx(
				css.UiButton,
				"text-base",
				"touch-manipulation",
				"whitespace-nowrap",
				"rounded-xl",
				"leading-none",
				"inline-flex",
				"justify-center",
				"items-center",
				"relative",
				"transition-all",
				"focus:before:bg-white",
				"focus:before:border-2",
				"focus:before:rounded-2xl",
				"focus:before:border-primary-600",
				"focus:before:absolute",
				"focus:before:-translate-x-1/2",
				"focus:before:-translate-y-1/2",
				"focus:before:left-1/2",
				"focus:before:top-1/2",
				"focus:before:inset-0",
				"focus:before:z-[-1]",
				"focus:before:w-[calc(100%+10px)]",
				"focus:before:h-[calc(100%+10px)]",
				typeClasses[kind],
				variantClasses[kind][variant],
				sizeClasses[size],
				weightClasses[weight],
				{
					"w-full": fullWidth,
					"pointer-events-none": disabled,
					"shadow-md": kind !== EButtonTypes.TERTIARY && !disabled

				},
				disabled && disabledStyles
			) }
			disabled={ disabled }
		>
			{ prefix ? prefix  : null }
			{ children }
			{ postfix ? postfix  : null }
		</button>
	);
};
