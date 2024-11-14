import React from "react";
import { ESize } from "../../_types/sizing";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconName } from "@fortawesome/fontawesome-svg-core";
import { faSmile } from "@fortawesome/free-solid-svg-icons";

interface UiIconProps {
    name: IconName;
    size?: ESize;
}

const sizeToClassName = {
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

const getSizeClass = (size: ESize) => sizeToClassName[size] || "";

export const UiIcon = (props: UiIconProps) => {
    const { size = ESize.LG } = props;
    const sizeClass = getSizeClass(size);

    return (
      <FontAwesomeIcon
        icon={faSmile}
        className={sizeClass}

      />
    );
  };