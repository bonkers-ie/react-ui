import React from "react";
import cx from "classnames";
import { UiAccordionItemProvider, useAccordionItemContext } from "./UiAccordionContext";

export type TUiAccordionItemProps = {
	id: string | null;
} & React.HTMLAttributes<HTMLDivElement>;

type TAccordionItemComposition = {
	Trigger: React.FC<{ children: React.ReactNode | ((isOpen?: boolean) => React.ReactNode), className?: string }>;
	Content: React.FC<{ children: React.ReactNode, className?: string }>;
};

export const UiAccordionItem: React.FC<TUiAccordionItemProps> & TAccordionItemComposition = ({
	children,
	id
}) => {
	return (
		<UiAccordionItemProvider id={ id }>
			{ children }
		</UiAccordionItemProvider>
	);
};

const Trigger: TAccordionItemComposition["Trigger"] = ({  children, className } ) => {
	const { toggle, isOpen } = useAccordionItemContext();

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
			typeof="button"
			className={ cx("cursor-pointer", className) }
			onClick={ toggle }
		>
			{ childrenWithProps() }
		</header>
	);
};

const Content: TAccordionItemComposition["Content"] = ({
	children,
	className
}) => {
	const { isOpen } = useAccordionItemContext();

	return (
		<div
			className={ cx(
				"grid transition-all duration-300 ease-in-out",
				isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
				className
			) }
		>
			<div className="overflow-hidden">
				<div className="p-sm">
					{ children }
				</div>

			</div>
		</div>
	);
};

UiAccordionItem.Trigger = Trigger;
UiAccordionItem.Content = Content;
