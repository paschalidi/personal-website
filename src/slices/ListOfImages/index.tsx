import { asText, Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { Fragment } from "react";

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
      className={"my-16 md:mt-24 mb-32"}
    >
      <h1 className={"mb-12 text-zinc-700 text-2xl"}>{slice.primary.header}</h1>
      <div className={"flex flex-row flex-wrap gap-12 justify-start"}>
        {slice.items.map(({ description, image }) => {
          return (
            <Fragment key={asText(description)}>
              <div
                className={
                  "h-80 w-80 md:h-48 md:w-56 bg-cover bg-center bg-no-repeat"
                }
                style={{ backgroundImage: `url(${image.url})` }}
              />
            </Fragment>
          );
        })}
      </div>
    </section>
  );
};

export default ListOfImages;
