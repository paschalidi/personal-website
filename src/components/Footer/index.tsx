import { createClient } from "../../prismicio";
import React from "react";
import { Footer } from "./Footer";

export async function SSRFooter() {
  const client = createClient();
  const footer = await client.getSingle("footer");
  const { data } = footer;

  return <Footer data={data} />;
}
