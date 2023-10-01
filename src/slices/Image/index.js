import * as prismic from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import clsx from "clsx";

import { BlogBounded } from "../../components/BlogBounded";

const Image = ({ slice, index }) => {
  const image = slice.primary.image;

  return (
    <BlogBounded
      as="section"
      className={clsx("bg-white", index === 0 && "pt-0 md:pt-0")}
    >
      {prismic.isFilled.image(image) && (
        <div className="bg-gray-100">
          <PrismicNextImage field={image} sizes="100vw" className="w-full" />
        </div>
      )}
    </BlogBounded>
  );
};

export default Image;
