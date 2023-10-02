import { notFound } from "next/navigation";
import { createClient } from "../../prismicio";
import { Metadata } from "next";
import clsx from "clsx";
import { PrismicRichText } from "../../components/PrismicRichText";
import * as prismic from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";

interface Params {
  uid: string;
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
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

export default async function Page({ params }: { params: Params }) {
  const client = createClient();
  const { data } = await client.getSingle("about").catch(() => notFound());

  return (
    <div className="pt-12 pb-10 md:pt-28">
      <div
        className={clsx(
          "flex flex-col lg:flex-row gap-12 lg:gap-24 leading-snug justify-between",
        )}
      >
        {prismic.isFilled.image(data.image) && (
          <div
            className={clsx("order-2 lg:order-1 lg:w-5/12 ")}
            style={{ backgroundImage: `url(${data.image})` }}
          >
            <PrismicNextImage
              width={data.image.dimensions.width}
              height={data.image.dimensions.height}
              field={data.image}
            />
          </div>
        )}
        <div className={clsx("order-1 lg:order-2 lg:w-6/12 tracking-wider")}>
          <div>
            <PrismicRichText field={data.text} />
          </div>
        </div>
      </div>
    </div>
  );
}
