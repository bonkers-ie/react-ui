import React, { useMemo } from "react";
import cx from "classnames";
import { EColors, ETextWeight, ETypographySizes, UiTypography } from "../UiTypography";

interface IUiProgress {
	min: number
	max: number
	current: number
	progressText: string

}

export const UiProgress: React.FC<IUiProgress> = ({
	progressText,
	max,
	min,
	current

}) => {
	const filler = useMemo(() => {
		return ((current - min) / (max - min)) * 100;
	}, [current, min, max]);

	return (
		<div className={ cx(
			"ui-progress"
		) }>
			<div className={ cx(
				"relative",
				"h-xs ",
				"w-full",
				"overflow-hidden",
				"rounded-3xl",
				"bg-primary-50",
				"mb-xxs"
			) } >
				<div className={ cx(
					"ui-progress__bar-fill",
					"absolute",
					"left-0",
					"top-0",
					"z-10",
					"h-full",
					"rounded-2xl",
					"bg-primary-700",
					"transition-all",
					"duration-300"

				) }
				style={ {
					width: `${filler}%`
				} }>

				</div>
			</div>
			<UiTypography
				color={ EColors.PRIMARY_700 }
				size={ ETypographySizes.SM }
				weight={ ETextWeight.SEMI_BOLD }
			>
				{ progressText }
			</UiTypography>

		</div>

	);
};
