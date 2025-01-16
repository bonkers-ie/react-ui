import { default as React } from '../../../node_modules/react';
import { EListItemSize, EListItemSpacing } from './_types.ts';
interface IUiListProps {
    children?: React.ReactNode;
    size?: EListItemSize;
    spacing?: EListItemSpacing;
}
export declare const UiList: React.FC<IUiListProps>;
export {};
