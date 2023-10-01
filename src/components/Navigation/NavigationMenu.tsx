import React from "react";
import { NavigationDocumentData, Simplify } from "../../../prismicio-types";
import { ButtonPrismicLink } from "../Button";
import { Link } from "../Link";
import clsx from "clsx";
import "./MobileNavigationMenu.css";
import { isFilled } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import Image from "next/image";

export const NavigationMenu = ({
  isLogoWhite,
  isTextWhite,
  data,
}: {
  isLogoWhite: boolean;
  isTextWhite: boolean;
  data: Simplify<NavigationDocumentData>;
}) => {
  const logo = isLogoWhite ? data.logo_white : data.logo;

  return (
    <header className={clsx("bg-transparent", "pc")}>
      <nav className="relative flex w-full flex-wrap items-center justify-between py-4 h-[92px]">
        <div className="flex w-full flex-wrap items-center justify-between">
          {isFilled.image(logo) && (
            <PrismicNextLink field={data.homepage_link}>
              <Image
                src={logo.url}
                alt={logo.alt}
                width={logo.dimensions.width}
                height={logo.dimensions.height}
              />
            </PrismicNextLink>
          )}
          <div
            className={clsx(
              "hidden md:flex md:flex-row gap-3 lg:gap-4 xl:gap-8 items-center",
            )}
          >
            {data.links.map(({ text, link, is_showing_as_button }) => {
              return is_showing_as_button ? (
                <ButtonPrismicLink
                  key={text}
                  link={link}
                  text={text}
                  size="small"
                  primary={!isTextWhite}
                />
              ) : (
                <Link
                  className={clsx(isTextWhite ? "text-white" : "text-black")}
                  key={text}
                  link={link}
                  text={text}
                />
              );
            })}
          </div>
        </div>
      </nav>
    </header>
  );
};
