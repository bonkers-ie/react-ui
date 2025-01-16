import { default as React } from '../../../node_modules/react';
import { EButtonSizes, EButtonTypes, EButtonWeight } from './_types.ts';
type TButtonProps = {
    kind?: EButtonTypes;
    size?: EButtonSizes;
    fullWidth?: boolean;
    weight?: EButtonWeight;
} & React.HTMLAttributes<HTMLElement> & React.ButtonHTMLAttributes<HTMLElement> & React.AnchorHTMLAttributes<HTMLElement>;
export declare const UiButton: React.FC<TButtonProps>;
export {};
