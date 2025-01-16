import { default as React } from '../../../node_modules/react';
import { EAlertTypes } from './_types';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
interface IUiAlert {
    children: React.ReactNode;
    kind?: EAlertTypes;
    icon?: IconProp;
}
export declare const UiAlert: React.FC<IUiAlert>;
export {};
