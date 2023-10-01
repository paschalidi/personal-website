import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { BlogBounded } from "../../components/BlogBounded";
import { PrismicRichText } from "../../components/PrismicRichText";
import { Card } from "../../components/Card";

/**
 * Props for `LatestThreeStories`.
 */
export type LatestThreeStoriesProps =
  SliceComponentProps<Content.LatestThreeStoriesSlice>;

/**
 * Component for "LatestThreeStories" Slices.
 */
export const LatestThreeStories = ({
  slice,
}: LatestThreeStoriesProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <BlogBounded className={"pb-28"}>
        <div className={"pt-20 md:pt-40 xl:pt-40 2xl:pt-60"}>
          <div>
            <PrismicRichText field={slice.primary.header} />
          </div>

          <div className="flex flex-col pt-12 divide-y divide-zinc-200">
            {slice.items.map((item, index) => {
              return (
                <div
                  key={JSON.stringify(item.title)}
                  className={"flex flex-col gap-4 py-12 first:pt-0 last:pb-0"}
                >
                  <Card
                    image={item.image}
                    date={item.date}
                    link={item.link}
                    linkText={item.link_text}
                    title={item.title}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </BlogBounded>
    </section>
  );
};

export default LatestThreeStories;
