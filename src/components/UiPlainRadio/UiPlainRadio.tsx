import React from "react";
import cx from "classnames";
import { UiRadio } from "../UiRadio";

export type  TUiPlainRadio = {
	children?: React.ReactNode
	disabled?: boolean;
	subHeader?: string;
	value: string;
	name: string;
	checked?: boolean
	onChange: (value: string) => void;

}& Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange" | "checked" | "value" | "name">;

export const UiPlainRadio: React.FC<TUiPlainRadio> = ({
	children,
	disabled,
	subHeader,
	value,
	name,
	checked = false,
	onChange

}) => {

	return (
		<label className={cx(
			"ui-radio-fancy",
			"relative",
			{
				"pointer-events-none": disabled
			}
		)}
		htmlFor={name + value}
		>
			<input className={cx(
				"peer",
				" absolute",
				"appearance-none"
			)}
			id={name + value}
			type="radio"
			value={value}
			checked={checked}
			onChange={()=> onChange(value)}
			/>

			<div className={cx(
				"box-border",
				"size-full",
				"cursor-pointer",
				"pointer-events-none",
				"rounded-lg",
				"border-2",
				"bg-white",
				"p-sm",
				"hover:border-primary-700",
				"peer-focus:shadow-border-primary",
				"active:bg-secondary-alt-200",
				"flex",
				"items-center",
				"gap-sm",
				"text-sm",
				{
					"border-secondary-alt-400": disabled && !checked,
					"border-primary-300": disabled && checked,
					"border-primary-600": !disabled
				}

			)}>

				<UiRadio
					disabled={disabled}
					value={value}
					name={name}
					onChange={()=> onChange(value)}
					checked={checked}
				/>

				<div className="flex flex-col">
					{children}
					<div className="text-xs font-normal text-secondary-alt-400">{subHeader}</div>
				</div>

			</div>

		</label>

	);
};