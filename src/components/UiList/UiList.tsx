import React from "react";
import { EListItemSize, EListItemSpacing } from "./_types.ts";
import cx from "classnames";

interface IUiListProps {
	children?: React.ReactNode
	size?: EListItemSize
	spacing?: EListItemSpacing
}

const spacingClasses = {
	[EListItemSpacing.DEFAULT]: "gap-sm",
	[EListItemSpacing.COMPACT]: "gap-xxs"
};

const sizeClasses = {
	[EListItemSize.SM]: "text-sm",
	[EListItemSize.MD]: "text-md"
};

export const UiList: React.FC<IUiListProps> = ({
	children,
	spacing = EListItemSpacing.DEFAULT,
	size = EListItemSize.SM
}) => {
	return (
		<ul className={cx(
			"ui-list",
			"grid",
			spacingClasses[spacing],
			sizeClasses[size],
		)}>
			{children}
		</ul>
	);
};
