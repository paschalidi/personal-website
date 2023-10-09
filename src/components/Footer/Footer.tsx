import { PrismicNextLink } from "@prismicio/next";
import React from "react";
import { FooterDocumentData, Simplify } from "../../../prismicio-types";

export async function Footer({ data }: { data: Simplify<FooterDocumentData> }) {
  const { copyright_text, copyright_links } = data;

  return (
    <footer className="w-full py-4 pb-4">
      <hr className="w-full h-px my-10 md:my-6"></hr>
      <div>
        <div className="flex flex-col justify-center items-center gap-4">
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
