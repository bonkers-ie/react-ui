import React from "react";
import { EAccordionType } from "./_types";
import type { TUiAccordionProps } from "./UiAccordion";

export const UiAccordionContext = React.createContext<{
	active: string | string[],
	type: EAccordionType,
	handleTrigger: (id: string) => void
} | null>(null);

export const UiAccordionItemContext = React.createContext<{
	id: string | null
	isOpen: boolean
	toggle: () => void
} | null>(null);

export const UiAccordionProvider = ({
	children,
	type = EAccordionType.SINGLE,
	defaultValue,
	handleTrigger
}:  TUiAccordionProps) => {
	const [active, setActive] = React.useState<string[]>(defaultValue || []);

	const handleClick = (id: string) => {
		if (type === EAccordionType.SINGLE) {
			setActive(active?.includes(id) ? [] : [id]);
			if (handleTrigger) handleTrigger(id);
		} else {
			setActive(prev =>
				prev?.includes(id)
					? prev.filter(item => item !== id)
					: [...(prev || []), id]
			);
			if (handleTrigger) handleTrigger(id);
		}
	};

	const contextValue = {
		active,
		type,
		handleTrigger: handleClick
	};

	return (
		<UiAccordionContext.Provider value={ contextValue }>
			{ children }
		</UiAccordionContext.Provider>
	);
};

export const UiAccordionItemProvider = ({ children, id }: { children: React.ReactNode, id: string }) => {
	const { active, handleTrigger } = useAccordionContext();
	const isOpen = active.includes(id);
	const toggle = () => handleTrigger(id);

	return (
		<UiAccordionItemContext.Provider value={ {
			id,
			isOpen,
			toggle
		} }>
			{ children }
		</UiAccordionItemContext.Provider>
	);
};

export const useAccordionContext = () => {
	const context = React.useContext(UiAccordionContext);
	if (!context) {
		throw new Error("useAccordionContext must be used within an <Accordion /> component");
	}
	return context;
};

export const useAccordionItemContext = () => {
	const context = React.useContext(UiAccordionItemContext);
	if (!context) {
		throw new Error("useAccordionItemContext must be used within an <AccordionItem /> component");
	}
	return context;
};
