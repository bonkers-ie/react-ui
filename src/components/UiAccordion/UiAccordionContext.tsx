import React from "react";
import { EAccordionType } from "./_types";
import type { TUiAccordionProps } from "./UiAccordionBase";

export const UiAccordionContext = React.createContext<{
	openItems?: string[],
	isOpen?: boolean,
	id?: string | null,
	type?: EAccordionType,
	handleTrigger: (id?: string) => void
} | null>(null);

export const UiAccordionProvider = ({
	children,
	type = EAccordionType.SINGLE,
	defaultValue,
	handleTrigger
}:  TUiAccordionProps) => {
	const [openAccordions, setOpenAccordions] = React.useState<string[]>(defaultValue || []);

	const handleClick = (id?: string) => {
		if (!id) return;
		if (type === EAccordionType.SINGLE) {
			setOpenAccordions(openAccordions?.includes(id) ? [] : [id]);
		} else {
			setOpenAccordions(currAccordions =>
				currAccordions?.includes(id)
					? currAccordions.filter(item => item !== id)
					: [...(currAccordions || []), id]
			);
		}
		if (handleTrigger) handleTrigger(id);
	};

	const contextValue = {
		openItems: openAccordions,
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
	const { openItems, handleTrigger } = useAccordionContext();
	const isOpen = openItems?.includes(id);

	return (
		<UiAccordionContext.Provider value={ {
			id,
			isOpen,
			handleTrigger: () => handleTrigger(id)
		} }>
			{ children }
		</UiAccordionContext.Provider>
	);
};

export const useAccordionContext = () => {
	const context = React.useContext(UiAccordionContext);
	if (!context) {
		throw new Error("useAccordionContext must be used within an <Accordion /> component");
	}
	return context;
};
