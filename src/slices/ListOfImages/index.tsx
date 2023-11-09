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
import { ErrorBoundary } from "react-error-boundary";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Fallback } from "../../components/Fallback";
import clsx from "clsx";

const rearrangeArray = (
  arr: Content.ListOfImagesSlice["items"],
  startIndex: number,
) => {
  return [...arr.slice(startIndex), ...arr.slice(0, startIndex)];
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
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [items, setItems] = useState<Content.ListOfImagesSlice["items"]>(
    slice.items,
  );

  useEffect(() => {
    setIsLoading(true);
    setItems(rearrangeArray(slice.items, indexOfOpenedImage));
    setIsLoading(false);
  }, [indexOfOpenedImage, slice.items]);

  return (
    <ErrorBoundary fallback={<Fallback />}>
      <section
        id={slice.primary.uid}
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
        className={clsx(
          !slice.primary.has_margin_bottom && "mb-32 md:mb-40 md:mt-28 mt-16",
        )}
      >
        <Dialog.Root>
          {slice.primary.header && (
            <PrismicRichText
              field={slice.primary.header}
              components={{
                heading1: ({ children }) => (
                  <h1 className={"text-zinc-300 text-3xl"}>{children}</h1>
                ),
              }}
            />
          )}
          {!!slice.primary.paragraph.length && (
            <PrismicRichText
              field={slice.primary.paragraph}
              components={{
                paragraph: ({ children }) => (
                  <p className={"text-zinc-300 mt-2 mb-10"}>{children}</p>
                ),
              }}
            />
          )}

          <a href={`#${slice.primary.uid}`}>
            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
            >
              <Masonry gutter={"16px"}>
                {slice.items.map(({ description, image }, index) => {
                  return (
                    <Dialog.Trigger asChild key={asText(description)}>
                      <div
                        role="button"
                        tabIndex={0}
                        aria-haspopup="dialog"
                        aria-expanded="false"
                        aria-controls="radix-:Rddcta:"
                        aria-label="Open dialog"
                      >
                        <PrismicNextImage
                          width={image.dimensions.width}
                          height={image.dimensions.height}
                          field={image}
                          onClick={() => {
                            setIndexOfOpenedImage(index);
                          }}
                          className={
                            "transition-opacity opacity-0 duration-100"
                          }
                          onLoadingComplete={(image) => {
                            image.classList.remove("opacity-0");
                          }}
                        />
                      </div>
                    </Dialog.Trigger>
                  );
                })}
              </Masonry>
            </ResponsiveMasonry>
          </a>
          <Dialog.Portal>
            <Dialog.Overlay className="data-[state=open]:animate-overlayShow fixed inset-0" />
            <Dialog.Content className="z-50 data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] h-screen w-screen translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-stone-950 p-[25px] shadow focus:outline-none">
              {slice.primary.header.length && (
                <Dialog.Title className="text-mauve12 m-0 text-[17px] font-medium text-zinc-300">
                  <PrismicRichText field={slice.primary.header} />
                </Dialog.Title>
              )}
              <Swiper
                loop={true}
                modules={[Navigation, A11y]}
                spaceBetween={10}
                slidesPerView={1}
                navigation
                className="swiper z-50 w-full sm:h-fit"
              >
                {!isLoading &&
                  items.map(({ description, image }) => {
                    return (
                      <SwiperSlide key={asText(description)}>
                        <PrismicNextImage
                          field={image}
                          className={
                            "max-h-[80vh] max-w-full object-contain m-auto "
                          }
                        />
                        <div className={"md:min-w-md m-auto mt-4"}>
                          <PrismicRichText
                            field={description}
                            components={{
                              paragraph: ({ children }) => (
                                <p
                                  className={
                                    "text-center text-zinc-400 text-sm leading-1"
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
                  <Cross2Icon width={32} height={32} className={"text-white"} />
                </button>
              </Dialog.Close>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </section>
    </ErrorBoundary>
  );
};

export default ListOfImages;
