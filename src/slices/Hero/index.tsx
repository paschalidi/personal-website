"use client"; // using the CountUp animation component
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "../../components/PrismicRichText";
import { ButtonPrismicLink } from "../../components/Button";
import CountUp from "react-countup";
import { SliceComponentProps } from "@prismicio/react";
import { Content } from "@prismicio/client";
import { Leaf } from "../../components/Icons";
import Lottie from "lottie-react";
import { useEffect, useState } from "react";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

export const Hero = ({ slice }: HeroProps): JSX.Element => {
  console.log(JSON.stringify(slice, null, 2));
  const [lottieJson, setLottieJson] = useState<any>(null);
  const url = slice.primary.animation_lottie.hasOwnProperty("url")
    ? // @ts-ignore
      slice.primary.animation_lottie.url
    : null;

  useEffect(() => {
    fetch(url).then(async (lottie) => {
      const jsonLottie = await lottie.json();
      setLottieJson(jsonLottie);
    });
  }, [url]);
  return (
    <section className="bg-gradient-to-br bg-neutral-100 mt-[-92px] pt-[92px]">
      <div className="flex flex-col lg:flex-row justify-between lg:gap-10 xl:gap-0 md:min-h-[85vh] relative">
        <div className="pc-l px-4 mr-auto place-self-center w-full lg:w-1/2 mt-36 lg:mt-0">
          <PrismicRichText field={slice.primary.primary_text} />
          <PrismicRichText field={slice.primary.secondary_text} />
          <PrismicNextLink field={slice.primary.buttonLink}></PrismicNextLink>
          <div className="flex items-center mb-10">
            <div className="flex justify-between">
              <ButtonPrismicLink
                className="pr-6"
                link={slice.primary.buttonLink}
                text={slice.primary.buttonText}
                iconPosition={"right"}
                icon={Leaf}
              />
              <div className="pl-6 border-l-gray-200 border-l">
                <PrismicNextImage
                  className="mx-auto"
                  width={48}
                  height={48}
                  field={slice.primary.certification_icon}
                />

                <div className={"pt-2 text-sm"}>
                  {slice.primary.certification_icon_text}
                </div>
              </div>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className={"text-7xl lg:mb-7"}>
              <CountUp
                duration={2}
                end={slice.primary.total_number_of_offset}
              />
            </div>
            <PrismicRichText
              field={slice.primary.offset_text}
              components={{
                paragraph: ({ children }) => (
                  <p className="text-base mb-4 last:mb-0">{children}</p>
                ),
              }}
            />
          </div>
        </div>
        <div
          className="lg:mt-0 w-full lg:w-1/2 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${slice.primary.backgroundImage.url})`,
          }}
        >
          <Lottie
            animationData={lottieJson}
            loop={false}
            style={{ height: "100%" }}
          />
        </div>
        <div className="pt-10 pb-16 lg:hidden md:pl-12 px-4">
          <div className={"text-7xl lg:mb-7"}>
            <CountUp duration={2} end={slice.primary.total_number_of_offset} />
          </div>
          <PrismicRichText
            components={{
              paragraph: ({ children }) => (
                <p className="text-sm mb-4 last:mb-0">{children}</p>
              ),
            }}
            field={slice.primary.offset_text}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
