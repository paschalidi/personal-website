import { notFound } from "next/navigation";
import { SliceZone } from "@prismicio/react";
import { createClient } from "../../../prismicio";
import { components } from "../../../slices";
import { Metadata } from "next";
import { getLocales } from "../../../utils/getLocales";
import { Layout } from "../../../components/Layout";

interface Params {
  uid: string;
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const client = createClient();
  const page = await client.getByUID("page", params.uid).catch(() => {
    return notFound();
  });
  return {
    authors: { name: "Elena Griva", url: "https://www.artegriva.com" },
    title: page.data.meta_title,
    description: page.data.meta_description,
    openGraph: {
      title: page.data.meta_title,
      description: page.data.meta_description,
      images: [
        {
          url: page.data.meta_image?.url,
        },
      ],
    },
  };
}

export default async function Page({ params }) {
  const client = createClient();
  const page = await client
    .getByUID("page", params.uid, { lang: params.lang })
    .catch(() => {
      return notFound();
    });
  const { data: navigation } = await client.getSingle("navigation", {
    lang: params.lang,
  });

  const locales = await getLocales(page, client);

  return (
    <>
      <Layout locales={locales} navigation={navigation}>
        <SliceZone
          slices={page.data.slices}
          components={components}
          context={{ pageUid: params.uid }}
        />
      </Layout>
    </>
  );
}

export async function generateStaticParams() {
  const client = createClient();
  const pages = await client.getAllByType("page", { lang: "*" });

  return pages.map((page) => {
    return {
      uid: page.uid,
      lang: page.lang,
    };
  });
}
