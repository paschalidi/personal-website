import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicRichText } from "../../components/PrismicRichText";

/**
 * Props for `HeroSimpleVersion`.
 */
export type HeroSimpleVersionProps =
  SliceComponentProps<Content.HeroSimpleVersionSlice>;

/**
 * Component for "HeroSimpleVersion" Slices.
 */
export const HeroSimpleVersion = ({
  slice,
}: HeroSimpleVersionProps): JSX.Element => {
  return (
    <section
      className="pc mt-[-92px] pt-44 pb-28 text-white relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${slice.primary.background_image.url})` }}
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="absolute inset-0 z-10 bg-black bg-opacity-70" />
      <div className="relative z-20 w-full md:w-1/3">
        <PrismicRichText field={slice.primary.header} />
        <PrismicRichText field={slice.primary.text} />
      </div>
    </section>
  );
};

export default HeroSimpleVersion;
