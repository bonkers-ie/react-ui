
import React from "react";
import { EAlertTypes } from "./_types";
import cx from "classnames";
import { UiIcon } from "../UiIcon";
import { ESize } from "../../_types/sizing";
import { type IconProp } from "@fortawesome/fontawesome-svg-core";

interface IUiAlert {
	children: React.ReactNode,
	kind?: EAlertTypes,
	icon?: IconProp
}

const kindClasses = {
	[EAlertTypes.PRIMARY]: "border-primary text-primary ",
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
		<div className={ cx(
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
		) }>

			{ icon ? <UiIcon name={ icon } size={ ESize.SM } /> : null }
			{ children }
		</div>
	);
};
