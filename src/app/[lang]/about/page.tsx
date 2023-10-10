import { notFound } from "next/navigation";
import { createClient } from "../../../prismicio";
import { Metadata } from "next";
import clsx from "clsx";
import { PrismicRichText } from "../../../components/PrismicRichText";
import * as prismic from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { getLocales } from "../../../utils/getLocales";
import { Layout } from "../../../components/Layout";

interface Params {
  uid: string;
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle("about").catch(() => notFound());
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

export default async function Page({ params }) {
  const client = createClient();
  const page = await client
    .getSingle("about", { lang: params.lang })
    .catch(() => {
      return notFound();
    });
  const { data } = page;
  const locales = await getLocales(page, client);

  return (
    <Layout locales={locales}>
      <div className="pt-12 pb-10 md:pt-28">
        <div
          className={clsx(
            "flex flex-col lg:flex-row gap-12 lg:gap-24 leading-snug justify-between xl:items-center",
          )}
        >
          {prismic.isFilled.image(data.image) && (
            <div
              className={clsx(
                "order-2 lg:order-1 max-w-sm lg:w-6/12 xl:w-4/12",
              )}
              style={{ backgroundImage: `url(${data.image})` }}
            >
              <PrismicNextImage
                width={data.image.dimensions.width}
                height={data.image.dimensions.height}
                field={data.image}
              />
            </div>
          )}
          <div
            className={clsx(
              "order-1 lg:order-2 lg:w-7/12 xl:w-6/12 tracking-wider",
            )}
          >
            <div>
              <PrismicRichText field={data.text} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function generateStaticParams() {
  const client = createClient();
  const page = await client.getSingle("about", { lang: "*" });

  return [{ lang: page.lang }];
}
