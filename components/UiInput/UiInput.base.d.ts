import { default as React } from '../../../node_modules/react';
import { EInputKind } from './_types';
export type TUiInputBaseProps = {
    id: string;
    postIcon?: React.ReactNode;
    preIcon?: React.ReactNode;
    kind?: EInputKind;
} & React.InputHTMLAttributes<HTMLInputElement>;
export declare const UiInputBase: React.FC<TUiInputBaseProps>;
