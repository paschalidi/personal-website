"use client"; // because of radix
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "../../components/PrismicRichText";
import { TextWithSmallUnit } from "../../components/TextWithSmallUnit";
import * as P from "@radix-ui/react-progress";

const Progress = ({ progress }: { progress: number }) => {
  return (
    <P.Root
      className="mt-4 relative overflow-hidden bg-white rounded-full min-w-[300px] max-w-[400px] h-2"
      style={{
        transform: "translateZ(0)",
      }}
      value={progress}
    >
      <P.Indicator
        className="bg-teal-600 w-full h-full transition-transform duration-[660ms] ease-[cubic-bezier(0.65, 0, 0.35, 1)]"
        style={{ transform: `translateX(-${100 - progress}%)` }}
      />
    </P.Root>
  );
};
/**
 * Props for `HeroMemberDetailVersion`.
 */
export type HeroMemberDetailVersionProps =
  SliceComponentProps<Content.HeroMemberDetailVersionSlice>;

/**
 * Component for "HeroMemberDetailVersion" Slices.
 */
const HeroMemberDetailVersion = ({
  slice,
}: HeroMemberDetailVersionProps): JSX.Element => {
  const memberData = [
    { title: slice.primary.column_1_header, text: slice.primary.column_1_text },
    { title: slice.primary.column_2_header, text: slice.primary.column_2_text },
    { title: slice.primary.column_3_header, text: slice.primary.column_3_text },
    { title: slice.primary.column_4_header, text: slice.primary.column_4_text },
  ];
  return (
    <section
      className={"mt-[-92px] pt-[92px] bg-gray-100"}
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div
        className={
          "pc flex flex-col lg:flex-row pt-10 lg:pt-20 pb-10 lg:pb-32 gap-10 "
        }
      >
        <div className={"w-full md:w-10/12 lg:w-7/12 gap-10"}>
          <PrismicRichText field={slice.primary.name_of_member} />
          <div className={"mt-10"}>
            <div className={"text-2xl font-normal "}>
              <span>{slice.primary.percentage_offset}</span>
              {slice.primary.percentage_offset_text}
            </div>
            <Progress progress={slice.primary.percentage_offset} />
          </div>
          <div className={"mt-10"}>
            <div className={"text-neutral-900 text-2xl font-normal"}>
              {slice.primary.member_impact}
            </div>
            <div className={"flex flex-row flex-wrap gap-y-4 gap-x-16 pt-4"}>
              {slice.items.map(({ impact_text_with_units, small_text }) => {
                return (
                  <div key={impact_text_with_units}>
                    <TextWithSmallUnit text={impact_text_with_units} />
                    <div className={"text-base font-normal"}>{small_text}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className={"hidden lg:block lg:w-6/12 justify-center"}>
          <div
            className={
              "max-w-[588px] lg:max-w-[448px] min-w-[448px] lg:ml-auto"
            }
          >
            <div className="bg-neutral-800 p-12 flex flex-col gap-6">
              <div className="flex flex-row justify-between items-center gap-6">
                <div className={"text-white text-2xl font-normal"}>
                  {slice.primary.status}
                </div>
                <div>
                  <PrismicNextImage
                    className={"px-4 first:pl-0 last:pr-0"}
                    field={slice.primary.logo}
                  />
                </div>
              </div>
              <div className="flex flex-row flex-wrap justify-between gap-6">
                {memberData.map(({ text, title }) => {
                  return (
                    <div key={text} className={"text-white"}>
                      <div className={"font-medium"}>{title}</div>
                      <div className={"opacity-60"}>{text}</div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div>
              <PrismicRichText
                field={slice.primary.info_text}
                components={{
                  paragraph: ({ children }) => (
                    <p className="mt-4 text-neutral-900 font-normal text-base opacity-60">
                      {children}
                    </p>
                  ),
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className={"lg:hidden pb-16"}>
          <div className={"bg-neutral-800"}>
            <div className="pc py-8 flex flex-col gap-6 max-w-[600px]">
              <div className="flex flex-row justify-between items-center">
                <div className={"text-white text-2xl font-normal"}>
                  {slice.primary.status}
                </div>
                <div>
                  <PrismicNextImage
                    className={"px-4 first:pl-0 last:pr-0"}
                    field={slice.primary.logo}
                  />
                </div>
              </div>
              <div className="flex flex-row flex-wrap sm:justify-between gap-6">
                {memberData.map(({ text, title }) => {
                  return (
                    <div key={text} className={"text-white"}>
                      <div className={"font-medium"}>{title}</div>
                      <div className={"opacity-60"}>{text}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className={"pc"}>
            <PrismicRichText
              field={slice.primary.info_text}
              components={{
                paragraph: ({ children }) => (
                  <p className="mt-4 text-neutral-900 font-normal text-base opacity-60">
                    {children}
                  </p>
                ),
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroMemberDetailVersion;
