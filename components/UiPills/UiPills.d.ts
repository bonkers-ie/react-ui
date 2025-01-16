import { default as React } from '../../../node_modules/react';
import { EBadgeKind, EBadgeSize } from './_types.ts';
interface IUiPills {
    children: React.ReactNode;
    kind?: EBadgeKind;
    size?: EBadgeSize;
    icon?: React.ReactNode;
    rounded?: boolean;
}
export declare const UiPills: React.FC<IUiPills>;
export {};
