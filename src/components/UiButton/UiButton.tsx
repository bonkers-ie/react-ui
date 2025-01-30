import React from "react";
import { EButtonSizes, EButtonTypes, EButtonWeight } from "./_types.ts";
import cx from "classnames";
import css from "./UiButton.module.css";

type TButtonProps = {
	kind?: EButtonTypes;
	size?: EButtonSizes;
	fullWidth?: boolean;
	weight?: EButtonWeight;
} & React.HTMLAttributes<HTMLElement> &
	React.ButtonHTMLAttributes<HTMLElement> &
	React.AnchorHTMLAttributes<HTMLElement>

const typeClasses = {
	[EButtonTypes.PRIMARY]: `
		bg-primary-600
		border
		border-primary-600
		shadow-md
		text-white

		hover:bg-primary-700
		active:bg-primary-800
		disabled:bg-secondary-alt-300
		disabled:border-transparent
	`,
	[EButtonTypes.SECONDARY]: `
		bg-secondary-500
		border
		border-secondary-500
		shadow-md
		text-white

		hover:bg-secondary-400
		hover:border-secondary-400
		active:bg-secondary-500
		active:border-secondary-500
		active:text-secondary-alt-300
		disabled:bg-secondary-alt-300
		disabled:border-transparent
	`,
	[EButtonTypes.WARNING]: `
		bg-error-500
		border
		border-error-500
		shadow-md
		text-white

		hover:bg-error-600
		hover:border-error-600
		active:bg-error-700
		active:border-error-700
		disabled:bg-secondary-alt-300
		disabled:border-transparent
	`,
	[EButtonTypes.PRIMARY_OVERLAY]: `
		bg-white
		border
		border-primary-600
		shadow-md
		text-primary-600

		hover:bg-primary-50
		hover:border-primary-700
		hover:text-primary-700
		active:bg-primary-100
		active:border-primary-700
		active:text-primary-700
		disabled:bg-white
		disabled:border-secondary-alt-300
		disabled:shadow-none
		disabled:text-secondary-alt-300
	`,
	[EButtonTypes.SECONDARY_OVERLAY]: `
		bg-white
		border
		border-secondary-500
		shadow-md
		text-secondary-500

		hover:bg-secondary-alt-200
		hover:border-secondary-400
		hover:text-secondary-400
		active:bg-secondary-alt-300
		active:border-secondary-500
		active:text-secondary-500
		disabled:bg-secondary-alt-300
		disabled:border-transparent
	`,
	[EButtonTypes.WARNING_OVERLAY]: `
		bg-white
		border
		border-error-500
		shadow-md
		text-error-500

		hover:bg-error-100
		hover:border-error-600
		hover:text-error-600
		active:bg-error-200
		active:border-error-700
		active:text-error-700
		disabled:bg-secondary-alt-300
		disabled:border-transparent
	`,
	[EButtonTypes.LINK]: `
		bg-transparent
		border
		border-transparent
		text-secondary-500
		underline

		hover:bg-secondary-alt-200
		hover:no-underline
		hover:text-secondary-400
		active:bg-secondary-alt-300
		active:text-secondary-500
		disabled:bg-transparent
		disabled:text-secondary-alt-300
		disabled:underline
	`,
	[EButtonTypes.PRIMARY_BRAND]: `
		bg-primary-600
		border
		border-primary-600
		shadow-md
		text-white

		hover:bg-primary-700
		hover:border-primary-700
		active:bg-primary-800
		active:border-primary-800
		disabled:bg-secondary-alt-300
		disabled:border-transparent
	`,
	[EButtonTypes.PRIMARY_ACCENT]: `
		bg-primary-800
		border
		border-primary-800
		shadow-md
		text-white

		hover:bg-primary-700
		hover:border-primary-700
		active:bg-primary-800
		active:border-primary-800
		active:text-primary-100
		disabled:bg-secondary-alt-300
		disabled:border-transparent
	`,
	[EButtonTypes.PRIMARY_NEUTRAL]: `
		bg-secondary-500
		border
		border-secondary-500
		shadow-md
		text-white

		hover:bg-secondary-400
		hover:border-secondary-400
		active:bg-secondary-500
		active:border-secondary-500
		active:text-secondary-alt-300
		disabled:bg-secondary-alt-300
		disabled:border-transparent
	`,
	[EButtonTypes.PRIMARY_DESTRUCTIVE]: `
		bg-error-500
		border
		border-error-500
		shadow-md
		text-white

		hover:bg-error-600
		hover:border-error-600
		active:bg-error-700
		active:border-error-700
		disabled:bg-secondary-alt-300
		disabled:border-transparent
	`,
	[EButtonTypes.PRIMARY_INVERSE]: `
		bg-white
		border
		border-secondary-500
		shadow-md
		text-secondary-500

		hover:border-secondary-400
		hover:text-secondary-400
		active:bg-secondary-alt-300
		disabled:bg-secondary-alt-700
		disabled:border-secondary-alt-700
	`,
	[EButtonTypes.SECONDARY_BRAND]: `
		bg-white
		border
		border-primary-600
		shadow-md
		text-primary-600

		hover:bg-primary-50
		hover:border-primary-700
		hover:text-primary-700
		active:bg-primary-100
		active:border-primary-700
		active:text-primary-700
		disabled:bg-white
		disabled:border-secondary-alt-300
		disabled:shadow-none
		disabled:text-secondary-alt-300
	`,
	[EButtonTypes.SECONDARY_ACCENT]: `
		bg-white
		border
		border-primary-800
		shadow-md
		text-primary-800

		hover:bg-primary-50
		hover:border-primary-700
		hover:text-primary-700
		active:bg-primary-100
		active:border-primary-800
		active:text-primary-800
		disabled:bg-secondary-alt-300
		disabled:border-transparent
	`,
	[EButtonTypes.SECONDARY_NEUTRAL]: `
		bg-white
		border
		border-secondary-500
		shadow-md
		text-secondary-500

		hover:bg-secondary-alt-200
		hover:border-secondary-400
		hover:text-secondary-400
		active:bg-secondary-alt-300
		active:border-secondary-500
		active:text-secondary-500
		disabled:bg-secondary-alt-300
		disabled:border-transparent
	`,
	[EButtonTypes.SECONDARY_DESTRUCTIVE]: `
		bg-white
		border
		border-error-500
		shadow-md
		text-error-500

		hover:bg-error-100
		hover:border-error-600
		hover:text-error-600
		active:bg-error-200
		active:border-error-700
		active:text-error-700
		disabled:bg-secondary-alt-300
		disabled:border-transparent
	`,
	[EButtonTypes.SECONDARY_INVERSE]: `
		bg-transparent
		border
		border-white
		shadow-md
		text-white

		hover:bg-secondary-500
		hover:border-secondary-alt-300
		hover:text-secondary-alt-300
		active:bg-secondary-400
		active:border-white
		active:text-white
		disabled:bg-secondary-alt-300
		disabled:border-transparent
	`,
	[EButtonTypes.TERTIARY_BRAND]: `
		bg-transparent
		border
		border-transparent
		text-primary-600
		underline

		hover:bg-primary-50
		hover:no-underline
		active:bg-primary-100
		active:text-primary-700
		disabled:bg-transparent
		disabled:text-secondary-alt-300
		disabled:underline
	`,
	[EButtonTypes.TERTIARY_ACCENT]: `
		bg-transparent
		border
		border-transparent
		text-primary-800
		underline

		hover:bg-primary-50
		hover:no-underline
		hover:text-primary-700
		active:bg-primary-100
		active:text-primary-800
		disabled:bg-transparent
		disabled:text-secondary-alt-300
		disabled:underline
	`,
	[EButtonTypes.TERTIARY_NEUTRAL]: `
		bg-transparent
		border
		border-transparent
		text-secondary-500
		underline

		hover:bg-secondary-alt-200
		hover:no-underline
		hover:text-secondary-400
		active:bg-secondary-alt-300
		active:text-secondary-500
		disabled:bg-transparent
		disabled:text-secondary-alt-300
		disabled:underline
	`,
	[EButtonTypes.TERTIARY_DESTRUCTIVE]: `
		bg-transparent
		border
		border-transparent
		text-error-500
		underline

		hover:bg-error-100
		hover:no-underline
		hover:text-error-600
		active:bg-error-200
		active:text-error-700
		disabled:bg-transparent
		disabled:text-secondary-alt-300
		disabled:underline
	`,
	[EButtonTypes.TERTIARY_INVERSE]: `
		bg-transparent
		border
		border-transparent
		text-white
		underline

		hover:bg-secondary-500
		hover:no-underline
		hover:text-secondary-alt-300
		active:bg-secondary-400
		active-text-white
		disabled:bg-transparent
		disabled:text-secondary-alt-700
		disabled:underline
	`,
};

const isInverseType = (type: EButtonTypes): boolean => {
	return (
		type === EButtonTypes.PRIMARY_INVERSE
		|| type === EButtonTypes.SECONDARY_INVERSE
		|| type === EButtonTypes.TERTIARY_INVERSE
	);
};

const focusColorClasses = {
	background: (type: EButtonTypes) =>
		isInverseType(type) ? "focus-visible:before:bg-secondary-500" : "focus-visible:before:bg-white",
	border: (type: EButtonTypes) =>
		isInverseType(type) ? "focus-visible:before:border-secondary-alt-400" : "focus-visible:before:border-primary-600"
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
	kind = EButtonTypes.PRIMARY_BRAND,
	size = EButtonSizes.DEFAULT,
	fullWidth = false,
	disabled = false,
	children,
	weight = EButtonWeight.BOLD,
	onClick,
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
				"flex",
				"gap-xs",
				"justify-center",
				"items-center",
				"relative",
				"transition-all",
				"focus-visible:before:border-2",
				"focus-visible:before:rounded-2xl",
				"focus-visible:before:absolute",
				"focus-visible:before:-translate-x-1/2",
				"focus-visible:before:-translate-y-1/2",
				"focus-visible:before:left-1/2",
				"focus-visible:before:top-1/2",
				"focus-visible:before:inset-0",
				"focus-visible:before:z-[-1]",
				"focus-visible:before:w-[calc(100%+12px)]",
				"focus-visible:before:h-[calc(100%+10px)]",
				focusColorClasses.background(kind),
				focusColorClasses.border(kind),
				typeClasses[kind],
				sizeClasses[size],
				weightClasses[weight],
				{
					"w-full": fullWidth,
					"pointer-events-none": disabled,
				}
			) }
			disabled={ disabled }
		>
			{ children }
		</button>
	);
};
