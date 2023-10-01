import React, { ReactNode } from "react";
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
  icon: ReactNode;
  /**
   * the alt for the readers
   */
  iconDescription?: string;
};

/**
 * Primary UI component for user interaction
 */
export const IconButton = ({
  primary = true,
  size = "medium",
  disabled = false,
  icon,
  iconDescription,
  ...props
}: ButtonProps) => {
  return (
    <button
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
                ? "w-10 h-10 "
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
      <div className={"mx-auto"}>{icon}</div>
      <span className="sr-only">{iconDescription}</span>
    </button>
  );
};
