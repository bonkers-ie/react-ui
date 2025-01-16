import { default as React } from '../../../node_modules/react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
interface IUiRadioFancy {
    children: React.ReactNode;
    icon?: IconProp;
    disabled?: boolean;
    subHeader?: string;
}
export declare const UiRadioFancy: React.FC<IUiRadioFancy>;
export {};
