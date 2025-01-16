import { default as React } from '../../../node_modules/react';
import { ETableKind } from './_types';
type TTableProps = {
    kind?: ETableKind;
    header?: React.ReactNode;
} & React.HTMLAttributes<HTMLTableElement>;
export declare const UiTable: React.FC<TTableProps>;
export {};
