import React from "react";
import { ETableKind } from "./_types";
import cn from "classnames";

type TTableProps = {
	kind?: ETableKind;
	header?: React.ReactNode;
} & React.HTMLAttributes<HTMLTableElement>;

const kindClasses = {
	[ETableKind.DEFAULT]: "",
	[ETableKind.SECONDARY]: "[&>tr:nth-child(odd)>td]:bg-secondary-alt-200",
	[ETableKind.SECONDARY_INVERTED]: "[&>tr:nth-child(even)>td]:bg-secondary-alt-200",
};

export const UiTable: React.FC<TTableProps> = ({
	kind = ETableKind.SECONDARY_INVERTED,
	header,
	children,
	...rest
}) => {
	return (
		<table { ...rest }>
			{ header && (<thead>{ header }</thead>) }
			<tbody className={ cn("rounded-xl", kindClasses[kind]) }>
				{ children }
			</tbody>
		</table>
	);
};
