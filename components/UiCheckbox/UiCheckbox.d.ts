import { default as React } from '../../../node_modules/react';
import { EJustify } from '../../_types/align';
import { ECheckboxSize } from './_types.ts';
export type TUiCheckboxProps = {
    invertOrder?: boolean;
    justify?: EJustify;
    disabled?: boolean;
    value?: string;
    size?: ECheckboxSize;
    onChange?: (checked: boolean) => void;
    name?: string;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "onChange">;
export declare const UiCheckbox: React.FC<TUiCheckboxProps>;
