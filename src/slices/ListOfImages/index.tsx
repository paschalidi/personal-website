import { asText, Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `ListOfImages`.
 */
export type ListOfImagesProps = SliceComponentProps<Content.ListOfImagesSlice>;

/**
 * Component for "ListOfImages" Slices.
 */
const ListOfImages = ({ slice }: ListOfImagesProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={
        "flex flex-row flex-wrap gap-12 justify-center py-16 md:pt-24 pb-16"
      }
    >
      {slice.items.map(({ description, image }) => {
        return (
          <div
            key={asText(description)}
            className={
              "h-80 w-80 md:h-48 md:w-56 bg-cover bg-center bg-no-repeat"
            }
            style={{ backgroundImage: `url(${image.url})` }}
          />
        );
      })}
    </section>
  );
};

export default ListOfImages;
