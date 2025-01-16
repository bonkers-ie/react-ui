import { default as React } from '../../../node_modules/react';
import { ETextAlign, ETextWeight } from '../UiTypography';
type TCellProps = {
    align?: ETextAlign;
    subText?: React.ReactNode;
    weight?: ETextWeight;
} & React.HTMLAttributes<HTMLTableCellElement>;
export declare const UiTableCell: React.FC<TCellProps>;
export {};
