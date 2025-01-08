import React from "react";
import cx from "classnames";
import { UiIcon } from "../UiIcon";
import { ESize } from "../../_types/sizing";
import { type IconProp } from "@fortawesome/fontawesome-svg-core";

interface IUiRadioFancy {
	children: React.ReactNode
	icon?: IconProp
	disabled?: boolean;
	subHeader?: string;

}

export const UiRadioFancy: React.FC<IUiRadioFancy> = ({
	children,
	icon,
	disabled,
	subHeader
}) => {
	return (
		<label className={ cx(
			"ui-radio-fancy",
			"relative",
			{
				"pointer-events-none": disabled
			}
		) }>
			<input className="group peer absolute appearance-none" type="radio"/>

			<div className={ cx(
				"box-border",
				"size-full",
				"cursor-pointer",
				"rounded-lg",
				"border-2",
				"bg-white",
				"p-sm",
				"hover:border-primary-700",
				"peer-focus:shadow-border-primary",
				"peer-active:bg-secondary-alt-200",
				"flex",
				"items-center",
				"gap-sm",
				"text-sm",
				{
					"border-secondary-alt-400": disabled,
					"border-primary-600": !disabled
				}

			) }>
				<div className={ cx(
					"relative",
					"grid",
					"size-fit",
					"rounded-full",
					"place-items-center",
					"text-white",
					"p-xxs",
					{
						"bg-primary-300": disabled,
						"bg-primary": !disabled
					}

				) }
				>

					{
						icon
							? <UiIcon
								name={ icon }
								size={ ESize.SM }
							/>
							: null
					}

				</div>

				<div className="flex flex-col">
					{ children }
					<div className="text-xs font-normal text-secondary-alt-400">{ subHeader }</div>
				</div>

			</div>

		</label>

	);
};
