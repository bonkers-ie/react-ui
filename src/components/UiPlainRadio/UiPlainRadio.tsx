import React from "react";
import cx from "classnames";
import { UiRadio } from "../UiRadio";

export type  TUiPlainRadio = {
	children?: React.ReactNode
	disabled?: boolean;
	subHeader?: string;
	value: string;
	name: string;
	checked: boolean
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
	const handleUiRadioChange = () => {
		if (!disabled) {
			onChange(value);
		}
	};

	return (
		<label className={cx(
			"ui-radio-fancy",
			"relative",
			{
				"pointer-events-none": disabled
			}
		)}
		>
			<input className={cx(
				"peer",
				" absolute",
				"appearance-none"
			)}
			type="radio"
			value={value}
			checked={checked}
			onChange={handleUiRadioChange}
			/>

			<div className={cx(
				"box-border",
				"size-full",
				"cursor-pointer",
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
					"border-secondary-alt-400": disabled,
					"border-primary-300": disabled && checked,
					"border-primary-600": !disabled
				}

			)}>

				<UiRadio
					className="pointer-events-none"
					disabled={disabled}
					value={value}
					name={name}
					onChange={handleUiRadioChange}
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
