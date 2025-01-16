import { default as React } from '../../../node_modules/react';
import { ETextAlign, ETextTransform, ETextWeight, ETypographySizes } from './_types.ts';
import { EColors } from '../../_types/colors.ts';
interface ITypographyProps {
    tag?: keyof React.JSX.IntrinsicElements;
    children?: React.ReactNode;
    underline?: boolean;
    lineHeight?: boolean;
    size?: ETypographySizes;
    textTransform?: ETextTransform;
    align?: ETextAlign;
    weight?: ETextWeight;
    color?: EColors;
    className?: string;
}
export declare const UiTypography: React.FC<ITypographyProps>;
export {};
