import { PrismicNextLink } from "@prismicio/next";
import {
  JSXMapSerializer,
  PrismicRichText as BasePrismicRichText,
} from "@prismicio/react";
import { RichTextField } from "@prismicio/client";
import React from "react";

const defaultComponents: JSXMapSerializer = {
  heading1: ({ children }) => (
    <h1 className="mb-7 text-zinc-300">{children}</h1>
  ),
  heading2: ({ children }) => <h2 className={"text-zinc-300"}>{children}</h2>,
  heading3: ({ children }) => (
    <h3 className="mb-4 lg:mb-6 text-zinc-300">{children}</h3>
  ),
  heading6: ({ children }) => (
    <h6 className="text-lg md:text-xl mb-4 text-zinc-300">{children}</h6>
  ),
  paragraph: ({ children }) => (
    <p className="text-md md:text-lg mb-4 last:mb-0 text-zinc-300">
      {children}
    </p>
  ),
  oList: ({ children }) => (
    <ol className="mb-7 pl-4 last:mb-0 md:pl-6 text-zinc-300">{children}</ol>
  ),
  oListItem: ({ children }) => (
    <li className="mb-1 list-decimal pl-1 last:mb-0 md:pl-2 text-zinc-300">
      {children}
    </li>
  ),
  list: ({ children }) => (
    <ul className="mb-7 pl-4 last:mb-0 md:pl-6 text-zinc-300">{children}</ul>
  ),
  listItem: ({ children }) => (
    <li className="mb-1 list-disc pl-1 last:mb-0 md:pl-2 text-zinc-300">
      {children}
    </li>
  ),
  preformatted: ({ children }) => (
    <pre className="mb-7 rounded bg-slate-100 p-4 text-sm last:mb-0 md:p-8 md:text-lg text-zinc-300">
      <code>{children}</code>
    </pre>
  ),
  strong: ({ children }) => (
    <strong className="font-semibold text-zinc-300">{children}</strong>
  ),
  hyperlink: ({ children, node }) => (
    <PrismicNextLink
      field={node.data}
      className="underline decoration-1 underline-offset-2 text-zinc-300"
    >
      {children}
    </PrismicNextLink>
  ),
};

export const PrismicRichText = ({
  field,
  className,
  components,
  ...props
}: {
  field: RichTextField;
  className?: string;
  components?: JSXMapSerializer;
}) => {
  return (
    <BasePrismicRichText
      components={{ ...defaultComponents, ...components }}
      field={field}
      {...props}
    />
  );
};
