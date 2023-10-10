import { notFound } from "next/navigation";
import { SliceZone } from "@prismicio/react";

import { createClient } from "../../prismicio";
import { components } from "../../slices";
import { Metadata } from "next";
import { Layout } from "../../components/Layout";
import { getLocales } from "../../utils/getLocales";

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getByUID("page", "home");

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
    keywords: page.data.meta_keywords,
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

export default async function Page({ params: { lang } }) {
  const client = createClient();
  const page = await client.getByUID("page", "home", { lang }).catch(() => {
    return notFound();
  });
  const { data: navigation } = await client.getSingle("navigation", {
    lang,
  });
  const locales = await getLocales(page, client);
  return (
    <Layout navigation={navigation} locales={locales}>
      <SliceZone slices={page.data.slices} components={components} />
    </Layout>
  );
}

export async function generateStaticParams() {
  const client = createClient();
  const page = await client.getByUID("page", "home", { lang: "*" });

  return [{ lang: page.lang }];
}
