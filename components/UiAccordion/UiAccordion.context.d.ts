import { default as React } from '../../../node_modules/react';
import { EAccordionType } from './_types';
import { TUiAccordionProps } from './UiAccordion.base';
export declare const UiAccordionContext: React.Context<{
    openItems?: string[];
    isOpen?: boolean;
    id?: string | null;
    type?: EAccordionType;
    handleTrigger: (id?: string) => void;
} | null>;
export declare const UiAccordionProvider: ({ children, type, defaultValue, handleTrigger }: TUiAccordionProps) => React.JSX.Element;
export declare const UiAccordionItemProvider: ({ children, id }: {
    children: React.ReactNode;
    id: string;
}) => React.JSX.Element;
export declare const useAccordionContext: () => {
    openItems?: string[];
    isOpen?: boolean;
    id?: string | null;
    type?: EAccordionType;
    handleTrigger: (id?: string) => void;
};
