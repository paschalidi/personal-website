"use client";
import { asText, Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicRichText } from "../../components/PrismicRichText";
import * as Tabs from "@radix-ui/react-tabs";
import clsx from "clsx";
import { deriveTabName } from "../../utlis/deriveTabName";
import { useEffect, useState } from "react";
import { PrismicNextImage } from "@prismicio/next";
import { useInView } from "react-intersection-observer";

const Trigger = ({ text, value, image, setActiveTab, isActiveTab }) => {
  const { ref, inView } = useInView({
    initialInView: false,
    rootMargin: "0px 500px ",
    threshold: 0.7,
  });

  useEffect(() => {
    if (inView) {
      setActiveTab(value);
    }
  }, [setActiveTab, value, inView]);

  return (
    <Tabs.Trigger
      className={clsx(
        "flex lg:flex-row flex-grow gap-6 items-center justify-left text-xl md:text-2xl opacity-30 data-[state=active]:opacity-100 outline-none cursor-pointer",
      )}
      value={value}
    >
      <div
        className={clsx(
          isActiveTab && "border-b-pseudo-active",
          "pb-3 text-left",
        )}
      >
        <div className={"min-w-[384px]"} ref={ref}>
          <PrismicNextImage
            field={image}
            width={image.dimensions.width}
            height={image.dimensions.height}
          />
        </div>
        <div>
          <div>
            <PrismicRichText field={text} />
          </div>
        </div>
      </div>
    </Tabs.Trigger>
  );
};
/**
 * Props for `ImageCarousel`.
 */
export type ImageCarouselProps =
  SliceComponentProps<Content.ImageCarouselSlice>;

/**
 * Component for "ImageCarousel" Slices.
 */
const ImageCarousel = ({ slice }: ImageCarouselProps): JSX.Element => {
  const defaultTab = deriveTabName(0);
  const [activeTab, setActiveTab] = useState<string>(defaultTab);

  return (
    <section
      className={"pc bg-neutral-50"}
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div
        className={
          "flex flex-col md:flex-row  justify-between gap-10 pt-28 pb-16"
        }
      >
        <div className={"w-full md:w-5/12"}>
          <PrismicRichText field={slice.primary.text} />
        </div>
        <div className={"w-full md:w-6/12 "}>
          <Tabs.Root
            value={activeTab}
            className=" border-b-pseudo"
            defaultValue={defaultTab}
            onValueChange={(activeTab) => {
              setActiveTab(activeTab);
            }}
          >
            <Tabs.List
              aria-label={asText(slice.items[0].text)}
              className="flex gap-6 flex-row no-scrollbar overflow-x-auto whitespace-nowrap"
            >
              <>
                {slice.items.map(({ text, image }, index) => {
                  const value = deriveTabName(index);
                  return (
                    <Trigger
                      isActiveTab={activeTab === value}
                      setActiveTab={setActiveTab}
                      key={value}
                      value={value}
                      text={text}
                      image={image}
                    />
                  );
                })}
              </>
            </Tabs.List>
          </Tabs.Root>
        </div>
      </div>
    </section>
  );
};

export default ImageCarousel;
