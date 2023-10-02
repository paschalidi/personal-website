import React, { ComponentType } from "react";
import { PrismicNextLink } from "@prismicio/next";
import { PrismicText } from "@prismicio/react";
import { LinkField, RichTextField } from "@prismicio/client";
import clsx from "clsx";

type CommonLinkProps = {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * How large should the button be? Defaults to `medium`
   */
  size?: "small" | "medium" | "large";
  /**
   * Text of contents
   */
  text: string | RichTextField;
  /**
   * The position of the icon, if any. Defaults to `none`.
   */
  iconPosition?: "left" | "right";
  /**
   * The icon component itself
   */
  icon?: ComponentType<{ className: string }>;
  /**
   * Optional extra class names for icon
   */
  iconClassName?: string;
  /**
   * Optional extra class names
   */
  className?: string;
};

type LinkWithHref = {
  /**
   * the link to take the user to
   */
  link: LinkField;
  onClick?: never; // Ensures that onClick is not allowed with link
};

type LinkWithOnClick = {
  link?: never; // Ensures that link is not allowed with onClick
  /**
   * On click handler
   */
  onClick: () => void;
};

type LinkProps = CommonLinkProps & (LinkWithHref | LinkWithOnClick);

/**
 * Primary UI component for user interaction
 */
export const Link = ({
  onClick,
  link,
  primary = true,
  size = "medium",
  text,
  icon: Icon,
  iconPosition,
  iconClassName,
  className,
}: LinkProps) => {
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
    <PrismicNextLink
      onClick={onClick}
      field={link}
      className={clsx("flex items-center hover:text-zinc-800", className)}
    >
      {_iconPosition === "left" && <Icon className="text-green-400 mr-2" />}

      <div
        className={clsx(
          size === "medium"
            ? "text-lg"
            : size === "large"
            ? "text-3xl"
            : "text-md",
          primary ? "" : "text-white",
          "font-medium ",
        )}
      >
        {typeof text === "string" ? text : <PrismicText field={text} />}
      </div>

      {_iconPosition === "right" && (
        <Icon
          className={clsx(
            iconClassName ? iconClassName : "text-green-400",
            "ml-2",
          )}
        />
      )}
    </PrismicNextLink>
  );
};
