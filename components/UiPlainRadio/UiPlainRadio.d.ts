import { default as React } from '../../../node_modules/react';
export type TUiPlainRadio = {
    children?: React.ReactNode;
    disabled?: boolean;
    subHeader?: string;
    value: string;
    name: string;
    checked?: boolean;
    onChange: (value: string) => void;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange" | "checked" | "value" | "name">;
export declare const UiPlainRadio: React.FC<TUiPlainRadio>;
