import { ESize } from "../../_types/sizing";
import { UiIcon } from "../UiIcon";
import { UiTypography, EColors, ETypographySizes, ETextWeight } from "../UiTypography";
import { UiAccordion } from "./UiAccordion.base";
import { UiAccordionItem } from "./UiAccordionItem.base";
import cx from "classnames";

export type TUiAccordionInfoDropdown = {
	children: React.ReactNode;
	id?: string;
	title: string;
	postfix?: (isOpen?: boolean) => React.ReactNode;
	prefix?: (isOpen?: boolean) => React.ReactNode;
}

export const UiAccordionInfoDropdown = ({ children, id, title, postfix, prefix } : TUiAccordionInfoDropdown ) => {
	return (
		<UiAccordion className="mb-xxs flex justify-start">
			<UiAccordionItem id={ id ? id : `whats-this-${Math.random()}` }>
				<UiAccordionItem.Trigger className="flex flex-row items-baseline gap-x-xxs">
					{ (isOpen) =>
						<>
							{ prefix ? prefix(isOpen) : null }
							<UiTypography
								underline
								lineHeight
								color={ EColors.SECONDARY_500 }
								size={ ETypographySizes.XS }
								weight={ ETextWeight.SEMI_BOLD }
							>
								{ title }
							</UiTypography>
							{
								postfix
									? postfix(isOpen)
									: <div className={ cx("transition", "text-secondary-500", isOpen ? "rotate-180" : "rotate-0") }>
										<UiIcon name={ ["fas", "chevron-down"] } size={ ESize.XS }/>
									</div>
							}
						</>
					}
				</UiAccordionItem.Trigger>
				<UiAccordionItem.Content>
					<UiTypography lineHeight color={ EColors.SECONDARY_500 } size={ ETypographySizes.XS }>
						{ children }
					</UiTypography>
				</UiAccordionItem.Content>
			</UiAccordionItem>
		</UiAccordion>
	);
};
