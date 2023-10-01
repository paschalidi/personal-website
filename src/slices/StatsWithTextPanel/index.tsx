import { asText, Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicRichText } from "../../components/PrismicRichText";
import { PrismicNextImage } from "@prismicio/next";

/**
 * Props for `StatsWithTextPanel`.
 */
export type StatsWithTextPanelProps =
  SliceComponentProps<Content.StatsWithTextPanelSlice>;

/**
 * Component for "StatsWithTextPanel" Slices.
 */
const StatsWithTextPanel = ({
  slice,
}: StatsWithTextPanelProps): JSX.Element => {
  return (
    <section
      className={"bg-gray-100"}
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div
        className={
          "flex md:flex-row flex-col md:divide-x-[1px] md:divide-y-[0px] divide-y-[1px] divide-neutral-300"
        }
      >
        <div
          className={
            "pc  w-full md:w-5/12 pb-8  pt-16 md:pb-0 md:pt-32 lg:py-36 md:pr-16 lg:pr-24 xl:pr-28 md:mt-[-48px] lg:mt-[-32px]"
          }
        >
          <PrismicRichText field={slice.primary.text} />
        </div>
        <div
          className={
            "pc  w-full md:w-7/12 flex flex-col divide-y-[1px] pt-8 pb-16 md:pt-32 md:pb-24 lg:py-40 md:pl-16 lg:pl-24 xl:pl-32"
          }
        >
          {slice.items.map(({ icon, smaller_text, large_text }, index) => (
            <div
              key={asText(smaller_text)}
              className={
                "flex md:flex-row flex-wrap lg:flex-nowrap items-center justify-between gap-x-4 lg:gap-x-12 py-4 first:pt-0 last:pb-0 "
              }
            >
              <div className={"w-[28px] md:min-w-[48px]"}>
                <PrismicNextImage field={icon} />
              </div>
              <div className={"flex-grow w-8/12 lg:min-w-[175px] self-center"}>
                <PrismicRichText field={large_text} />
              </div>
              <div className={"w-full mt-4 lg:mt-0"}>
                <PrismicRichText
                  field={smaller_text}
                  components={{
                    paragraph: ({ children }) => (
                      <p className={"text-xl"}>{children}</p>
                    ),
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsWithTextPanel;
