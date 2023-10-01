"use client"; // TODO REMOVE
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicRichText } from "../../components/PrismicRichText";
import React, { useEffect } from "react";
import { createClient } from "../../prismicio";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { IconButton } from "../../components/IconButton";
import { socialMediaSvgList } from "../../utlis/socialMediaSvgList";
import { Link } from "../../components/Link";
import * as P from "@radix-ui/react-progress";
import { TextWithSmallUnit } from "../../components/TextWithSmallUnit";
import { ArrowRight } from "../../components/Icons";
import { ToggleVisibility } from "../../components/ToggleVisibility";
import clsx from "clsx";

const BlackBlock = ({ primary, isSmallScreen = false }) => {
  const memberData = [
    { title: primary.column_1_header, text: primary.column_1_text },
    { title: primary.column_2_header, text: primary.column_2_text },
    { title: primary.column_3_header, text: primary.column_3_text },
    { title: primary.column_4_header, text: primary.column_4_text },
  ];

  return (
    <div
      className={clsx(
        isSmallScreen && "pc",
        "bg-neutral-800 lg:w-fit lg:max-w-[498px] lg:ml-auto",
      )}
    >
      <div className="max-w-md py-4 lg:p-12 lg:pb-10 flex flex-col gap-6">
        <div className={"text-white"}>
          <div
            className={
              "flex flex-row justify-between text-xl md:text-2xl font-medium"
            }
          >
            <div>{primary.plan_text}</div>
            <div>{primary.plan_ammount}</div>
          </div>
          <div className={"text-base font-medium pt-[2px]"}>
            {primary.monthly_visitors}
          </div>
          <div className={"opacity-60 text-base"}>{primary.plan_info_text}</div>
        </div>

        <div className={"flex flex-row gap-4 text-white text-sm md:text-base"}>
          <div className={"opacity-60"}>{primary.emission_offset_text}</div>
          <div className={"font-medium"}>{primary.offset_percentage}%</div>
        </div>

        <div className="h-px bg-neutral-700" />

        <div className={"flex flex-row justify-between text-white"}>
          <div className={"text md:text-base"}>
            <div className={"font-medium"}>{primary.next_bill_text}</div>
            <div className={"opacity-60"}>{primary.renews_text}</div>
          </div>
          <div className={"text-white text-2xl md:text-3xl font-normal"}>
            {primary.plan_ammount}
          </div>
        </div>

        <div className="h-px bg-neutral-700" />

        <div className="flex flex-row flex-wrap justify-between gap-6 text-sm md:text-lg">
          {memberData.map(({ text, title }) => {
            return (
              <div key={text} className={"text-white"}>
                <div className={"font-medium"}>{title}</div>
                <div className={"opacity-60"}>{text}</div>
              </div>
            );
          })}
        </div>

        <div>
          <Link
            className={"font-normal"}
            primary={false}
            link={primary.change_plan_link}
            text={primary.change_plan_link_text}
            icon={ArrowRight}
          />
        </div>
      </div>
    </div>
  );
};
const Progress = ({ progress }: { progress: number }) => {
  return (
    <P.Root
      className="relative overflow-hidden bg-white rounded-full min-w-[300px] max-w-[400px] h-2"
      style={{
        transform: "translateZ(0)",
      }}
      value={progress}
    >
      <P.Indicator
        className="bg-neutral-900 w-full h-full transition-transform duration-[660ms] ease-[cubic-bezier(0.65, 0, 0.35, 1)]"
        style={{ transform: `translateX(-${100 - progress}%)` }}
      />
    </P.Root>
  );
};

/**
 * Props for `HeroManagePlanVersion`.
 */
export type HeroManagePlanVersionProps =
  SliceComponentProps<Content.HeroManagePlanVersionSlice>;

/**
 * Component for "HeroManagePlanVersion" Slices.
 */
const HeroManagePlanVersion = ({
  slice,
}: HeroManagePlanVersionProps): JSX.Element => {
  const { primary, items } = slice;
  const [socialMediaLinks, setSocialMediaLinks] = React.useState(null);

  useEffect(() => {
    const client = createClient();
    client
      .getSingle("social_media_links")
      .then(({ data: { social_media_list: list } }) => {
        setSocialMediaLinks(list);
      });
  }, [setSocialMediaLinks]);

  return (
    <section
      className={"bg-gray-100 mt-[-92px] pt-[92px]"}
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div
        className={
          "pc flex flex-col lg:flex-row pt-16 pb-12 lg:pt-20 lg:pb-24 gap-10"
        }
      >
        <div className={"w-full lg:w-1/2 gap-10 flex flex-col"}>
          <div>
            <PrismicRichText field={primary.header} />
            <div className={"flex flex-row mt-8 lg:mt-10 items-center gap-6"}>
              <PrismicNextImage
                width={primary.badge.dimensions.width}
                height={primary.badge.dimensions.height}
                field={primary.badge}
              />
              <div>
                <Link
                  icon={ArrowRight}
                  text={primary.view_verification_link_text}
                  link={primary.view_verification_link}
                />
              </div>
            </div>
          </div>

          <div className={"flex flex-col gap-4"}>
            <div className={"flex flex-row gap-2 items-center"}>
              <div className={"flex flex-row gap-4"}>
                <div className={"text-2xl font-normal"}>
                  {primary.offset_amount_text}
                </div>
                <div className={"text-2xl font-medium"}>
                  {primary.offset_percentage}%
                </div>
                <ToggleVisibility />
              </div>
            </div>
            <Progress progress={primary.offset_percentage} />
            <div className={"text-base font-normal"}>
              {primary.offset_amount_info_text}
            </div>
          </div>

          <div className={"flex flex-col gap-4"}>
            <div className={"flex flex-row gap-2 items-center"}>
              <div className={"text-2xl font-normal"}>
                {primary.your_impact_text}
              </div>
              <ToggleVisibility />
            </div>
            <div className={"flex flex-row flex-wrap gap-y-4 gap-x-16"}>
              {items.map(({ impact_text_with_units, small_text }) => {
                return (
                  <div key={impact_text_with_units}>
                    <TextWithSmallUnit text={impact_text_with_units} />
                    <div className={"text-base font-normal"}>{small_text}</div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className=" gap-4 flex flex-row">
            {socialMediaLinks?.slice(0, 3).map(({ text, svg_id, link }) => (
              <PrismicNextLink key={text} field={link} target="_blank">
                <IconButton key={text} icon={socialMediaSvgList[svg_id]} />
              </PrismicNextLink>
            ))}
          </div>
        </div>
        <div className={"hidden lg:block w-full lg:w-1/2 justify-center"}>
          <BlackBlock primary={primary} />
        </div>
      </div>
      <div className={"lg:hidden"}>
        <BlackBlock isSmallScreen primary={primary} />
      </div>
    </section>
  );
};

export default HeroManagePlanVersion;
