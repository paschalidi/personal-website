import { Content, isFilled } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "../../components/PrismicRichText";

/**
 * Props for `InformationBanner`.
 */
export type InformationBannerProps =
  SliceComponentProps<Content.InformationBannerSlice>;

/**
 * Component for "InformationBanner" Slices.
 */
const InformationBanner = ({ slice }: InformationBannerProps): JSX.Element => {
  const isAtLeastOneImagesDefined =
    isFilled.image(slice.primary.banner_logo_1) ||
    isFilled.image(slice.primary.banner_logo_2);
  return (
    <section
      className="pc flex py-16 lg:py-24 bg-neutral-800 flex-col justify-start items-center gap-14 divider-x"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="flex flex-col md:flex-row justify-start items-start gap-16 md:gap-20">
        {isAtLeastOneImagesDefined && (
          <div className="flex justify-start items-center gap-10">
            {isFilled.image(slice.primary.banner_logo_1) && (
              <>
                <div className="w-24 h-24 justify-center items-center flex">
                  <PrismicNextImage field={slice.primary.banner_logo_1} />
                </div>
                <div className="w-px h-16 bg-neutral-700" />
              </>
            )}
            {isFilled.image(slice.primary.banner_logo_1) && (
              <div className="w-24 h-24 justify-center items-center flex">
                <PrismicNextImage field={slice.primary.banner_logo_2} />
              </div>
            )}
          </div>
        )}
        <div className="text-3xl text-white">
          <PrismicRichText field={slice.primary.banner_text} />
        </div>
      </div>
    </section>
  );
};

export default InformationBanner;
