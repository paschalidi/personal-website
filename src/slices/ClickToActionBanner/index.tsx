import { PrismicRichText } from "../../components/PrismicRichText";
import { ButtonPrismicLink } from "../../components/Button";
import { SliceComponentProps } from "@prismicio/react";
import { Content } from "@prismicio/client";
import { Leaf } from "../../components/Icons";

/**
 * Props for `ClickToActionBanner`.
 */
export type ClickToActionBannerProps =
  SliceComponentProps<Content.ClickToActionBannerSlice>;

/**
 * Component for "ClickToActionBanner" Slices.
 */
export const ClickToActionBanner = ({
  slice,
}: ClickToActionBannerProps): JSX.Element => {
  return (
    <section
      className="bg-cover bg-top h-full bg-no-repeat bg-neutrality"
      style={{ backgroundImage: `url(${slice.primary.background_image.url})` }}
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="w-full min-h-[35vh] py-12 flex-col justify-center items-center gap-2 inline-flex">
        <div className="pc text-white flex flex-col items-center justify-start gap-8 text-center md:w-2/3 lg:w-1/2">
          <div>
            <PrismicRichText field={slice.primary.header} />
          </div>
          <div>
            <PrismicRichText field={slice.primary.paragraph} />
          </div>
          <div>
            <ButtonPrismicLink
              link={slice.primary.link}
              primary={false}
              text={slice.primary.link_text}
              iconPosition={"right"}
              icon={Leaf}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClickToActionBanner;
