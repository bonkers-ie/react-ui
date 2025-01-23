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
		<>
			<div className="flex flex-col">
				{ title
					? (
						<UiTypography
							size={ ETypographySizes.MD }
							color={ EColors.SECONDARY }
							lineHeight
							className="mb-xxs"
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
							className="mb-xxs"
						>
							{ subtitle }
						</UiTypography>
					)
					: null }
			</div>
			<div className="relative w-full">
				{ children }
			</div>
		</>
	);
};
