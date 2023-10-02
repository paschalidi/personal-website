"use client"; // because of the radix Popover
import React from "react";
import { NavigationDocumentData, Simplify } from "../../../prismicio-types";
import { Link } from "../Link";
import clsx from "clsx";
import "./MobileNavigationMenu.css";
import * as Popover from "@radix-ui/react-popover";

export const NavigationMenu = ({
  data,
}: {
  data: Simplify<NavigationDocumentData>;
}) => {
  return (
    <header className={clsx("bg-transparent")}>
      <nav className="relative flex w-full flex-wrap items-center justify-between py-4 h-[92px]">
        <div className="flex w-full flex-wrap items-center justify-between">
          <div>
            <Link
              size={"large"}
              className={clsx("text-black text-2xl")}
              key={data.homepage_label}
              link={data.homepage_link}
              text={data.homepage_label}
            />
          </div>
          <div
            className={clsx(
              "hidden md:flex md:flex-row gap-3 lg:gap-4 xl:gap-8 items-center",
            )}
          >
            <Popover.Root>
              <Popover.Trigger asChild>
                <div
                  className={clsx(
                    "font-medium text-zinc-600 hover:text-zinc-800 text-md cursor-pointer",
                  )}
                >
                  {data.dropdown_links_header}
                </div>
              </Popover.Trigger>
              <Popover.Portal>
                <Popover.Content
                  className="z-30 data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade select-none rounded-sm bg-white px-3 py-1 shadow will-change-[transform,opacity] flex flex-col gap-2"
                  sideOffset={5}
                >
                  {data.dropdown_links.map(({ link, label }) => {
                    return (
                      <Link
                        key={label}
                        text={label}
                        link={link}
                        size={"small"}
                        className={"w-full flex text-zinc-500"}
                      />
                    );
                  })}
                </Popover.Content>
              </Popover.Portal>
            </Popover.Root>

            {data.links.map(({ link, label }) => {
              return (
                <Link
                  size={"small"}
                  className={clsx("text-zinc-500")}
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
