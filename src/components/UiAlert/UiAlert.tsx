
import React from "react";
import { EAlertTypes } from "./_types";
import { ETypographySizes, UiTypography } from "../UiTypography";
import cx from "classnames";

interface IUiAlert {
    children: React.ReactNode,
    kind?: EAlertTypes,
    icon?: React.ReactNode
}

const kindClasses = {
	[EAlertTypes.PRIMARY]: "border-primary text-primary",
	[EAlertTypes.SECONDARY]: "'border-secondary text-secondary",
	[EAlertTypes.ERROR]: "border-error text-error",
	[EAlertTypes.WARNING]: "border-warning text-warning"

};

export const UiAlert: React.FC<IUiAlert> = ({
	children,
	kind = EAlertTypes.PRIMARY,
	icon
}) => {
	return (
		<div className={cx(
			"ui-alert",
			"flex",
			"gap-sm",
			"rounded-xl",
			"border",
			"bg-white",
			"p-sm",
			kindClasses[kind],
		)}>
			{icon}
			{children
				? (
					<UiTypography size={ETypographySizes.XS} className="leading-normal text-secondary-500">
						{children}
					</UiTypography>
				)
				: null}
		</div>
	);
};
