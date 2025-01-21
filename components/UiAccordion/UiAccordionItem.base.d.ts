import { default as React } from '../../../node_modules/react';
export type TUiAccordionItemProps = {
    id: string;
} & React.HTMLAttributes<HTMLDivElement>;
type TAccordionItemComposition = {
    Trigger: React.FC<{
        children: React.ReactNode | ((isOpen?: boolean) => React.ReactNode);
        className?: string;
    }>;
    Content: React.FC<{
        children: React.ReactNode;
        className?: string;
    }>;
};
export declare const UiAccordionItem: React.FC<TUiAccordionItemProps> & TAccordionItemComposition;
export {};
