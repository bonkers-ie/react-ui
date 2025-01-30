
import React from "react";
import cx from "classnames";
import { EBadgeOffset } from "./_types";

import { EColors } from "../UiTypography";

type UiNotificationBadge = {
	offset?: EBadgeOffset,
	children: React.ReactNode;
	color?: EColors;
};

const colorClasses = {
	[EColors.WHITE]: "bg-white",
	[EColors.BLACK]: "bg-black",
	[EColors.TRANSPARENT]: "bg-transparent",
	[EColors.CURRENT]: "bg-current",

	[EColors.PRIMARY]: "bg-primary",
	[EColors.PRIMARY_50]: "bg-primary-50",
	[EColors.PRIMARY_100]: "bg-primary-100",
	[EColors.PRIMARY_200]: "bg-primary-200",
	[EColors.PRIMARY_300]: "bg-primary-300",
	[EColors.PRIMARY_400]: "bg-primary-400",
	[EColors.PRIMARY_500]: "bg-primary-500",
	[EColors.PRIMARY_600]: "bg-primary-600",
	[EColors.PRIMARY_700]: "bg-primary-700",
	[EColors.PRIMARY_800]: "bg-primary-800",
	[EColors.PRIMARY_900]: "bg-primary-900",

	[EColors.PRIMARY_ALT]: "bg-primary-alt",
	[EColors.PRIMARY_ALT_300]: "bg-primary-alt-300",
	[EColors.PRIMARY_ALT_400]: "bg-primary-alt-400",
	[EColors.PRIMARY_ALT_500]: "bg-primary-alt-500",
	[EColors.PRIMARY_ALT_600]: "bg-primary-alt-600",
	[EColors.PRIMARY_ALT_700]: "bg-primary-alt-700",

	[EColors.WARNING]: "bg-warning",
	[EColors.WARNING_300]: "bg-warning-300",
	[EColors.WARNING_400]: "bg-warning-400",
	[EColors.WARNING_500]: "bg-warning-500",
	[EColors.WARNING_600]: "bg-warning-600",
	[EColors.WARNING_700]: "bg-warning-700",

	[EColors.SECONDARY]: "bg-secondary",
	[EColors.SECONDARY_300]: "bg-secondary-300",
	[EColors.SECONDARY_400]: "bg-secondary-400",
	[EColors.SECONDARY_500]: "bg-secondary-500",
	[EColors.SECONDARY_600]: "bg-secondary-600",
	[EColors.SECONDARY_700]: "bg-secondary-700",

	[EColors.SECONDARY_ALT]: "bg-secondary-alt",
	[EColors.SECONDARY_ALT_200]: "bg-secondary-alt-200",
	[EColors.SECONDARY_ALT_300]: "bg-secondary-alt-300",
	[EColors.SECONDARY_ALT_400]: "bg-secondary-alt-400",
	[EColors.SECONDARY_ALT_500]: "bg-secondary-alt-500",
	[EColors.SECONDARY_ALT_600]: "bg-secondary-alt-600",
	[EColors.SECONDARY_ALT_700]: "bg-secondary-alt-700",

	[EColors.ERROR]: "bg-error",
	[EColors.ERROR_100]: "bg-error-100",
	[EColors.ERROR_200]: "bg-error-200",
	[EColors.ERROR_300]: "bg-error-300",
	[EColors.ERROR_400]: "bg-error-400",
	[EColors.ERROR_500]: "bg-error-500",
	[EColors.ERROR_600]: "bg-error-600",
	[EColors.ERROR_700]: "bg-error-700",

	[EColors.ACCENT]: "bg-accent",
	[EColors.ACCENT_300]: "bg-accent-300",
	[EColors.ACCENT_500]: "bg-accent-500",
	[EColors.ACCENT_600]: "bg-accent-600",
	[EColors.ACCENT_700]: "bg-accent-700",

	[EColors.ACCENT_ALT]: "bg-accent-alt",
	[EColors.ACCENT_ALT_300]: "bg-accent-alt-300",
	[EColors.ACCENT_ALT_400]: "bg-accent-alt-400",
	[EColors.ACCENT_ALT_500]: "bg-accent-alt-500",
	[EColors.ACCENT_ALT_600]: "bg-accent-alt-600",
	[EColors.ACCENT_ALT_700]: "bg-accent-alt-700",
};

const offsetClasses = {
	[EBadgeOffset.DEFAULT]: "-right-xxxs -top-xxxs",
	[EBadgeOffset.OFFSET_BOTTOM_RIGHT]: "-right-xxxs -bottom-xxxs",
	[EBadgeOffset.OFFSET_TOP_LEFT]: "-left-xxxs -top-xxxs",
	[EBadgeOffset.OFFSET_BOTTOM_LEFT]: "-left-xxxs -bottom-xxxs",
};

export const UiNotificationBadge: React.FC<UiNotificationBadge> = ({
	offset,
	children,
	color,
}) => {
	if (!children) {
		return null;
	}

	return (
		<div
			className={ cx(
				"notification-badge",
				"p-xxxs",
				"h-sm",
				"min-w-sm",
				"absolute",
				"inline-flex",
				"items-center",
				"rounded-full",
				"border",
				"border-white",
				"text-center",
				"text-xxs",
				"font-bold",
				"leading-none",
				"text-white",
				"whitespace-nowrap",
				"gap-xxxs",
				color && colorClasses[color],
				offset && offsetClasses[offset]
			) }
		>
			{ children }
		</div>
	);
};
