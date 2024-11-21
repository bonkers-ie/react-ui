import SpacingsJson from "../../_styles/_spacing.json";
import { getCssVariableValue } from "../../helper";

export const Spacings = () => {
	return (
		<ul
			className="flex flex-row flex-wrap gap-md"
		>
			{
				Object.entries(SpacingsJson).map(([key, size]) => (
					<li className="grid gap-sm border border-black p-md">
						<div>
							<b>
								{getCssVariableValue(size)}
							</b>
							<br/>
							<br/>
							{size}
							<br/>
							{key}
						</div>
						<div
							className="border border-black bg-primary-alt-400"
							style={{
								width: size,
								height: size,
							}}
						/>
					</li>
				))
			}
		</ul>
	);
};
