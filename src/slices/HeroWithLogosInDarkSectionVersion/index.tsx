import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicRichText } from "../../components/PrismicRichText";
import { Link } from "../../components/Link";
import { PrismicNextImage } from "@prismicio/next";
import { OpenNewTab } from "../../components/Icons";
import clsx from "clsx";
import { TextWithSmallUnit } from "../../components/TextWithSmallUnit";

/**
 * Props for `HeroWithLogosInDarkSectionVersion`.
 */
export type HeroWithLogosInDarkSectionVersionProps =
  SliceComponentProps<Content.ProjectDetailsHeroSlice>;

/**
 * Component for "HeroWithLogosInDarkSectionVersion" Slices.
 */
export const HeroWithLogosInDarkSectionVersion = ({
  slice,
}: HeroWithLogosInDarkSectionVersionProps): JSX.Element => {
  const variation = slice.variation;
  return (
    <section
      className={"pc bg-gray-100 mt-[-92px] pt-[92px]"}
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between md:min-h-[55vh]">
        <div
          className={clsx(
            variation === "default" ? "lg:w-6/12" : "lg:w-7/12 xl:w-8/12",
            "flex w-full flex-col py-16 md:px-0",
          )}
        >
          <div className={"w-11/12"}>
            <PrismicRichText field={slice.primary.header} />
          </div>
          {variation === "default" &&
            slice.primary.link &&
            slice.primary.link_text && (
              <div className={"w-fit"}>
                <Link
                  icon={OpenNewTab}
                  iconClassName={"text-green-600"}
                  text={slice.primary.link_text}
                  link={slice.primary.link}
                />
              </div>
            )}
          {variation === "withStatistics" && (
            <div className={"w-full flex flex-wrap pt-10 gap-x-16 gap-y-8"}>
              <div>
                <TextWithSmallUnit text={slice.primary.stat_1} />
                <div className={"text-base pt-2"}>
                  {slice.primary.stat_text_1}
                </div>
              </div>

              <div>
                <TextWithSmallUnit text={slice.primary.stat_2} />
                <div className={"text-base pt-2"}>
                  {slice.primary.stat_text_2}
                </div>
              </div>

              <div>
                <TextWithSmallUnit text={slice.primary.stat_3} />
                <div className={"text-base pt-2"}>
                  {slice.primary.stat_text_3}
                </div>
              </div>
            </div>
          )}
        </div>

        <div className={"lg:w-4/12 xl:w-3/12 justify-center mb-16 md:mb-0"}>
          <div className="bg-neutral-800 p-6 max-w-[332px] md:ml-auto">
            <div className="flex flex-row pb-6 justify-center divide-x divide-neutral-700">
              <PrismicNextImage
                className={"px-4 first:pl-0 last:pr-0"}
                field={slice.primary.logo_1}
              />
              <PrismicNextImage
                className={"px-4 first:pl-0 last:pr-0"}
                field={slice.primary.logo_2}
              />
            </div>
            <PrismicRichText
              components={{
                paragraph: ({ children }) => (
                  <p className="text-center text-base opacity-60 text-white">
                    {children}
                  </p>
                ),
              }}
              field={slice.primary.logo_text}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroWithLogosInDarkSectionVersion;
