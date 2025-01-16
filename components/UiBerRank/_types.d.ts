import { EColors } from '../../_types/colors.ts';
type Ran<T extends number> = number extends T ? number : _Range<T, []>;
type _Range<T extends number, R extends unknown[]> = R["length"] extends T ? R[number] : _Range<T, [R["length"], ...R]>;
export type TBerPropNumber = Ran<typeof berRankDictionary.length>;
export type TBerPropString = `${TBerPropNumber}`;
export type TBerRank = typeof berRankDictionary[TBerPropNumber]["text"];
export declare const berRankDictionary: readonly [{
    readonly text: "N/A";
    readonly color: EColors.SECONDARY_ALT;
}, {
    readonly text: "G";
    readonly color: EColors.ERROR;
}, {
    readonly text: "F";
    readonly color: EColors.WARNING_700;
}, {
    readonly text: "E2";
    readonly color: EColors.WARNING_600;
}, {
    readonly text: "E1";
    readonly color: EColors.WARNING_600;
}, {
    readonly text: "D2";
    readonly color: EColors.WARNING_400;
}, {
    readonly text: "D1";
    readonly color: EColors.WARNING_400;
}, {
    readonly text: "C3";
    readonly color: EColors.PRIMARY_ALT;
}, {
    readonly text: "C2";
    readonly color: EColors.PRIMARY_ALT;
}, {
    readonly text: "C1";
    readonly color: EColors.PRIMARY_ALT;
}, {
    readonly text: "B3";
    readonly color: EColors.PRIMARY_ALT_600;
}, {
    readonly text: "B2";
    readonly color: EColors.PRIMARY_ALT_600;
}, {
    readonly text: "B1";
    readonly color: EColors.PRIMARY_ALT_600;
}, {
    readonly text: "A3";
    readonly color: EColors.PRIMARY_ALT_700;
}, {
    readonly text: "A2";
    readonly color: EColors.PRIMARY_ALT_700;
}, {
    readonly text: "A1";
    readonly color: EColors.PRIMARY_ALT_700;
}];
export declare const berRanksList: ("N/A" | "G" | "F" | "E2" | "E1" | "D2" | "D1" | "C3" | "C2" | "C1" | "B3" | "B2" | "B1" | "A3" | "A2" | "A1")[];
export declare enum EBerSize {
    SMALL = "small",
    MEDIUM = "medium"
}
export {};
