import { PrismicNextLink } from "@prismicio/next";
import React from "react";
import { FooterDocumentData, Simplify } from "../../../prismicio-types";
import { Locales } from "../../utils/getLocales";
import clsx from "clsx";
import { IconButton } from "../IconButton";
import { getSocialIcon } from "../../utils/socialMediaSvgList";

const localeLabels = {
  "el-gr": "GR",
  "en-us": "EN",
};

export async function Footer({
  data,
  locales,
}: {
  data: Simplify<FooterDocumentData>;
  locales: Locales;
}) {
  const { copyright_text, copyright_links } = data;

  return (
    <footer className="w-full py-4 pb-4">
      <hr className="w-full h-px my-10 md:my-6"></hr>
      <div>
        <div className="flex flex-col justify-center items-center gap-4">
          <div className="gap-4 flex flex-row">
            {data.social_links.map(({ text, link, aria_text }) => (
              <PrismicNextLink key={text} field={link} target="_blank">
                <IconButton
                  size={"small"}
                  ariaLabel={aria_text}
                  key={text}
                  icon={getSocialIcon({ url: link.url })}
                  iconClassname={"text-zinc-50"}
                />
              </PrismicNextLink>
            ))}
          </div>

          <ul className="flex flex-wrap gap-2 text-sm items-center">
            {locales.map((locale, index) => (
              <li key={locale.lang}>
                <PrismicNextLink
                  className={clsx(index === 0 && "underline font-semibold")}
                  href={locale.url}
                  locale={locale.lang}
                  aria-label={`Change language to ${locale.lang_name}`}
                >
                  {localeLabels[locale.lang] || locale.lang}
                </PrismicNextLink>
              </li>
            ))}
          </ul>

          <div className="text-zinc-600 text-sm font-normal leading-tight">
            {copyright_text}
          </div>

          <div className={"flex flex-row justify-center items-center gap-3"}>
            {copyright_links.map(({ link, text }) => {
              if (!link.slug) return null;
              return (
                <PrismicNextLink
                  key={text}
                  field={link}
                  className="text-zinc-500 text-sm font-normal underline leading-tight"
                >
                  {text}
                </PrismicNextLink>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
