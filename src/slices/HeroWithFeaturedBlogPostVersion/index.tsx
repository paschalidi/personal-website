import { Content, isFilled } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "../../components/PrismicRichText";
import { formatDate } from "../../utlis/formatDate";
import { Link } from "../../components/Link";
import { ArrowRight } from "../../components/Icons";

/**
 * Props for `HeroWithFeaturedBlogPostVersion`.
 */
export type HeroWithFeaturedBlogPostVersionProps =
  SliceComponentProps<Content.HeroWithFeaturedBlogPostVersionSlice>;

/**
 * Component for "HeroWithFeaturedBlogPostVersion" Slices.
 */
export const HeroWithFeaturedBlogPostVersion = ({
  slice,
}: HeroWithFeaturedBlogPostVersionProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="flex flex-col lg:flex-row justify-center mt-[-92px] min-h-[630px]">
        {isFilled.image(slice.primary.image) && (
          <div className="order-2 lg:order-1 w-full lg:w-2/5 xl:w-2/5 lg:bg-zinc-900 flex flex-col relative ">
            <PrismicNextImage
              style={{ minWidth: "482px" }}
              width={slice.primary.image.dimensions.width}
              height={slice.primary.image.dimensions.height}
              className={
                "lg:absolute lg:bottom-[-80px] xl:bottom-[-120px] 2xl:bottom-[-210px] lg:top-[+156px] md:right-[-100px]"
              }
              field={slice.primary.image}
            />
          </div>
        )}

        <div className="order-1 lg:order-2 w-full lg:w-3/5 xl:w-3/5 bg-neutral-800 text-white pc pt-36 pb-16 lg:pt-[92px] lg:pb-16 items-center flex">
          <div className="flex flex-col gap-4 lg:pl-24 xl:pl-30 ">
            <PrismicRichText
              field={slice.primary.tagline}
              components={{
                paragraph: ({ children }) => (
                  <p className={"text-base"}>{children}</p>
                ),
              }}
            />
            <div>
              <PrismicRichText field={slice.primary.header} />
              <p className={"text-base mt-4"}>
                {formatDate(slice.primary.date)}
              </p>
              <Link
                text={slice.primary.link_text}
                link={slice.primary.link}
                className={"text-base mt-10"}
                icon={ArrowRight}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroWithFeaturedBlogPostVersion;
