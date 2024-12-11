import React, { useState } from "react";
import cx from "classnames";

interface IUiToggle {
	title?:  React.ReactNode
	children?: React.ReactNode
	disabled?: boolean
	invertOrder?: boolean;
}

export const UiToggle: React.FC<IUiToggle> = ({
	children,
	title,
	disabled = false,
	invertOrder = false

}) => {
	const [isChecked, setIsChecked] = useState(false);
	const [isHovered, setIsHovered] = useState(false);

	return (
		<div className={cx(
			"ui-toggle"
		)}
		onMouseEnter={() => setIsHovered(true)}
		onMouseLeave={() => setIsHovered(false)} >

			<span className={cx("font-bold")}>
				{title}
			</span>

			<label className={cx(
				"flex",
				"cursor-pointer",
				"gap-sm",
				"rounded-full",
				"mt-sm",
				"items-center",
				"w-full",
				"leading-normal",
				"text-md",
				{
					"flex-row-reverse": invertOrder,
					"pointer-events-none": disabled
				}

			)}>
				<span className={cx(
					"relative",
					"block",
					"h-md"
				)}>

					<input className={cx(
						"absolute",
						"size-0",
						"appearance-none",
						"border-0"
					)}
					type="checkbox"
					checked={isChecked}
					onChange={() => setIsChecked(!isChecked)}
					>
					</input>

					<span className={cx(
						"block",
						"h-md",
						"w-xl",
						"rounded-full",
						{
							"bg-secondary-alt-300": !isChecked && disabled,
							"bg-primary-500": isChecked && !disabled,
							"bg-primary-300": isChecked && disabled,
							"bg-secondary-alt": !isChecked && !disabled,
						}
					)}
					></span>
					<span className={cx(
						"absolute",
						"top-[50%]",
						"block",
						"rounded-full",
						"bg-white",
						"w-[22px]",
						"h-[22px]",
						"translate-x-[1px]",
						"translate-y-[-50%]",
						"ease-in-out",
						"hover:shadow-border-secondary",
						"active:shadow-border-secondary",
						"focus:shadow-border-secondary",
						{
							"shadow-border-secondary": isHovered && !isChecked && !disabled,
							"shadow-border-primary": isHovered && isChecked && !disabled,
							"translate-x-[calc(var(--xl)_-_100%_-_1px)] translate-y-[-50%]": isChecked
						},

					)}>
					</span>
				</span>

				{children}

			</label>

		</div>
	);
};
