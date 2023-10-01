"use client";
import * as prismic from "@prismicio/client";
import { Content, isFilled } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "../../components/PrismicRichText";
import { ButtonPrismicLink } from "../../components/Button";
import clsx from "clsx";
import { Leaf } from "../../components/Icons";

/**
 * Props for `WebsiteCalculatorBanner`.
 */
export type TextWithImageProps = Content.TextWithImageSliceVariation;

export const TextWithImage = ({
  slice,
}: {
  slice: TextWithImageProps;
}): JSX.Element => {
  const { variation } = slice;
  const image = slice.primary.image;

  const isDarkVariation =
    variation === "defaultDark" || variation === "withButtonDark";
  const isWithButtonVariation =
    variation == "withButton" || variation === "withButtonDark";
  return (
    <section className={clsx(isDarkVariation ? "bg-zinc-900" : "bg-white")}>
      <div className="grid grid-cols-1 xl:grid-cols-2 items-stretch">
        <div className="flex flex-col gap-8 pc pt-12 pb-10 lg:py-28 lg:pr-36">
          {isWithButtonVariation && slice.primary.icon && (
            <div>
              <PrismicNextImage
                width={48}
                height={48}
                field={slice.primary.icon}
              />
            </div>
          )}
          <div
            className={clsx(
              isDarkVariation && "text-white",
              "flex flex-col gap-8",
            )}
          >
            <PrismicRichText field={slice.primary.text} />
          </div>
          {isWithButtonVariation && (
            <div>
              <ButtonPrismicLink
                link={slice.primary.button_link}
                text={slice.primary.button_text}
                iconPosition={"right"}
                icon={Leaf}
              />
            </div>
          )}
        </div>
        {prismic.isFilled.image(image) && (
          <div
            className={clsx(
              !(slice.items.length && slice.items[0].icon) &&
                "min-h-[45vh] md:min-h-[60vh] lg:min-h-[80vh] xl:min-h-[60vh]",
              "bg-center bg-cover bg-no-repeat relative",
            )}
            style={{ backgroundImage: `url(${image.url})` }}
          >
            {isWithButtonVariation && slice.items.length && (
              <div className="flex flex-col justify-center items-center gap-12 py-10 lg:py-28">
                {slice.items.map(({ icon }) => (
                  <div key={JSON.stringify(icon)}>
                    {isFilled.image(icon) && (
                      <PrismicNextImage
                        width={icon.dimensions.width}
                        height={icon.dimensions.height}
                        field={icon}
                      />
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default TextWithImage;
