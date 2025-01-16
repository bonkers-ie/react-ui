import { default as React } from '../../../node_modules/react';
import { ERowKind } from './_types';
type TRowProps = {
    kind?: ERowKind;
} & React.HTMLAttributes<HTMLTableRowElement>;
export declare const UiTableRow: React.FC<TRowProps>;
export {};
