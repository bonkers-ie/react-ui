import React from "react";
import cx from "classnames";
import { UiIcon } from "../UiIcon";
import { ESize } from "../../_types/sizing";
import { type IconProp } from "@fortawesome/fontawesome-svg-core";
import { ERadioTypes } from "./_types";

export type TUiRadioFancy = {
	children: React.ReactNode
	icon?: IconProp
	disabled?: boolean;
	active?: boolean;
	subHeader?: string;
	radioType?: ERadioTypes;
	value: string;
	onChange: (value: string) => void;

}& Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange" | "checked" | "value" | "name">;

const typeClasses = {
	[ERadioTypes.DEFAULT]: "items-center",
	[ERadioTypes.COMPACT]: "items-start flex-col"
};

export const UiRadioFancy: React.FC<TUiRadioFancy> = ({
	children,
	icon,
	disabled,
	subHeader,
	active,
	radioType = ERadioTypes.DEFAULT,
	value,
	onChange

}) => {
	return (
		<label className={ cx(
			"ui-radio-fancy",
			"relative",
			{
				"pointer-events-none": disabled
			}
		) }>
			<input className="group peer absolute appearance-none" type="radio" checked={ active } onChange={ ()=> onChange(value) }/>

			<div className={ cx(
				"box-border",
				"cursor-pointer",
				"rounded-lg",
				"border-2",
				"bg-white",
				"p-sm",
				"hover:border-primary-700",
				"peer-focus:shadow-border-primary",
				"peer-active:bg-secondary-alt-200",
				"flex",
				"gap-sm",
				"text-sm",
				{
					"border-secondary-alt-400": disabled && !active,
					"border-primary-600": !disabled && active,
					"border-primary-300": disabled && active,
					"border-secondary-alt-600": !disabled && !active

				},
				typeClasses[radioType],

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
