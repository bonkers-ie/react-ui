
import React from "react";
import cx from "classnames";
import { EBadgeOrigin } from "./_types";

type UiNotificationBadge = {
	origin?: EBadgeOrigin,
	children?: React.ReactNode;

}

export const UiNotificationBadge: React.FC<UiNotificationBadge> = ({
	origin,
	children

}) => {
	return (
		<div className="relative size-xl rounded-full bg-primary">
			<div
				className={ cx(
					"notification-badge",
					"p-[2px]",
					"absolute",
					"h-sm",
					"min-w-sm",
					"rounded-full",
					"border",
					"border-white",
					"bg-error",
					"text-center",
					"text-xxs",
					"font-bold",
					"leading-none",
					"text-white",
					{
						"right-0 top-0": origin === EBadgeOrigin.DEFAULT,
						"-right-xxxs -top-xxxs": origin === EBadgeOrigin.OFFSET_TOP_RIGHT,
					}
				) }

			>
				{ children }
			</div>
		</div>
	);
};
