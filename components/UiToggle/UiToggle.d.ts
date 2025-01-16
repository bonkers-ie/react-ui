import { default as React } from '../../../node_modules/react';
interface IUiToggle {
    title?: React.ReactNode;
    children?: React.ReactNode;
    disabled?: boolean;
    invertOrder?: boolean;
}
export declare const UiToggle: React.FC<IUiToggle>;
export {};
