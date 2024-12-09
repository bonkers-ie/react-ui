import { EColors } from "../../_types/colors.ts";

type Ran<T extends number> = number extends T ? number : _Range<T, []>;
type _Range<T extends number, R extends unknown[]> = R["length"] extends T ? R[number] : _Range<T, [R["length"], ...R]>;

export type TBerPropNumber = Ran<typeof berRankDictionary.length>
export type TBerPropString = `${TBerPropNumber}`;
export type TBerRank = typeof berRankDictionary[TBerPropNumber]["text"];

export const berRankDictionary = [
	{
		text: "N/A",
		color: EColors.SECONDARY_ALT,
	},
	{
		text: "G",
		color: EColors.ERROR,
	},
	{
		text: "F",
		color: EColors.WARNING,
	},
	{
		text: "E2",
		color: EColors.WARNING_600,
	},
	{
		text: "E1",
		color: EColors.WARNING_600,
	},
	{
		text: "D2",
		color: EColors.WARNING_400,
	},
	{
		text: "D1",
		color: EColors.WARNING_400,
	},
	{
		text: "C3",
		color: EColors.PRIMARY_ALT,
	},
	{
		text: "C2",
		color: EColors.PRIMARY_ALT,
	},
	{
		text: "C1",
		color: EColors.PRIMARY_ALT,
	},
	{
		text: "B3",
		color: EColors.PRIMARY_ALT_600,
	},
	{
		text: "B2",
		color: EColors.PRIMARY_ALT_600,
	},
	{
		text: "B1",
		color: EColors.PRIMARY_ALT_600,
	},
	{
		text: "A3",
		color: EColors.PRIMARY_ALT_700,
	},
	{
		text: "A2",
		color: EColors.PRIMARY_ALT_700,
	},
	{
		text: "A1",
		color: EColors.PRIMARY_ALT_700,
	},
] as const;

export const berRanksList = berRankDictionary.map(({ text }) => text);

export enum EBerSize {
	SMALL = "small",
	MEDIUM = "medium",
}
