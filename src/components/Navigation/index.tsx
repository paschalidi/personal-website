import { NavigationMenu } from "./NavigationMenu";
import clsx from "clsx";
import { MobileNavigationMenu } from "./MobileNavigationMenu";
import React from "react";
import { NavigationDocumentData, Simplify } from "../../../prismicio-types";

export async function SSRNavigation({
  data,
}: {
  data: Simplify<NavigationDocumentData>;
}) {
  return (
    <div className="relative z-20">
      <div className={"hidden md:block"}>
        <NavigationMenu data={data} />
      </div>
      <div className={clsx("md:hidden")}>
        <MobileNavigationMenu data={data} />
      </div>
    </div>
  );
}
