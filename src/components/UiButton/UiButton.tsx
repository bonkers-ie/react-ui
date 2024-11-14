import React from "react";
import { EButtonSizes, EButtonTypes } from "./_typings";

interface ButtonProps {
  kind?: EButtonTypes;
  size?: EButtonSizes;
  fullWidth?: boolean;
  disabled?: boolean;
  children?: React.ReactNode;
}

export const UiButton: React.FC<ButtonProps> = ({
  kind = EButtonTypes.PRIMARY,
  size = EButtonSizes.DEFAULT,
  fullWidth = false,
  disabled = false,
  children
}) => {
  const buttonClass = [
    "ui-button",
    "text-base",
    "grid",
    "touch-manipulation",
    "grid-flow-col",
    "items-center",
    "justify-center",
    "whitespace-nowrap",
    "rounded-xl",
    "font-bold",
    "leading-none",
  ];

  const kindClassNames = {
    [EButtonTypes.PRIMARY]: "text-white bg-primary disabled:bg-primary-300 hover:bg-primary-600 active:bg-primary-700",
    [EButtonTypes.SECONDARY]: "bg-secondary text-white disabled:bg-secondary-300 hover:bg-secondary-600 active:bg-secondary-700",
    [EButtonTypes.WARNING]: "bg-warning text-white disabled:bg-warning-300 hover:bg-warning-600 active:bg-warning-700",
    [EButtonTypes.ERROR]: "bg-error text-white disabled:bg-error-300 hover:bg-error-600 active:bg-error-700",
    [EButtonTypes.PRIMARY_OVERLAY]: "border border-primary text-primary disabled:border-primary-300 disabled:text-primary-300 hover:border-transparent hover:bg-primary-600 hover:text-white",
    [EButtonTypes.SECONDARY_OVERLAY]: "border border-secondary text-secondary disabled:border-secondary-300 disabled:text-secondary-300 hover:border-transparent hover:bg-secondary-600 hover:text-white",
    [EButtonTypes.WARNING_OVERLAY]: "border border-warning text-warning disabled:border-warning-300 disabled:text-warning-300 hover:border-transparent hover:bg-warning-600 hover:text-white",
    [EButtonTypes.ERROR_OVERLAY]: "border border-error text-error disabled:border-error-300 disabled:text-error-300 hover:border-transparent hover:bg-error-600 hover:text-white",
    [EButtonTypes.LINK]: "text-accent-alt disabled:text-accent-alt-300 hover:text-accent-alt-600 active:text-accent-alt-700",
  };

  buttonClass.push(...kindClassNames[kind].split(" "));

  const sizeClassNames = {
    [EButtonSizes.SMALL]: "px-md py-xxs",
    [EButtonSizes.MEDIUM]: "p-sm",
    [EButtonSizes.LARGE]: "p-md",
    [EButtonSizes.DEFAULT]: "px-md py-sm",
  };

  buttonClass.push(...(sizeClassNames[size] || "px-md py-sm").split(" "));

  if (fullWidth) {
    buttonClass.push("w-full");
  }

  if (disabled) {
    buttonClass.push("pointer-events-none");
  }

  return (
    <button
      className={buttonClass.join(" ")}
      disabled={disabled}
    >
      {children}
    </button>
  )};