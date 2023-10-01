import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicRichText } from "../../components/PrismicRichText";
import { PrismicNextImage } from "@prismicio/next";

/**
 * Props for `CommunityLogos`.
 */
export type CommunityLogosProps =
  SliceComponentProps<Content.CommunityLogosSlice>;

/**
 * Component for "CommunityLogos" Slices.
 */
export const CommunityLogos = ({ slice }: CommunityLogosProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="pc w-full relative py-12 md:pt-16 md:pb-28 bg-neutral-100 inline-flex flex-col justify-center items-center gap-8 md:gap-16">
        <div className="text-center">
          <PrismicRichText field={slice.primary.header} />
        </div>

        <div className="flex flex-wrap gap-x-8 md:gap-x-32 gap-y-14 max-w-xs  md:max-w-4xl">
          {slice.items.map((item, index) => {
            return (
              <div
                key={index}
                className="mx-auto w-24 h-14 relative flex justify-center items-center"
              >
                <PrismicNextImage field={item.icon} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CommunityLogos;
