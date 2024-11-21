import React from "react";
import colors from "../../_styles/_colors.json";
import { getCssVariableValue } from "../../helper";

export const Colors = () => {
	const baseColors = Object.entries(colors).filter(
		([_, groupColors]) => typeof groupColors !== "object"
	);
	const groupedColors = Object.entries(colors).filter(
		([_, groupColors]) => typeof groupColors === "object"
	);

	return (
		<div>
			<div className="mb-md">
				<h2 className="mb-sm text-3xl font-bold">Base Colors:</h2>

				<ul className="color_wrapper grid gap-md">
					{baseColors.map(([groupTitle, colorValue]) => (
						<li key={groupTitle} className="grid gap-xs">
							{
								typeof colorValue === "string"
									? (
										<>
											<div className="color_circle relative m-auto size-xxxxxl rounded-full" style={{
												backgroundColor: colorValue,
											}}>
											</div>
											<b className="text-center text-lg">{groupTitle}</b>
											<div className="text-center">({getCssVariableValue(colorValue)})</div>
											<div className="text-nowrap text-center text-md">{colorValue}</div>
										</>)
									: null
							}
						</li>
					))}
				</ul>
			</div>
			<hr className="my-sm"/>

			{groupedColors.map(([groupTitle, groupColors]) => (
				<div className="mb-md" key={groupTitle}>
					<h2 className="mb-sm text-3xl font-bold">{groupTitle}:</h2>
					<ul className="color_wrapper grid gap-md">
						{Object.entries(groupColors).map(([shade, colorValue]) => (
							<li key={`${groupTitle}-${shade}`} className="grid gap-xs">
								<div className="color_circle relative m-auto size-xxxxxl rounded-full" style={{
									backgroundColor: colorValue,
								}}>
								</div>
								<b className="text-center text-lg">{shade}</b>
								<div className="text-center">({getCssVariableValue(colorValue)})</div>
								<div className="text-center text-md text-nowrap">{colorValue}</div>
							</li>
						))}
					</ul>
					<hr className="my-sm"/>
				</div>
			))}
		</div>
	);
};
