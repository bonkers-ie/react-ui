import { default as React } from '../../../node_modules/react';
type TSelectProps = {
    heading?: string;
    subLabel?: string;
    disabled?: boolean;
    value?: string | number | readonly string[];
    placeholder?: string;
    postfixIcon?: React.ReactNode;
    onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
} & React.SelectHTMLAttributes<HTMLSelectElement>;
export declare const UiSelect: React.FC<TSelectProps>;
export {};
