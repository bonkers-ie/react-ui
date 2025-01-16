import { default as React } from '../../../node_modules/react';
export type TUiInputRangeProps = {
    value: number;
    min: string | number;
    max: string | number;
    step: string | number;
    onChangeHandler: (value: number) => void;
} & React.HTMLProps<HTMLInputElement>;
export declare const UiInputRange: React.FC<TUiInputRangeProps>;
