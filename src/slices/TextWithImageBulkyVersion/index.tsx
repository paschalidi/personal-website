import { asText, Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicRichText } from "../../components/PrismicRichText";
import React from "react";

/**
 * Props for `TextWithImageBulkyVersion`.
 */
export type TextWithImageBulkyVersion =
  SliceComponentProps<Content.TextWithImageRedVersionSlice>;

/**
 * Component for "TextWithImageBulkyVersion" Slices.
 */
export const TextWithImageBulkyVersion = ({
  slice,
}: TextWithImageBulkyVersion): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className={"flex flex-col lg:flex-row"}>
        <div
          className={"pc flex w-full lg:w-5/12 text-white relative bg-cover"}
          style={{
            backgroundImage: `url(${slice.primary.background_image.url})`,
          }}
        >
          <div className="absolute inset-0 z-10 bg-black bg-opacity-70" />

          <div className={"lg:pt-48 py-16 z-20 flex flex-col lg:mt-[-48px]"}>
            <PrismicRichText
              field={slice.primary.text}
              components={{
                em: ({ children }) => (
                  <span className={"text-red-400"}>{children}</span>
                ),
              }}
            />
          </div>
        </div>

        <div
          className={
            "pc lg:px-10 py-16 lg:pt-48 lg:pb-36 flex flex-col w-full lg:w-7/12 bg-neutral-50"
          }
        >
          <>
            <div className="mb-6">
              <PrismicRichText field={slice.primary.top_text} />
            </div>

            <div className={"flex flex-row flex-wrap align-middle gap-4"}>
              {slice.items.map(({ factor }, index) => (
                <div key={asText(factor)} className={"inline-flex gap-4"}>
                  {index !== 0 && (
                    <div className="text-neutral-900 text-5xl font-normal leading-10 self-center">
                      X
                    </div>
                  )}
                  <div className="px-4 py-3 bg-zinc-900 rounded-full justify-center items-center gap-2 inline-flex">
                    <div className="text-neutral-100 text-4xl font-normal leading-10 self-center">
                      <PrismicRichText
                        field={factor}
                        components={{
                          heading3: ({ children }) => (
                            <h3 className={"mb-0"}>{children}</h3>
                          ),
                        }}
                      />
                    </div>
                  </div>
                </div>
              ))}
              <div className={"inline-flex gap-4"}>
                <div className="text-neutral-900 text-5xl font-normal leading-10 self-center">
                  =
                </div>
                <div className="px-4 py-3 bg-zinc-900 rounded-full justify-center items-center gap-2 inline-flex">
                  <div className="text-red-400 text-4xl font-normal leading-10">
                    <PrismicRichText
                      field={slice.primary.multiplication_result}
                      components={{
                        heading3: ({ children }) => (
                          <h3 className={"mb-0"}>{children}</h3>
                        ),
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6  gap-2 flex flex-row">
              <PrismicRichText field={slice.primary.low_text} />
            </div>
          </>
        </div>
      </div>
    </section>
  );
};

export default TextWithImageBulkyVersion;
