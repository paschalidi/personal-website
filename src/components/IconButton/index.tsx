"use client";
import React, { ComponentType } from "react";
import clsx from "clsx";

type ButtonProps = {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * How large should the button be? Defaults to `medium`
   */
  size?: "small" | "medium";
  /**
   * Optional click handler
   */
  onClick?: () => void;
  /**
   * Disabled
   */
  disabled?: boolean;
  /**
   * the Icon to be rendered
   */
  icon: ComponentType<{ className: string }>;
  /**
   * the alt for the readers
   */
  iconDescription?: string;
  /**
   * the class name for the icon
   */
  iconClassname?: string;
  /**
   * aria-label for the button
   */
  ariaLabel?: string;
};

/**
 * Primary UI component for user interaction
 */
export const IconButton = ({
  ariaLabel,
  primary = true,
  size = "medium",
  disabled = false,
  icon: Icon,
  iconClassname = "",
  iconDescription,
  ...props
}: ButtonProps) => {
  return (
    <button
      aria-label={ariaLabel}
      disabled={disabled}
      type="button"
      {...props}
      className={`
            ${clsx(primary ? "bg-neutral-800" : "bg-white")} 
            ${clsx(disabled && "bg-opacity-50")}
            ${clsx(
              size === "medium"
                ? "h-11 w-11"
                : size === "small"
                ? "w-7 h-7"
                : "",
            )}
            focus:ring-4 
            focus:outline-none 
            focus:ring-blue-300 
            font-medium 
            rounded-full 
            inline-flex 
            items-center 
      `}
    >
      <div className={"mx-auto"}>{<Icon className={iconClassname} />}</div>
      <span className="sr-only">{iconDescription}</span>
    </button>
  );
};
