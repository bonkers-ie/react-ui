import React from "react";
import { ETextAlign, ETextTransform, ETextWeight, ETypographySizes } from "./_types.ts";
import { EColors } from "../../_types/colors.ts";
import cx from "classnames";

type TUiTypographyProps<T extends keyof React.JSX.IntrinsicElements> = {
	tag?: T;
	children?: React.ReactNode;
	underline?: boolean;
	lineHeight?: boolean;
	size?: ETypographySizes;
	textTransform?: ETextTransform;
	align?: ETextAlign;
	weight?: ETextWeight;
	color?: EColors;
} & Omit<React.JSX.IntrinsicElements[T], "children" | "ref">;

const sizeClasses = {
	[ETypographySizes.MD]: "text-md",
	[ETypographySizes.XXS]: "text-xxs",
	[ETypographySizes.XS]: "text-xs",
	[ETypographySizes.SM]: "text-sm",
	[ETypographySizes.LG]: "text-lg",
	[ETypographySizes.XL]: "text-xl",
	[ETypographySizes.XXL]: "text-2xl",
	[ETypographySizes.XXXL]: "text-3xl",
	[ETypographySizes.XXXXL]: "text-4xl",
	[ETypographySizes.XXXXXL]: "text-5xl",
};

const textTransformClasses = {
	[ETextTransform.UPPERCASE]: "uppercase",
	[ETextTransform.LOWERCASE]: "lowercase",
	[ETextTransform.NONE]: "normal-case",
	[ETextTransform.CAPITALIZE]: "capitalize",
};

const alignClasses = {
	[ETextAlign.LEFT]: "text-left",
	[ETextAlign.RIGHT]: "text-right",
	[ETextAlign.CENTER]: "text-center",
};

const weightClasses = {
	[ETextWeight.LIGHT]: "font-light",
	[ETextWeight.REGULAR]: "font-medium",
	[ETextWeight.SEMI_BOLD]: "font-bold",
	[ETextWeight.BOLD]: "font-black",
};

const colorClasses = {
	[EColors.WHITE]: "text-white",
	[EColors.BLACK]: "text-black",
	[EColors.TRANSPARENT]: "text-transparent",
	[EColors.CURRENT]: "text-current",

	[EColors.PRIMARY]: "text-primary",
	[EColors.PRIMARY_50]: "text-primary-50",
	[EColors.PRIMARY_100]: "text-primary-100",
	[EColors.PRIMARY_200]: "text-primary-200",
	[EColors.PRIMARY_300]: "text-primary-300",
	[EColors.PRIMARY_400]: "text-primary-400",
	[EColors.PRIMARY_500]: "text-primary-500",
	[EColors.PRIMARY_600]: "text-primary-600",
	[EColors.PRIMARY_700]: "text-primary-700",
	[EColors.PRIMARY_800]: "text-primary-800",
	[EColors.PRIMARY_900]: "text-primary-900",

	[EColors.PRIMARY_ALT]: "text-primary-alt",
	[EColors.PRIMARY_ALT_300]: "text-primary-alt-300",
	[EColors.PRIMARY_ALT_400]: "text-primary-alt-400",
	[EColors.PRIMARY_ALT_500]: "text-primary-alt-500",
	[EColors.PRIMARY_ALT_600]: "text-primary-alt-600",
	[EColors.PRIMARY_ALT_700]: "text-primary-alt-700",

	[EColors.WARNING]: "text-warning",
	[EColors.WARNING_300]: "text-warning-300",
	[EColors.WARNING_400]: "text-warning-400",
	[EColors.WARNING_500]: "text-warning-500",
	[EColors.WARNING_600]: "text-warning-600",
	[EColors.WARNING_700]: "text-warning-700",

	[EColors.SECONDARY]: "text-secondary",
	[EColors.SECONDARY_300]: "text-secondary-300",
	[EColors.SECONDARY_400]: "text-secondary-400",
	[EColors.SECONDARY_500]: "text-secondary-500",
	[EColors.SECONDARY_600]: "text-secondary-600",
	[EColors.SECONDARY_700]: "text-secondary-700",

	[EColors.SECONDARY_ALT]: "text-secondary-alt",
	[EColors.SECONDARY_ALT_200]: "text-secondary-alt-200",
	[EColors.SECONDARY_ALT_300]: "text-secondary-alt-300",
	[EColors.SECONDARY_ALT_400]: "text-secondary-alt-400",
	[EColors.SECONDARY_ALT_500]: "text-secondary-alt-500",
	[EColors.SECONDARY_ALT_600]: "text-secondary-alt-600",
	[EColors.SECONDARY_ALT_700]: "text-secondary-alt-700",

	[EColors.ERROR]: "text-error",
	[EColors.ERROR_100]: "text-error-100",
	[EColors.ERROR_200]: "text-error-200",
	[EColors.ERROR_300]: "text-error-300",
	[EColors.ERROR_400]: "text-error-400",
	[EColors.ERROR_500]: "text-error-500",
	[EColors.ERROR_600]: "text-error-600",
	[EColors.ERROR_700]: "text-error-700",

	[EColors.ACCENT]: "text-accent",
	[EColors.ACCENT_300]: "text-accent-300",
	[EColors.ACCENT_500]: "text-accent-500",
	[EColors.ACCENT_600]: "text-accent-600",
	[EColors.ACCENT_700]: "text-accent-700",

	[EColors.ACCENT_ALT]: "text-accent-alt",
	[EColors.ACCENT_ALT_300]: "text-accent-alt-300",
	[EColors.ACCENT_ALT_400]: "text-accent-alt-400",
	[EColors.ACCENT_ALT_500]: "text-accent-alt-500",
	[EColors.ACCENT_ALT_600]: "text-accent-alt-600",
	[EColors.ACCENT_ALT_700]: "text-accent-alt-700",
};

export const UiTypography = <T extends keyof React.JSX.IntrinsicElements> (
	{
		children,
		tag,
		underline = false,
		lineHeight = false,
		size,
		textTransform,
		align,
		weight,
		color,
		className,
		...rest
	}: TUiTypographyProps<T> ): React.JSX.Element => {

	const classes = cx(
		"ui-typography",
		{
			underline
		},
		lineHeight ? "leading-normal" : "leading-none",
		size && sizeClasses[size],
		textTransform && textTransformClasses[textTransform],
		align && alignClasses[align],
		weight && weightClasses[weight],
		color && colorClasses[color],
		className
	);

	return React.createElement(tag || "p", {
		className: classes,
		...rest
	}, children);
};
