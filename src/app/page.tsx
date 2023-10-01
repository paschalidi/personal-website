import { notFound } from "next/navigation";
import { SliceZone } from "@prismicio/react";

import { createClient } from "../../prismicio";
import { components } from "../../slices";
import { Metadata } from "next";
import { SSRNavigation } from "../../components/Navigation/SSRNavigation";

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getByUID("page", "home");

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
    openGraph: {
      title: page.data.meta_title,
      images: [
        {
          url: page.data.meta_image?.url,
        },
      ],
    },
  };
}

export default async function Page() {
  const client = createClient();
  const page = await client.getByUID("page", "home").catch(() => notFound());

  return (
    <>
      <SSRNavigation />
      <SliceZone slices={page.data.slices} components={components} />
    </>
  );
}