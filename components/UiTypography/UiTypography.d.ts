import { default as React } from '../../../node_modules/react';
import { ETextAlign, ETextTransform, ETextWeight, ETypographySizes } from './_types.ts';
import { EColors } from '../../_types/colors.ts';
type TUiTypographyProps<T extends keyof React.JSX.IntrinsicElements> = {
    tag?: T;
    children?: React.ReactNode;
    underline?: boolean;
    lineHeight?: boolean;
    size?: ETypographySizes;
    textTransform?: ETextTransform;
    align?: ETextAlign;
    weight?: ETextWeight;
    color?: EColors;
} & Omit<React.JSX.IntrinsicElements[T], "children" | "ref">;
export declare const UiTypography: <T extends keyof React.JSX.IntrinsicElements>({ children, tag, underline, lineHeight, size, textTransform, align, weight, color, className, ...rest }: TUiTypographyProps<T>) => React.JSX.Element;
export {};
