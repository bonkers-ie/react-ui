import React from "react";
import { ERowKind } from "./_types";
import cn from "classnames";

type TRowProps = {
	kind?: ERowKind;
} & React.HTMLAttributes<HTMLTableRowElement>;

export const UiTableRow: React.FC<TRowProps> = ({ kind, children, ...rest }) => {
	return (
		<tr
			className={ cn(
				"text-center",
				"[&>td:last-of-type]:rounded-r-xxs",
				"[&>td:last-of-type]:text-right",
				"[&>td:first-of-type]:text-left",
				"[&>td:first-of-type]:rounded-l-xxs",
				{
					"bg-secondary-alt-200": kind === ERowKind.SECONDARY
				}
			)
			}
			{ ...rest }
		>
			{ children }
		</tr>
	);
};
