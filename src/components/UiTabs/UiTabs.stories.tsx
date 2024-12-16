import type { Meta, StoryObj } from "@storybook/react";
import { UiTabs } from "./UiTabs";
import React, { useState } from "react";

const Meta = {
	title: "Components/UiTabs",
	component: UiTabs,
	argTypes: {
		tabs: {
			control: "object",
		},
		tabsModel: {
			control: "text",
		},
		onTabChange: {
			control: "text"
		}
	},
	args: {
		tabs: ["Tab1", "Tab2", "Tab3"],
		tabsModel: "Tab1",
		onTabChange: () => {},
	},
} satisfies Meta<typeof UiTabs>;

export default Meta;

type Story = StoryObj<typeof Meta>;

export const Primary: Story = {

	render: ({ tabs }: { tabs: string[] }) => {

		const [value1, setValue1] = useState(tabs[0] || "");

		const handleChange1 = (val: string) => setValue1(val);

		return (
			<div>

				<UiTabs
					tabsModel={value1}
					tabs={tabs}
					onTabChange={handleChange1}
				/>
				<br/>

			</div>
		);
	},
};
