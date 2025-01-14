import React from "react";
import { UiAccordionProvider } from "./UiAccordionContext";
import { EAccordionType } from "./_types";

export type TUiAccordionProps = {
	children: React.ReactNode;
	type?: EAccordionType;
	handleTrigger?: (id: string) => void;
	defaultValue?: string[];
} & React.HTMLAttributes<HTMLDivElement>;

export const UiAccordion: React.FC<TUiAccordionProps> = ({
	children,
	className,
	...props
}) => {

	return (
		<div className={ className }>
			<UiAccordionProvider { ...props }>
				{ children }
			</UiAccordionProvider>
		</div>
	);
};
