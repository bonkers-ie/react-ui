import React from "react";
import { EColors, ETypographySizes, UiTypography } from "../UiTypography";

type TUiInputTitledProps = {
	children: React.ReactNode;
	infoComponent?: React.ReactNode;
	statusMessage?: string;
	subtitle?: React.ReactNode
	title?: React.ReactNode;
};

export const UiInputTitled: React.FC<TUiInputTitledProps> = ({
	children,
	infoComponent,
	title,
	subtitle
}) => {

	return (
		<div className="grid w-full grid-flow-row gap-xxxs">
			{ title
				? (
					<UiTypography
						size={ ETypographySizes.MD }
						color={ EColors.SECONDARY }
						lineHeight
					>
						{ title }
					</UiTypography>
				)
				: null }
			{ infoComponent }
			{ subtitle
				? (
					<UiTypography
						lineHeight
						color={ EColors.SECONDARY_ALT_600 }
						size={ ETypographySizes.SM }
					>
						{ subtitle }
					</UiTypography>
				)
				: null }
			<div className="relative w-full">
				{ children }
			</div>
		</div>
	);
};
