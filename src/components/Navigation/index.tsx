import { NavigationMenu } from "./NavigationMenu";
import clsx from "clsx";
import { MobileNavigationMenu } from "./MobileNavigationMenu";
import React from "react";
import { NavigationDocumentData, Simplify } from "../../../prismicio-types";
import { Locales } from "../../utils/getLocales";

export async function SSRNavigation({
  data,
  locales,
}: {
  data: Simplify<NavigationDocumentData>;
  locales: Locales;
}) {
  return (
    <div className="relative z-20">
      <div className={"hidden md:block"}>
        <NavigationMenu data={data} locales={locales} />
      </div>
      <div className={clsx("md:hidden")}>
        <MobileNavigationMenu data={data} locales={locales} />
      </div>
    </div>
  );
}
