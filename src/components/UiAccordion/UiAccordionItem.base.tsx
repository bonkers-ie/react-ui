import React from "react";
import cx from "classnames";
import { UiAccordionItemProvider, useAccordionContext } from "./UiAccordion.context";

export type TUiAccordionItemProps = {
	id: string;
} & React.HTMLAttributes<HTMLDivElement>;

type TAccordionItemComposition = {
	Trigger: React.FC<{ children: React.ReactNode | ((isOpen?: boolean) => React.ReactNode), className?: string }>;
	Content: React.FC<{ children: React.ReactNode, className?: string }>;
};

export const UiAccordionItem: React.FC<TUiAccordionItemProps> & TAccordionItemComposition = ({
	children,
	id,
	className,
	...rest
}) => {
	return (
		<UiAccordionItemProvider id={ id }>
			<div className={ cx("ui-accordion-item", className) }  { ...rest }>
				{ children }
			</div>
		</UiAccordionItemProvider>
	);
};

const Trigger: TAccordionItemComposition["Trigger"] = ({  children, className } ) => {
	const { handleTrigger, isOpen } = useAccordionContext();

	const childrenWithProps = () => {
		return (
			React.isValidElement(children)
				? children
				: typeof children === "function"
					? children(isOpen)
					: children
		);
	};

	return (
		<header
			role="button"
			className={ cx("cursor-pointer", className) }
			onClick={ () => handleTrigger() }
		>
			{ childrenWithProps() }
		</header>
	);
};

const Content: TAccordionItemComposition["Content"] = ({
	children,
	className
}) => {
	const { isOpen } = useAccordionContext();

	return (
		<div
			className={ cx(
				"grid transition-all duration-300 ease-in-out",
				isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
				className
			) }
		>
			<div className="overflow-hidden">
				{ children }
			</div>
		</div>
	);
};

UiAccordionItem.Trigger = Trigger;
UiAccordionItem.Content = Content;
