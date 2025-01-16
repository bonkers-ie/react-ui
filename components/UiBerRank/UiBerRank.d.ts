import { default as React } from '../../../node_modules/react';
import { TBerPropNumber, TBerPropString, EBerSize } from './_types';
interface IUiBerRankProps {
    rank: TBerPropNumber | TBerPropString | number;
    size?: EBerSize;
}
export declare const UiBerRank: React.FC<IUiBerRankProps>;
export {};
