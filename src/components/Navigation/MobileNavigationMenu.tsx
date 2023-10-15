"use client"; // because of state
import React, { useEffect, useState } from "react";
import * as Menubar from "@radix-ui/react-menubar";
import { NavigationDocumentData, Simplify } from "../../../prismicio-types";
import { Link } from "../Link";
import clsx from "clsx";
import "./MobileNavigationMenu.css";
import { usePathname } from "next/navigation";
import { Cross1Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Locales } from "../../utils/getLocales";
import { MultiLanguageMenu } from "./MultiLanguageMenu";

export const MobileNavigationMenu = ({
  data,
  locales,
}: {
  data: Simplify<NavigationDocumentData>;
  locales: Locales;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);
  return (
    <header>
      <nav className="relative flex w-full flex-wrap items-center justify-between py-2 h-[64px]">
        <div>
          <Link
            size={"small"}
            className={clsx("text-zinc-50 text-2xl ")}
            key={data.homepage_label}
            link={data.homepage_link}
            text={data.homepage_label}
          />
        </div>
        <Menubar.Root className="flex p-[3px]">
          <Menubar.Menu>
            <div className={"flex flex-row gap-8"}>
              <MultiLanguageMenu locales={locales} />
              <Menubar.Trigger
                aria-labelledby="button"
                aria-label="Hamburger button, which opens the mobile navigation menu"
                onClick={() => setIsOpen(!isOpen)}
                className="lg:py-2 lg:px-3 outline-none select-none"
              >
                <HamburgerMenuIcon
                  width={24}
                  height={24}
                  className={"text-zinc-50"}
                />
              </Menubar.Trigger>
            </div>
            {isOpen && (
              <Menubar.Portal>
                <Menubar.Content
                  loop
                  className="md:hidden animation w-screen h-[100vh] bg-stone-900 z-50"
                  align="start"
                  sideOffset={-43}
                  alignOffset={0}
                >
                  <div className={"pc flex flex-col"}>
                    <div className="relative flex w-full flex-wrap items-center justify-between py-2 lg:py-4 h-[64px] md:h-[92px]">
                      <>
                        <div className="flex w-full flex-wrap items-center justify-between">
                          <div>
                            <Link
                              size={"small"}
                              className={clsx("text-zinc-300 text-2xl")}
                              key={data.homepage_label}
                              link={data.homepage_link}
                              text={data.homepage_label}
                            />
                          </div>

                          <div className={"flex flex-row gap-8"}>
                            <MultiLanguageMenu locales={locales} />
                            <div onClick={() => setIsOpen(false)}>
                              <Cross1Icon
                                width={24}
                                height={24}
                                className={"mr-1 text-zinc-50"}
                              />
                            </div>
                          </div>
                        </div>
                      </>
                    </div>
                    <div className={"flex flex-col gap-8 mt-12"}>
                      {data.dropdown_links.map(({ link, label }) => {
                        return (
                          <Menubar.Item key={label}>
                            <Link
                              link={link}
                              className={clsx("text-2xl text-zinc-300")}
                              text={label}
                            />
                          </Menubar.Item>
                        );
                      })}
                      <hr />
                      {data.links.map(({ link, label }) => {
                        return (
                          <Menubar.Item key={label}>
                            <Link
                              link={link}
                              className={clsx("text-2xl text-zinc-300")}
                              text={label}
                            />
                          </Menubar.Item>
                        );
                      })}
                    </div>
                  </div>
                </Menubar.Content>
              </Menubar.Portal>
            )}
          </Menubar.Menu>
        </Menubar.Root>
      </nav>
    </header>
  );
};
