import { default as React } from '../../../node_modules/react';
import { EBadgeOffset } from './_types';
import { EColors } from '../UiTypography';
type UiNotificationBadge = {
    offset?: EBadgeOffset;
    children: React.ReactNode;
    color?: EColors;
};
export declare const UiNotificationBadge: React.FC<UiNotificationBadge>;
export {};
