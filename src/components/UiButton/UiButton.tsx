import React from "react";
import { EButtonSizes, EButtonTypes, EButtonWeight } from "./_types.ts";
import cx from "classnames";
import css from "./UiButton.module.css";

type TButtonProps = {
	kind?: EButtonTypes;
	size?: EButtonSizes;
	fullWidth?: boolean;
	weight?: EButtonWeight;
	prefix?: React.ReactNode;
	postfix?: React.ReactNode;
} & React.HTMLAttributes<HTMLElement> &
React.ButtonHTMLAttributes<HTMLElement> &
React.AnchorHTMLAttributes<HTMLElement>

const kindClasses = {
	[EButtonTypes.PRIMARY]: `
		text-white
		bg-primary-600

		hover:bg-primary-700
		active:bg-primary-800
		disabled:bg-secondary-alt-300
	`,
	[EButtonTypes.SECONDARY]: `
		bg-secondary
		text-white

		hover:bg-secondary-400
		active:bg-secondary-500
		disabled:bg-secondary-alt-300
	`,
	[EButtonTypes.ERROR]: `
		bg-error
		text-white

		hover:bg-error-600
		active:bg-error-700
		disabled:bg-secondary-alt-300
	`,
	[EButtonTypes.WARNING]: `
		bg-warning
		text-white

		hover:bg-warning-600
		active:bg-warning-700
		disabled:bg-secondary-alt-300
	`,
	[EButtonTypes.PRIMARY_OVERLAY]: `
		bg-white
		border
		border-primary-600
		text-primary-600

		hover:border-primary-700
		hover:bg-primary-50
		hover:text-primary-700

		active:border-primary-700
		active:bg-primary-100
		active:text-primary-700

		disabled:border-secondary-alt-300
		disabled:text-secondary-alt-300
	`,
	[EButtonTypes.SECONDARY_OVERLAY]: `
		bg-white
		border
		border-secondary
		text-secondary

		hover:border-secondary-400
		hover:bg-secondary-alt-200
		hover:text-secondary-400

		active:border-secondary-500
		active:bg-secondary-alt-300
		active:text-secondary-500

		active:text-white
		disabled:border-secondary-alt-300
		disabled:text-secondary-alt-300
	`,
	[EButtonTypes.ERROR_OVERLAY]: `
		bg-white
		border
		border-error
		text-error

		hover:border-error-600
		hover:bg-error-100
		hover:text-error-600

		active:border-error-700
		active:bg-error-200
		active:text-error-700

		disabled:border-secondary-alt-300
		disabled:text-secondary-alt-300
	`,
	[EButtonTypes.WARNING_OVERLAY]: `
		border
		border-warning
		text-warning

		hover:border-transparent
		hover:bg-warning-600
		hover:text-white

		active:border-transparent
		active:bg-warning-700
		active:text-white

		disabled:border-secondary-alt-300
		disabled:text-secondary-alt-300
	`,
	[EButtonTypes.LINK]: `
		bg-transparent
		box-shadow-none
		text-secondary
		text-decoration: underline

		hover:bg-secondary-alt-200
		hover:text-secondary-400
		hover:text-decoration: none
		active:bg-secondary-alt-300
		active:text-secondary-500
		disabled:text-secondary-alt-300
	`,
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
				"transition-all",

				kindClasses[kind],
				sizeClasses[size],
				weightClasses[weight],
				{
					"w-full": fullWidth,
					"pointer-events-none": disabled,
					"shadow-md": kind !== EButtonTypes.LINK && !disabled
				}
			) }
			disabled={ disabled }
		>
			{ prefix && <div className="prefix">{ prefix }</div> }
			{ children }
			{ postfix && <div className="postfix">{ postfix }</div> }
		</button>
	);
};
