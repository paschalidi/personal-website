import { createClient } from "../../prismicio";
import React from "react";
import { Footer } from "./Footer";
import { ErrorBoundary } from "react-error-boundary";
import { Fallback } from "../Fallback";

export async function SSRFooter() {
  const client = createClient();
  const footer = await client.getSingle("footer");
  const { data } = footer;

  return (
    <ErrorBoundary fallback={<Fallback />}>
      <Footer data={data} />
    </ErrorBoundary>
  );
}
