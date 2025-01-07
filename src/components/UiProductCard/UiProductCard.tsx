import React from "react";
import { EBadgeKind, UiPills } from "../UiPills";
import {
	UiTypography, ETypographySizes, ETextWeight, ETextAlign, EColors
} from "../UiTypography";

type TUiProductCardProps = {
	badgeText?: string;
	title?: string;
	subtitle?: string;
	header?: React.ReactNode;
	customTitle?: React.ReactNode;
	customSubtitle?: React.ReactNode;
}

export const UiProductCard: React.FC<TUiProductCardProps> = ({ badgeText,
	title,
	subtitle,
	header,
	customTitle,
	customSubtitle }) => {
	return (
		<div className='relative
			flex
			flex-col
			gap-sm
			rounded-2xl
			border
			border-secondary-alt-500
			bg-white
			px-xs
			py-sm'>

			{ badgeText && (
				<div className="!absolute -top-xxs right-xs">
					<UiPills rounded kind={ EBadgeKind.ACCENT_ALT }>{ badgeText }</UiPills>
				</div>
			) }

			{ header }

			<div className="grid gap-xxs">
				{ customTitle || (
					title && (
						<UiTypography
							size={ ETypographySizes.MD }
							weight={ ETextWeight.BOLD }
							align={ ETextAlign.LEFT }
							lineHeight
						>
							{ title }
						</UiTypography>
					)
				) }

				{ customSubtitle || (
					subtitle && (
						<UiTypography
							size={ ETypographySizes.XS }
							align={ ETextAlign.LEFT }
							color={ EColors.SECONDARY_400 }
							lineHeight
						>
							{ subtitle }
						</UiTypography>
					)
				) }
			</div>
		</div >
	);
};
