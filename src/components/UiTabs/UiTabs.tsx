import React from "react";
import cx from "classnames";

type UiTabsProps ={
	tabs: string[]
	tabsModel  : string,
	onTabChange: (val: string) => void
}

export const UiTabs: React.FC<UiTabsProps> = ({
	tabs,
	tabsModel,
	onTabChange
}) => {

	return (
		<ul className={ cx(
			"ui-tabs",
			"grid",
			"grid-flow-col",
			"rounded-full",
			"bg-secondary-alt-200",
			"p-[2px]"

		) }>
			{ tabs.map((tab) => (
				<li
					key={ tab }
					className={ cx(
						"rounded-full",
						"text-center",
						tabsModel === tab && "bg-white"
					) }
				>
					<label className={ cx(
						"block",
						"cursor-pointer",
						"px-md",
						"py-xxs"
					) }>
						<input className={ cx(
							"absolute",
							"appearance-none"
						) }
						type="radio"
						value={ tab }
						checked={ tabsModel === tab }
						onChange={ ()=> onTabChange(tab) }>
						</input>

						<span className={ cx(
							"font-bold",
							"text-xs"
						) }>
							{ tab }
						</span>

					</label>

				</li>
			)) }
		</ul>
	);
};
