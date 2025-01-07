import React from "react";
import styles from "./UiCheckbox.module.css";
import cx from "classnames";
import { EJustify } from "../../_types/align";
import { ECheckboxSize } from "./_types.ts";

export type TUiCheckboxProps = {
	invertOrder?: boolean;
	justify?: EJustify;
	disabled?: boolean;
	value?: string;
	size?: ECheckboxSize;
	onChange?: (checked: boolean) => void;
	name?: string;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "onChange">;

const justificationClasses = {
	[EJustify.START]: "justify-start",
	[EJustify.END]: "justify-end",
	[EJustify.CENTER]: "justify-center",
	[EJustify.BETWEEN]: "justify-between",
	[EJustify.AROUND]: "justify-around",
	[EJustify.EVENLY]: "justify-evenly"
};

const spanSizeClasses = {
	[ECheckboxSize.SM]: "size-sm",
	[ECheckboxSize.MD]: "size-md"
};

const svgSizeClasses = {
	[ECheckboxSize.SM]: "size-xs",
	[ECheckboxSize.MD]: "size-sm"
};

export const UiCheckbox: React.FC<TUiCheckboxProps> = ({
	checked,
	value,
	size = ECheckboxSize.MD,
	disabled = false,
	justify = EJustify.START,
	invertOrder = false,
	children,
	onChange,
	name,
	...rest
}) => {
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (!disabled && onChange) {
			onChange?.(event.target.checked);
		}
	};
	return (
		<label className={
			cx(styles.UiCheckbox,
				"grid",
				"cursor-pointer",
				children && "items-center gap-sm",
				justificationClasses[justify],
				disabled && styles.UiCheckbox__disabled)
		}>
			<input
				{ ...rest }
				className="absolute appearance-none"
				type="checkbox"
				checked={ checked }
				disabled={ disabled }
				value={ value }
				name={ name }
				onChange={ handleChange }
			/>
			<span className={ cx(styles.UiCheckbox__custom,
				"relative",
				"flex",
				"items-center",
				"justify-center",
				"rounded",
				"border",
				"border-secondary-alt-500",
				"hover:border-secondary-alt-700",
				invertOrder && "order-last",
				spanSizeClasses[size]
			) }>
				<svg
					className={ cx(styles.UiCheckbox__icon, "text-white", svgSizeClasses[size]) }
					viewBox="0 0 16 12"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					aria-hidden="true"
				>
					<path
						d="M1 4.40106L6.60071 10.1135L15.1694 1.71245"
						stroke="currentColor"
						strokeWidth="1.6"
						strokeLinecap="round"
					/>
				</svg>
			</span>
			{ children }
		</label>
	);
};
