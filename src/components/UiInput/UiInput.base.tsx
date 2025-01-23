import React from "react";
import { UiTypography } from "../UiTypography";
import { EInputState } from "./_types";
import cx from "classnames";

export type TUiInputBaseProps = {
	id: string;
	postIcon?: React.ReactNode;
	preIcon?: React.ReactNode;
	state?: EInputState;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const UiInputBase: React.FC<
	TUiInputBaseProps
> = ({ postIcon, preIcon, state, ...rest } ) => {

	const stateClasses = {
		[EInputState.DEFAULT]: "border-secondary-alt-500 hover:border-secondary-alt-700",
		[EInputState.ERROR]: "border-error",
		[EInputState.SUCCESS]: "border-primary-600",
	};

	return (
		<UiTypography
			tag="label"
			htmlFor={ rest.id }
			className={
				cx("ui-input-wrapper",
					"flex w-full items-center gap-xxs rounded-lg border p-sm",
					state && stateClasses[state],
					{
						"bg-white": !rest.disabled,
						"border-secondary-alt-300 bg-secondary-alt-200": rest.disabled,
					})
			}
		>
			{ preIcon ? preIcon : null }
			<input
				className={ cx("border-0 bg-transparent outline-none placeholder:text-secondary-alt-600 w-full") }
				{ ...rest }
			/>
			{ postIcon ? postIcon : null }
		</UiTypography>
	);
};
