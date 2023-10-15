import React, { useEffect, useState } from "react";
import clsx from "clsx";
import "./MobileNavigationMenu.css";
import { Locales } from "../../utils/getLocales";
import * as Popover from "@radix-ui/react-popover";
import { PrismicNextLink } from "@prismicio/next";
import { ChevronDownIcon } from "@radix-ui/react-icons";

const localeLabels = {
  "el-gr": { name: "ελληνικά", short: "ελ" },
  "en-us": { name: "english", short: "en" },
};

export const MultiLanguageMenu = ({ locales }: { locales: Locales }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <div className={clsx("cursor-pointer ml-6")}>
      <Popover.Root
        onOpenChange={() => {
          setIsOpen(!isOpen);
        }}
        open={isOpen}
      >
        <Popover.Trigger asChild>
          <div
            className={clsx(
              "font-medium text-md cursor-pointer text-zinc-300 flex flex-row items-center gap-1",
            )}
          >
            {localeLabels[locales[0].lang].short}
            <ChevronDownIcon className={"text-zinc-300"} />
          </div>
        </Popover.Trigger>
        <Popover.Portal>
          <Popover.Content
            align={"end"}
            className="z-50 border-zinc-900 outline-none data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade select-none rounded-lg bg-white px-4 py-3 shadow will-change-[transform,opacity] flex flex-col gap-2"
            sideOffset={5}
          >
            {locales.map(({ lang, url, lang_name }) => {
              return (
                <div className={"group w-fit"} key={url}>
                  <PrismicNextLink
                    href={url}
                    locale={lang}
                    aria-label={`Change language to ${lang_name}`}
                  >
                    {localeLabels[lang].name}
                  </PrismicNextLink>
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-200 h-[2px] bg-black"></span>
                </div>
              );
            })}
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </div>
  );
};
