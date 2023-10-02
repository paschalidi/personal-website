"use client"; // because of dialog
import { asText, Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { PrismicNextImage } from "@prismicio/next";
import { A11y, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import { PrismicRichText } from "../../components/PrismicRichText";
import { useEffect, useState } from "react";

const rearrangeArray = (
  arr: Content.ListOfImagesSlice["items"],
  index: number,
) => {
  const before = arr.slice(0, index);
  const after = arr.slice(index);
  return after.concat(before);
};

/**
 * Props for `ListOfImages`.
 */
export type ListOfImagesProps = SliceComponentProps<Content.ListOfImagesSlice>;

/**
 * Component for "ListOfImages" Slices.
 */
const ListOfImages = ({ slice }: ListOfImagesProps): JSX.Element => {
  const [indexOfOpenedImage, setIndexOfOpenedImage] = useState<number>(0);
  const [items, setItems] = useState<Content.ListOfImagesSlice["items"]>(
    slice.items,
  );

  useEffect(() => {
    setItems(rearrangeArray(slice.items, indexOfOpenedImage));
  }, [indexOfOpenedImage, slice.items]);

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={"my-16 md:mt-24 mb-32"}
    >
      <Dialog.Root>
        <h1 className={"mb-12 text-zinc-700 text-2xl"}>
          {slice.primary.header}
        </h1>
        <div
          className={
            "flex flex-col md:flex-row md:flex-wrap gap-12 justify-start"
          }
        >
          {slice.items.map(({ description, image }, index) => {
            return (
              <Dialog.Trigger
                asChild
                key={asText(description)}
                onClick={() => {
                  setIndexOfOpenedImage(index);
                }}
              >
                <div
                  className={
                    "h-96 w-full md:h-48 md:w-56 bg-cover bg-center bg-no-repeat"
                  }
                  style={{ backgroundImage: `url(${image.url})` }}
                />
              </Dialog.Trigger>
            );
          })}
        </div>
        <Dialog.Portal>
          <Dialog.Overlay className="data-[state=open]:animate-overlayShow fixed inset-0" />
          <Dialog.Content className="z-50 data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] h-screen w-screen translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow focus:outline-none">
            <Dialog.Title className="text-mauve12 m-0 text-[17px] font-medium">
              {slice.primary.header}
            </Dialog.Title>
            <Swiper
              loop={true}
              modules={[Navigation, A11y]}
              spaceBetween={10}
              slidesPerView={1}
              navigation
              className="swiper z-50 w-full sm:h-fit"
            >
              {items.map(({ description, image }) => {
                return (
                  <SwiperSlide key={asText(description)}>
                    <PrismicNextImage
                      field={image}
                      className={
                        "max-h-[80vh] max-w-full object-contain m-auto"
                      }
                    />
                    <div className={"md:min-w-md m-auto mt-4"}>
                      <PrismicRichText
                        field={description}
                        components={{
                          paragraph: ({ children }) => (
                            <p
                              className={
                                "text-center text-zinc-600 text-sm leading-1"
                              }
                            >
                              {children}
                            </p>
                          ),
                        }}
                      />
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>

            <Dialog.Close asChild>
              <button
                className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute top-[20px] right-[20px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
                aria-label="Close"
              >
                <Cross2Icon />
              </button>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </section>
  );
};

export default ListOfImages;
