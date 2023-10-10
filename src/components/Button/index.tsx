import React, { ComponentType } from "react";
import clsx from "clsx";
import { PrismicText } from "@prismicio/react";
import { LinkField, RichTextField } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import { IconProps } from "@radix-ui/react-icons/dist/types";

type ButtonProps = {
  /**
   * type of the button
   */
  type?: "button" | "submit" | "reset";
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * How large should the button be? Defaults to `medium`
   */
  size?: "small" | "medium";
  /**
   * The text of the button
   */
  text: string | RichTextField;
  /**
   * Optional click handler
   */
  onClick?: () => void;
  /**
   * Disabled
   */
  disabled?: boolean;
  /**
   * The extra class names
   */
  className?: string;
  /**
   * The position of the icon, if any. Defaults to `none`.
   */
  iconPosition?: "left" | "right";
  /**
   * The icon component itself
   */
  icon?: React.ForwardRefExoticComponent<
    IconProps & React.RefAttributes<SVGSVGElement>
  >;
  /**
   * The icon color is white
   */
  iconWhite?: boolean;
};

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = true,
  size = "medium",
  text,
  disabled = false,
  iconPosition,
  icon: Icon,
  className,
  onClick,
  type = "button",
  iconWhite = false,
}: ButtonProps) => {
  const getIconPosition = () => {
    if (!Icon) {
      return "none";
    }
    if (Icon && !iconPosition) {
      return "right";
    }
    return iconPosition;
  };
  const _iconPosition = getIconPosition();

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={type}
      className={clsx("text-left outline-none", className)}
    >
      <div
        className={`
          inline-flex 
          py-2 
          rounded-full 
          justify-center 
          items-center 
          gap-2 
          ${clsx(primary ? "bg-neutral-800" : "bg-green-400")}
          ${clsx(disabled && "bg-opacity-50")}
          ${clsx(
            size === "medium"
              ? "min-w-36 h-14 px-8"
              : size === "small"
              ? "min-w-32 h-12 px-5"
              : "",
          )}
        `}
      >
        <div
          className={`
          ${clsx(primary ? "text-white " : "text-neutral-900")}
          ${clsx(disabled && "text-opacity-50")}
          text-lg 
          leading-7
        `}
        >
          <div className="grid place-items-center">
            <div className="grid grid-cols-[auto,1fr] items-center">
              {_iconPosition === "left" && Icon && (
                <div className={"text-center mr-2"}>
                  <Icon
                    width={18}
                    height={18}
                    className={`fill-current ${clsx(
                      iconWhite
                        ? "text-white"
                        : primary
                        ? "text-zinc-300"
                        : "text-black",
                    )}`}
                  />
                </div>
              )}
              <div className="text-center">
                {typeof text === "string" ? text : <PrismicText field={text} />}
              </div>
              {_iconPosition === "right" && (
                <div className={"text-center ml-2"}>
                  {Icon && (
                    <Icon
                      width={18}
                      height={18}
                      className={`fill-current ${clsx(
                        iconWhite
                          ? "text-white"
                          : primary
                          ? "text-zinc-200 "
                          : "text-black",
                      )}`}
                    />
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </button>
  );
};

export const ButtonPrismicLink = ({
  link,
  ...props
}: ButtonProps & {
  /**
   * The text of the button
   */
  link: LinkField;
}) => {
  return (
    <PrismicNextLink field={link}>
      <Button {...props} />
    </PrismicNextLink>
  );
};
