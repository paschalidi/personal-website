"use client";
import clsx from "clsx";
import { Content } from "@prismicio/client";

import { PrismicRichText } from "../../components/PrismicRichText";
import { JSXMapSerializer, SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { BlogBounded } from "../../components/BlogBounded";
import React from "react";

const components: JSXMapSerializer = {
  heading1: ({ children }) => <h1 className="mb-8">{children}</h1>,
  heading2: ({ children }) => <h2 className="text-4xl mb-8">{children}</h2>,
  heading3: ({ children }) => <h3 className="text-2xl my-8">{children}</h3>,
  heading6: ({ children }) => <h6 className="text-xl mb-4">{children}</h6>,
  paragraph: ({ children }) => (
    <p className="text-xl md:text-2xl pb-4 last:mb-0">{children}</p>
  ),
  oList: ({ children }) => (
    <ol className="text-2xl mb-7 pl-4 last:mb-0 md:pl-6">{children}</ol>
  ),
  oListItem: ({ children }) => (
    <li className="text-2xl mb-1 list-decimal pl-1 last:mb-0 md:pl-2">
      {children}
    </li>
  ),
  list: ({ children }) => (
    <ul className="text-2xl mb-7 pl-4 last:mb-0 md:pl-6">{children}</ul>
  ),
  listItem: ({ children }) => (
    <li className="text-2xl mb-1 list-disc pl-1 last:mb-0 md:pl-2">
      {children}
    </li>
  ),
  preformatted: ({ children }) => (
    <pre className="mb-7 rounded bg-slate-100 p-4 text-sm last:mb-0 md:p-8 md:text-lg">
      <code>{children}</code>
    </pre>
  ),
  strong: ({ children }) => (
    <strong className="font-semibold">{children}</strong>
  ),
  hyperlink: ({ children, node }) => (
    <PrismicNextLink
      field={node.data}
      className="underline decoration-1 underline-offset-2"
    >
      {children}
    </PrismicNextLink>
  ),
  image: ({ children, node }) => {
    const { alt } = node;
    return (
      <div className={"my-16"}>
        <PrismicNextImage field={node} />
        {alt && (
          <p className="mt-4 text-neutral-700 text-sm font-normal">{alt}</p>
        )}
      </div>
    );
  },
};

/**
 * Props for `TextProps`.
 */
export type TextProps = SliceComponentProps<Content.TextSlice>;

const Text = ({ slice }: TextProps) => {
  const { background_color: bg, padding_top, padding_bottom } = slice.primary;

  console.log(JSON.stringify(slice.primary.text, null, 2));
  return (
    <BlogBounded
      as="section"
      className={clsx(
        bg && bg.includes("white") && "bg-white",
        bg && bg.includes("neutral") && "bg-neutral-100",
        bg && bg.includes("gray") && "bg-gray-100",

        padding_top && padding_top.includes("zero") && "pt-0",
        padding_top && padding_top.includes("sm") && "pt-5",
        padding_top && padding_top.includes("md") && "pt-5 md:pt-10",
        padding_top && padding_top.includes("lg") && "pt-10 md:pt-16",
        padding_top && padding_top.includes("xl") && "pt-16 md:pt-28",

        padding_bottom && padding_bottom.includes("zero") && "pb-0",
        padding_bottom && padding_bottom.includes("sm") && "pb-5",
        padding_bottom && padding_bottom.includes("md") && "pb-5 md:pb-10",
        padding_bottom && padding_bottom.includes("lg") && "pb-10 md:pb-16",
        padding_bottom && padding_bottom.includes("xl") && "pb-16 md:pb-28",
        "leading-relaxed",
      )}
    >
      <div
        className={clsx(
          slice.variation === "twoColumns" && "md:columns-2 md:gap-6",
        )}
      >
        <PrismicRichText field={slice.primary.text} components={components} />
      </div>
    </BlogBounded>
  );
};

export default Text;
