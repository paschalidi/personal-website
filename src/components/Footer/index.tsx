import { createClient } from "../../prismicio";
import { PrismicNextLink } from "@prismicio/next";
import React from "react";

export async function Footer() {
  const client = createClient();
  const footer = await client.getSingle("footer");
  const { data } = footer;
  const { copyright_links, copyright_text } = data;

  return (
    <footer className="w-full py-4 pb-8">
      <div className="w-full h-px bg-neutral-100 my-10 md:my-6"></div>
      <div className="pc">
        <div className="flex flex-col justify-center md:items-center gap-4">
          <div className="text-zinc-600 text-sm font-normal leading-tight">
            {copyright_text}
          </div>
          <div className={"flex flex-row justify-center md:items-center gap-2"}>
            {copyright_links.map(({ link, text }) => {
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
