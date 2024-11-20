import React from "react";
import { ESize } from "../../_types/sizing";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import cx from "classnames";
import { type IconProp } from "@fortawesome/fontawesome-svg-core";

interface UiIconProps {
	name: IconProp;
	size?: ESize;
}

export const UiIcon = (props: UiIconProps) => {
	const { size = ESize.LG } = props;

	const sizeToClassName: { [key in ESize]: string } = {
		[ESize.XXXS]: "size-xxxs",
		[ESize.XXS]: "size-xxs",
		[ESize.XS]: "size-xs",
		[ESize.SM]: "size-sm",
		[ESize.MD]: "size-md",
		[ESize.LG]: "size-lg",
		[ESize.XL]: "size-xl",
		[ESize.XXL]: "size-xxl",
		[ESize.XXXL]: "size-xxxl",
		[ESize.XXXXL]: "size-xxxxl",
		[ESize.XXXXXL]: "size-xxxxxl",
		[ESize.AUTO]: "size-auto",
		[ESize.ZERO]: "size-zero",
	} as const;

	return (
		<FontAwesomeIcon
			icon={props.name}
			className={cx(sizeToClassName[size])}
		/>
	);
};
