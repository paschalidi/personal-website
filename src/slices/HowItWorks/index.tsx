import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "../../components/PrismicRichText";

/**
 * Props for `HowItWorks`.
 */
export type HowItWorksProps = SliceComponentProps<Content.HowItWorksSlice>;

/**
 * Component for "HowItWorks" Slices.
 */
export const HowItWorks = ({ slice }: HowItWorksProps): JSX.Element => {
  const icons = [
    { icon: slice.primary.icon1, text: slice.primary.text1 },
    { icon: slice.primary.icon2, text: slice.primary.text2 },
    { icon: slice.primary.icon3, text: slice.primary.text3 },
    { icon: slice.primary.icon4, text: slice.primary.text4 },
  ];
  return (
    <section
      className="bg-neutral-100"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="pc flex flex-col justify-center items-center gap-16 py-10 lg:pt-20 lg:pb-32">
        <div className="text-center text-zinc-800">
          <PrismicRichText field={slice.primary.header} />
        </div>

        <div className="w-full flex flex-col lg:flex-row justify-start lg:justify-center gap-9 lg:gap-11 items-start">
          {icons.map(({ icon, text }, index) => {
            return (
              <>
                <div
                  key={JSON.stringify(text)}
                  className="flex lg:flex-col justify-center items-center gap-6"
                >
                  <div>
                    <PrismicNextImage
                      width={120}
                      height={120}
                      field={icon}
                      className="lg:mx-auto"
                    />
                  </div>
                  <div className="lg:text-center text-zinc-800 text-xl leading-7 lg:w-44 w-5/6">
                    <PrismicRichText
                      field={text}
                      components={{
                        paragraph: ({ children }) => (
                          <p className="text-lg md:text-xl">{children}</p>
                        ),
                      }}
                    />
                  </div>
                </div>
                {index < icons.length - 1 && (
                  <div className="hidden mt-[64px] lg:flex self-start w-20 h-0.5 bg-zinc-200" />
                )}

                {index < icons.length - 1 && (
                  <div className="lg:hidden ml-[32px] md:ml-[40px] w-8 h-0.5 -rotate-90 bg-zinc-200" />
                )}
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
