"use client"; // because of state
import React, { useEffect, useState } from "react";
import * as Menubar from "@radix-ui/react-menubar";
import { Burger, Close } from "../Icons";
import { NavigationDocumentData, Simplify } from "../../../prismicio-types";
import { Link } from "../Link";
import clsx from "clsx";
import "./MobileNavigationMenu.css";

export const MobileNavigationMenu = ({
  data,
}: {
  data: Simplify<NavigationDocumentData>;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <header className={clsx("pc bg-white")}>
      <nav className="relative flex w-full flex-wrap items-center justify-between py-2 h-[64px]">
        <Menubar.Root className="flex p-[3px]">
          <Menubar.Menu>
            <Menubar.Trigger
              onClick={() => setIsOpen(!isOpen)}
              className="lg:py-2 lg:px-3 outline-none select-none"
            >
              {isOpen ? <Close /> : <Burger />}
            </Menubar.Trigger>
            {isOpen && (
              <Menubar.Portal>
                <Menubar.Content
                  loop
                  className="md:hidden animation w-screen h-[100vh] bg-white z-50"
                  align="start"
                  sideOffset={-43}
                  alignOffset={0}
                >
                  <div className={"pc flex flex-col"}>
                    <div className="relative flex w-full flex-wrap items-center justify-between py-2 lg:py-4 h-[64px] md:h-[92px]">
                      <>
                        <div className="flex w-full flex-wrap items-center justify-between">
                          <div onClick={() => setIsOpen(false)}>
                            <Close className={"mr-1"} />
                          </div>
                        </div>
                      </>
                    </div>
                    <div>
                      {data.links.map(({ link, label }, index: number) => {
                        return (
                          <Menubar.Item key={label}>
                            <Link
                              link={link}
                              className={clsx(
                                index === 0 && "mt-12",
                                "mb-10 text-2xl",
                              )}
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
