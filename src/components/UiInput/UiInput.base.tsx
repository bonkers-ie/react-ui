import React from "react";
import { UiTypography } from "../UiTypography";
import { EInputKind } from "./_types";
import cx from "classnames";

export type TUiInputBaseProps = {
	id: string;
	postIcon?: React.ReactNode;
	preIcon?: React.ReactNode;
	kind?: EInputKind;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const UiInputBase: React.FC<
	TUiInputBaseProps
> = ({ postIcon, preIcon, kind = EInputKind.DEFAULT, ...rest } ) => {

	const stateClasses = {
		[EInputKind.DEFAULT]: "border-secondary-alt-500 hover:border-secondary-alt-700",
		[EInputKind.ERROR]: "border-error",
		[EInputKind.SUCCESS]: "border-primary-600",
	};

	return (
		<UiTypography
			tag="label"
			htmlFor={ rest.id }
			className={
				cx("ui-input-wrapper",
					"flex flex-row items-center gap-xxs rounded-lg border p-sm",
					kind && stateClasses[kind],
					{
						"bg-white": !rest.disabled,
						"border-secondary-alt-300 bg-secondary-alt-200": rest.disabled,
					})
			}
		>
			{ preIcon ? preIcon : null }
			<input
				className={ cx("border-0 flex-1 bg-transparent outline-none placeholder:text-secondary-alt-600 w-full") }
				{ ...rest }
			/>
			{ postIcon ? postIcon : null }
		</UiTypography>
	);
};
