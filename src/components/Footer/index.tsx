import { createClient } from "../../prismicio";
import React from "react";
import { Footer } from "./Footer";
import { Locales } from "../../utils/getLocales";
import { ErrorBoundary } from "react-error-boundary";

export async function SSRFooter({ locales }: { locales: Locales }) {
  const client = createClient();
  const footer = await client.getSingle("footer");
  const { data } = footer;

  return (
    <ErrorBoundary fallback={null}>
      <Footer data={data} locales={locales} />
    </ErrorBoundary>
  );
}
