import React from "react";
import colors from "../../_styles/_colors.json";

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
							<div className="color_circle relative m-auto size-xxxxxl rounded-full" style= {{
								backgroundColor: typeof colorValue === "string" ? colorValue : "",
							}}>
							</div>
							<b className="text-center text-lg">{groupTitle}</b>
							<div className="text-center text-md">{typeof colorValue === "string" ? colorValue : ""}</div>
						</li>
					))}
				</ul>
			</div>
			<hr className="my-sm" />

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
								<div className="text-center text-md">{colorValue}</div>
							</li>
						))}
					</ul>
					<hr className="my-sm" />
				</div>
			))}
		</div>
	);
};
