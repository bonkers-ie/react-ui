import React, { useEffect, useState } from "react";
import { light, dark } from "./bonkersTheme";
import { DocsContainer as BaseContainer, type DocsContainerProps } from "@storybook/blocks";
import { DARK_MODE_EVENT_NAME } from "storybook-dark-mode";
import { addons } from "@storybook/preview-api";

const previewChannel = addons.getChannel();

export const DocsContainer: React.FC<React.PropsWithChildren<DocsContainerProps>> = (props) => {
	const [isDark, setIsDark] = useState(document.body.classList.contains("dark"));

	useEffect(() => {
		const handleDarkModeChange = (newMode: boolean) => {
			setIsDark(newMode);
		};

		previewChannel.on(DARK_MODE_EVENT_NAME, handleDarkModeChange);

		return () => {
			previewChannel.off(DARK_MODE_EVENT_NAME, handleDarkModeChange);
		};
	}, []);

	const theme = isDark ? dark : light;

	return <BaseContainer { ...props } theme={ theme } context={ props.context } />;
};
