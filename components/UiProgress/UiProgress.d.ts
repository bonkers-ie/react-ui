import { default as React } from '../../../node_modules/react';
interface IUiProgress {
    min: number;
    max: number;
    current: number;
    progressText?: string;
}
export declare const UiProgress: React.FC<IUiProgress>;
export {};
