
import React from "react";
import { EAlertTypes } from "./_types";
import cx from "classnames";

interface IUiAlert {
    children: React.ReactNode,
    kind?: EAlertTypes
}

const kindClasses = {
	[EAlertTypes.PRIMARY]: "border-primary text-primary ",
	[EAlertTypes.SECONDARY]: "'border-secondary text-secondary",
	[EAlertTypes.ERROR]: "border-error text-error",
	[EAlertTypes.WARNING]: "border-warning text-warning"

};

export const UiAlert: React.FC<IUiAlert> = ({
	children,
	kind = EAlertTypes.PRIMARY
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
			"leading-normal",
			"text-xs",
			kindClasses[kind],
		)}>
			{children}
		</div>
	);
};
