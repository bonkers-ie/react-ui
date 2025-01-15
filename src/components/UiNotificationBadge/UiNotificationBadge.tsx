
import React from "react";
import cx from "classnames";
import { EBadgeOrigin } from "./_types";

type UiNotificationBadge = {
	origin?: EBadgeOrigin,
	notificationCount: number | React.ReactNode;
	showZero?: boolean;
};

export const UiNotificationBadge: React.FC<UiNotificationBadge> = ({
	origin,
	notificationCount,
	showZero = false

}) => {
	const isZero = notificationCount === 0;
	const shouldRender = showZero || (!isZero && notificationCount);

	return (
		<div className="relative size-xl rounded-full bg-primary">
			{ shouldRender && (
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
					{ notificationCount }
				</div>
			) }
		</div>
	);

};
