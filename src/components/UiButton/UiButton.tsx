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

  switch (kind) {
    case EButtonTypes.PRIMARY:
      buttonClass.push("text-white", "bg-primary", "disabled:bg-primary-300");
      buttonClass.push("hover:bg-primary-600", "active:bg-primary-700");
      break;
    case EButtonTypes.SECONDARY:
      buttonClass.push("bg-secondary", "text-white", "disabled:bg-secondary-300");
      buttonClass.push("hover:bg-secondary-600", "active:bg-secondary-700");
      break;
    case EButtonTypes.WARNING:
      buttonClass.push("bg-warning", "text-white", "disabled:bg-warning-300");
      buttonClass.push("hover:bg-warning-600", "active:bg-warning-700");
      break;
    case EButtonTypes.ERROR:
      buttonClass.push("bg-error", "text-white", "disabled:bg-error-300");
      buttonClass.push("hover:bg-error-600", "active:bg-error-700");
      break;
    case EButtonTypes.PRIMARY_OVERLAY:
      buttonClass.push("border", "border-primary", "text-primary", "disabled:border-primary-300", "disabled:text-primary-300");
      buttonClass.push("hover:border-transparent", "hover:bg-primary-600", "hover:text-white", "active:border-transparent", "active:bg-primary-700", "active:text-white");
      break;
    case EButtonTypes.SECONDARY_OVERLAY:
      buttonClass.push("border", "border-secondary", "text-secondary", "disabled:border-secondary-300", "disabled:text-secondary-300");
      buttonClass.push("hover:border-transparent", "hover:bg-secondary-600", "hover:text-white", "active:border-transparent", "active:bg-secondary-700", "active:text-white");
      break;
    case EButtonTypes.WARNING_OVERLAY:
      buttonClass.push("border", "border-warning", "text-warning", "disabled:border-warning-300", "disabled:text-warning-300");
      buttonClass.push("hover:border-transparent", "hover:bg-warning-600", "hover:text-white", "active:border-transparent", "active:bg-warning-700", "active:text-white");
      break;
    case EButtonTypes.ERROR_OVERLAY:
      buttonClass.push("border", "border-error", "text-error", "disabled:border-error-300", "disabled:text-error-300");
      buttonClass.push("hover:border-transparent", "hover:bg-error-600", "hover:text-white", "active:border-transparent", "active:bg-error-700", "active:text-white");
      break;
    case EButtonTypes.LINK:
      buttonClass.push("text-accent-alt", "disabled:text-accent-alt-300");
      buttonClass.push("hover:text-accent-alt-600", "active:text-accent-alt-700");
      break;
    default:
      break;
  }

  switch (size) {
    case EButtonSizes.SMALL:
      buttonClass.push("px-md", "py-xxs");
      break;
    case EButtonSizes.MEDIUM:
      buttonClass.push("p-sm");
      break;
    case EButtonSizes.LARGE:
      buttonClass.push("p-md");
      break;
    default:
      buttonClass.push("px-md", "py-sm");
      break;
  }

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
  );
};