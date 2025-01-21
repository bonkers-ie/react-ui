import { default as React } from '../../../node_modules/react';
import { EAccordionType } from './_types';
export type TUiAccordionProps = {
    children: React.ReactNode;
    type?: EAccordionType;
    handleTrigger?: (id: string) => void;
    defaultValue?: string[];
} & React.HTMLAttributes<HTMLDivElement>;
export declare const UiAccordion: React.FC<TUiAccordionProps>;
