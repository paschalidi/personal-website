import { PrismicNextLink } from "@prismicio/next";
import React from "react";
import { FooterDocumentData, Simplify } from "../../../prismicio-types";
import { IconButton } from "../IconButton";
import { getSocialIcon } from "../../utils/socialMediaSvgList";

export async function Footer({ data }: { data: Simplify<FooterDocumentData> }) {
  const { copyright_text, copyright_links } = data;

  return (
    <footer className="w-full py-4 pb-4 mt-16">
      <div>
        <div className="flex flex-col justify-center items-center gap-4">
          <div className="gap-1 flex flex-row">
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

          <div className="text-zinc-300 text-sm font-normal leading-tight">
            {copyright_text}
          </div>

          <div className={"flex flex-row justify-center items-center gap-3"}>
            {copyright_links.map(({ link, text }) => {
              if (!link.slug) return null;
              return (
                <PrismicNextLink
                  key={text}
                  field={link}
                  className="text-zinc-300 text-sm font-normal underline leading-tight"
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
