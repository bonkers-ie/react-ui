import React from "react";

interface IUiListItemProps {
	children: React.ReactNode
	prefix?: React.ReactNode
}
export const UiListItem: React.FC<IUiListItemProps> = ({ children, prefix }) => {

	return (
		<li className="ui-list-item flex gap-xxxs">
			{
				prefix
					? <span className="ui-list-item__prefix-wrapper w-[1em]">
						{ prefix }
					</span>
					: null
			}
			{
				children
					? <span className="ui-list-item__children">
						{ children }
					</span>
					: null
			}
		</li>
	);
};
