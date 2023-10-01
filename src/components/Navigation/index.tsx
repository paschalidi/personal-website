"use client"; // using the radix library and they use client side code
import React from "react";
import { NavigationDocumentData, Simplify } from "../../../prismicio-types";
import { NavigationMenu } from "./NavigationMenu";
import { MobileNavigationMenu } from "./MobileNavigationMenu";
import clsx from "clsx";

export const Navigation = ({
  isLogoWhite,
  isTextWhite,
  data,
}: {
  isLogoWhite: boolean;
  isTextWhite: boolean;
  data: Simplify<NavigationDocumentData>;
}) => {
  return (
    <div className="relative z-50">
      <div className={"hidden md:block"}>
        <NavigationMenu
          data={data}
          isLogoWhite={isLogoWhite}
          isTextWhite={isTextWhite}
        />
      </div>
      <div className={clsx("md:hidden")}>
        <MobileNavigationMenu
          homepageLink={data.homepage_link}
          links={data.links}
          logo={data.logo}
        />
      </div>
    </div>
  );
};
