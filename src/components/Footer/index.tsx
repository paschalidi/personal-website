import { createClient } from "../../prismicio";
import React from "react";
import { Footer } from "./Footer";
import { Locales } from "../../utils/getLocales";

export async function SSRFooter({ locales }: { locales: Locales }) {
  const client = createClient();
  const footer = await client.getSingle("footer");
  const { data } = footer;

  return <Footer data={data} locales={locales} />;
}
