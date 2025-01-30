
import React from "react";
import cx from "classnames";
import { EBadgeOffset, EBadgeSizes, EBadgeTypes } from "./_types";

type UiNotificationBadge = {
	offset?: EBadgeOffset,
	children: React.ReactNode;
	kind?: EBadgeTypes;
	size?: EBadgeSizes;

};

const offsetClasses = {
	[EBadgeOffset.DEFAULT]: "-right-xxxs -top-xxxs",
	[EBadgeOffset.OFFSET_BOTTOM_RIGHT]: "-right-xxxs -bottom-xxxs",
	[EBadgeOffset.OFFSET_TOP_LEFT]: "-left-xxxs -top-xxxs",
	[EBadgeOffset.OFFSET_BOTTOM_LEFT]: "-left-xxxs -bottom-xxxs",
};

const kindClasses = {
	[EBadgeTypes.DEFAULT]: `
		bg-error-500

	`,
	[EBadgeTypes.PRIMARY]: `
		bg-primary-800

	`,

};

const sizeClasses = {
	[EBadgeSizes.DEFAULT]: `
		h-sm
		min-w-sm
		p-xxxs
		text-xxs
	`,
	[EBadgeSizes.LARGE]: `
		h-lg
		min-w-lg
		p-xxs
		justify-center
		text-2xl
		border-2

	`

};

export const UiNotificationBadge: React.FC<UiNotificationBadge> = ({
	offset,
	children,
	kind = EBadgeTypes.DEFAULT,
	size = EBadgeSizes.DEFAULT

}) => {
	if (!children) {
		return null;
	}

	return (
		<div
			className={ cx(
				"notification-badge",
				"absolute",
				"inline-flex",
				"items-center",
				"rounded-full",
				"border",
				"border-white",
				"text-center",
				"font-bold",
				"leading-none",
				"text-white",
				"whitespace-nowrap",
				"gap-xxxs",
				offset && offsetClasses[offset],
				kindClasses[kind],
				sizeClasses[size]
			) }
		>
			{ children }
		</div>
	);
};
