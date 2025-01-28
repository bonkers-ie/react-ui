import { default as React } from '../../../node_modules/react';
import { EInputKind } from './_types.ts';
type TUiInputTextProps = {
    id: string;
    kind?: EInputKind;
    statusMessage?: string;
    title?: React.ReactNode;
    subtitle?: React.ReactNode;
    infoComponent?: React.ReactNode;
} & React.InputHTMLAttributes<HTMLInputElement>;
export declare const UiInputText: React.FC<TUiInputTextProps>;
export {};
