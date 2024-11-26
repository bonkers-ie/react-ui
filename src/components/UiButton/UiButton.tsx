import React from "react";
import { EButtonSizes, EButtonTypes, EButtonWeight } from "./_types.ts";
import cx from "classnames";

interface IButtonProps {
	kind?: EButtonTypes;
	size?: EButtonSizes;
	fullWidth?: boolean;
	disabled?: boolean;
	children?: React.ReactNode;
	weight?: EButtonWeight;
}

const kindClasses = {
	[EButtonTypes.PRIMARY]: `
		text-white
		bg-primary

		hover:bg-primary-600
		active:bg-primary-700
		disabled:bg-primary-300
	`,
	[EButtonTypes.SECONDARY]: `
		bg-secondary
		text-white

		hover:bg-secondary-600
		active:bg-secondary-700
		disabled:bg-secondary-300
	`,
	[EButtonTypes.ERROR]: `
		bg-error
		text-white

		hover:bg-error-600
		active:bg-error-700
		disabled:bg-error-300
	`,
	[EButtonTypes.WARNING]: `
		bg-warning
		text-white

		hover:bg-warning-600
		active:bg-warning-700
		disabled:bg-warning-300
	`,
	[EButtonTypes.PRIMARY_OVERLAY]: `
		border
		border-primary
		text-primary

		hover:border-transparent
		hover:bg-primary-600
		hover:text-white

		active:border-transparent
		active:bg-primary-700
		active:text-white

		disabled:border-primary-300
		disabled:text-primary-300
	`,
	[EButtonTypes.SECONDARY_OVERLAY]: `
		border
		border-secondary
		text-secondary
		hover:border-transparent
		hover:bg-secondary-600

		hover:text-white
		active:border-transparent
		active:bg-secondary-700

		active:text-white
		disabled:border-secondary-300
		disabled:text-secondary-300
	`,
	[EButtonTypes.ERROR_OVERLAY]: `
		border border-error
		text-error

		hover:border-transparent
		hover:bg-error-600
		hover:text-white

		active:border-transparent
		active:bg-error-700
		active:text-white

		disabled:border-error-300
		disabled:text-error-300
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

		disabled:border-warning-300
		disabled:text-warning-300
	`,
	[EButtonTypes.LINK]: `
		text-accent-alt

		hover:text-accent-alt-600
		active:text-accent-alt-700
		disabled:text-accent-alt-300
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

export const UiButton: React.FC<IButtonProps> = ({
	kind = EButtonTypes.PRIMARY,
	size = EButtonSizes.DEFAULT,
	fullWidth = false,
	disabled = false,
	children,
	weight = EButtonWeight.BOLD
}) => {
	return (
		<button
			className={cx(
				"ui-button",
				"text-base",
				"touch-manipulation",
				"whitespace-nowrap",
				"rounded-xl",
				"leading-none",

				kindClasses[kind],
				sizeClasses[size],
				weightClasses[weight],
				{
					"w-full": fullWidth,
					"pointer-events-none": disabled,
				}
			)}
			disabled={disabled}
		>
			{children}
		</button>
	);
};
