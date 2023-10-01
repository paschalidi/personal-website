"use client"; // because of jsx styles for bg
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicRichText } from "../../components/PrismicRichText";

/**
 * Props for `Benefits`.
 */
export type BenefitsProps = SliceComponentProps<Content.BenefitsSlice>;

/**
 * Component for "Benefits" Slices.
 */
export const Benefits = ({ slice }: BenefitsProps): JSX.Element => {
  return (
    <>
      {/* eslint-disable-next-line react/no-unknown-property */}
      <style jsx>{`
        .custom-bg-image {
          background-size: auto;
          background-repeat: no-repeat;
          background-position: left bottom;
          background-image: url(${slice.primary.image.url});
        }

        @media (max-width: 1024px) {
          .custom-bg-image {
            background-size: contain;
            background-repeat: no-repeat;
            background-position: left top;
            background-image: url(${slice.primary.mobile_image.url});
          }
        }
      `}</style>
      <section
        className="bg-zinc-200 h-full custom-bg-image"
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
      >
        <div className="flex flex-col lg:flex-row py-16 lg:pt-28 lg:pb-24">
          <div className="lg:w-3/5">
            <div className="pc-l w-full lg:w-4/5">
              <PrismicRichText field={slice.primary.header} />
            </div>
            <div />
          </div>
          <div className="pc lg:pc-r lg:w-3/5 flex flex-col mt-16 lg:mt-0 divide-y divide-neutral-300">
            {slice.items.map(({ benefits_header, benefits_text }) => (
              <div
                key={JSON.stringify(benefits_text)}
                className="py-14 first:pt-0 last:pb-0 2xl:w-5/6"
              >
                <div className="mb-6">
                  <PrismicRichText field={benefits_header} />
                </div>
                <div className="text-xl">
                  <PrismicRichText field={benefits_text} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Benefits;
