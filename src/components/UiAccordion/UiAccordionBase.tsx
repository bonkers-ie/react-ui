import React from "react";
import { UiAccordionProvider } from "./UiAccordionContext";
import { EAccordionType } from "./_types";
import cx from "classnames";

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
		<div className={ cx(className, "w-full") }>
			<UiAccordionProvider { ...props }>
				{ children }
			</UiAccordionProvider>
		</div>
	);
};
