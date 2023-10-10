import { createClient } from "../../prismicio";
import { NavigationMenu } from "./NavigationMenu";
import clsx from "clsx";
import { MobileNavigationMenu } from "./MobileNavigationMenu";
import React from "react";

export async function SSRNavigation() {
  const client = createClient();
  const { data } = await client.getSingle("navigation");

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
