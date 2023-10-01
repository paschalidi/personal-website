import { Content, isFilled } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "../../components/PrismicRichText";
import { Link } from "../../components/Link";
import clsx from "clsx";
import { ArrowRight } from "../../components/Icons";

/**
 * Props for `TextWithPaddedImage`.
 */
export type TextWithPaddedImageProps =
  SliceComponentProps<Content.TextWithPaddedImageSlice>;

/**
 * Component for "TextWithPaddedImage" Slices.
 */
export const TextWithPaddedImage = ({
  slice,
}: TextWithPaddedImageProps): JSX.Element => {
  const bgImageExists = isFilled.image(slice.primary?.background_image);

  const isImageOnLeft = slice.variation === "default";
  return (
    <section
      className={clsx(
        isImageOnLeft ? "pt-4" : "pt-12",
        bgImageExists ? "bg-neutral-100" : "bg-white",
        "pc md:pt-20 pb-20 bg-cover bg-left-top lg:bg-left bg-no-repeat",
      )}
      style={
        bgImageExists
          ? {
              backgroundImage: `url(${
                slice.primary.background_image.url || null
              })`,
            }
          : {}
      }
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div
        className={clsx(
          "flex flex-col md:flex-row md:justify-center items-start md:items-center gap-10 md:gap-32 lg:gap-72",
        )}
      >
        <div
          className={clsx(
            isImageOnLeft ? "order-1" : "order-2 flex md:justify-end",
            "md:w-1/2",
          )}
        >
          <PrismicNextImage field={slice.primary.image} />
        </div>

        <div
          className={clsx(
            isImageOnLeft ? "order-2" : "order-1",
            "flex flex-col md:w-1/2",
          )}
        >
          <div className="flex flex-col gap-4">
            <PrismicRichText
              field={slice.primary.tagline}
              components={{
                paragraph: ({ children }) => (
                  <p className="text-base">{children}</p>
                ),
              }}
            />
            <PrismicRichText field={slice.primary.paragraph} />
          </div>
          {slice.primary.link_text && (
            <div className="pt-10">
              <Link
                text={slice.primary.link_text}
                link={slice.primary.link}
                icon={ArrowRight}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TextWithPaddedImage;
