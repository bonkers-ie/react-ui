import { default as React } from '../../../node_modules/react';
import { EJustify } from '../../_types/align';
export type TUiRadioProps = {
    children?: React.ReactNode;
    name: string;
    value: string;
    invertOrder?: boolean;
    justify?: EJustify;
    disabled?: boolean;
    checked?: boolean;
    onChange: (value: string) => void;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange" | "checked" | "value" | "name">;
export declare const UiRadio: React.FC<TUiRadioProps>;
