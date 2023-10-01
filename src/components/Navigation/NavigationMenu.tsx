import React from "react";
import { NavigationDocumentData, Simplify } from "../../../prismicio-types";
import { Link } from "../Link";
import clsx from "clsx";
import "./MobileNavigationMenu.css";

export const NavigationMenu = ({
  data,
}: {
  data: Simplify<NavigationDocumentData>;
}) => {
  return (
    <header className={clsx("bg-transparent", "pc")}>
      <nav className="relative flex w-full flex-wrap items-center justify-between py-4 h-[92px]">
        <div className="flex w-full flex-wrap items-center justify-between">
          <div
            className={clsx(
              "hidden md:flex md:flex-row gap-3 lg:gap-4 xl:gap-8 items-center",
            )}
          >
            {data.links.map(({ link, label }) => {
              return (
                <Link
                  className={clsx("text-black")}
                  key={label}
                  link={link}
                  text={label}
                />
              );
            })}
          </div>
        </div>
      </nav>
    </header>
  );
};
