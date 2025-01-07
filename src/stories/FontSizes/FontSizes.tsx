import React from "react";
import fontSizes from "../../_styles/_fontSizes.json";
import { getCssVariableValue } from "../../helper";

export const FontSizes: React.FC = () => (
	<ul className="flex flex-row flex-wrap gap-md">
		{ Object.entries(fontSizes).map(([key, size]) => (
			<li key={ key } style={ {
				fontSize: size
			} }
			className="grid gap-sm border p-md">
				<b>{ key }</b>
				<p>{ getCssVariableValue(size) }</p>
				<p>{ size }</p>
			</li>
		)) }
	</ul>
);
