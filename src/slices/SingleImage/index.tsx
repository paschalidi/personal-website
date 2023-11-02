import * as prismic from "@prismicio/client";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { BlogBounded } from "../../components/BlogBounded";
import { ErrorBoundary } from "react-error-boundary";
import { Fallback } from "../../components/Fallback";

/**
 * Props for `SingleImage`.
 */
export type SingleImageProps = SliceComponentProps<Content.SingleImageSlice>;

/**
 * Component for "SingleImage" Slices.
 */
const SingleImage = ({ slice }: SingleImageProps): JSX.Element => {
  const image = slice.primary.image;

  return (
    <ErrorBoundary fallback={<Fallback />}>
      <section
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
        className={"sm:pt-16 pb-6"}
      >
        <BlogBounded as="div">
          {prismic.isFilled.image(image) && (
            <PrismicNextImage
              field={image}
              sizes="100vw"
              className="w-8/12 sm:w-full mx-auto"
            />
          )}
        </BlogBounded>
      </section>
    </ErrorBoundary>
  );
};

export default SingleImage;
