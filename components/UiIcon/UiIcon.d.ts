import { default as React } from '../../../node_modules/react';
import { ESize } from '../../_types/sizing';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
interface IUiIconProps {
    name: IconProp;
    size?: ESize;
}
export declare const UiIcon: React.FC<IUiIconProps>;
export {};
