import React from "react";

interface IUiListItemProps {
	children: React.ReactNode
	prefix?: React.ReactNode
}
export const UiListItem: React.FC<IUiListItemProps> = ({ children, prefix }) => {

	return (
		<li className="flex gap-xxxs">
			{
				prefix
					? <span className="w-[1em]">
						{ prefix }
					</span>
					: null
			}
			{
				children
					? <span>
						{ children }
					</span>
					: null
			}
		</li>
	);
};
