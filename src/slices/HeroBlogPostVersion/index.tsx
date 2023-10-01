"use client";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "../../components/PrismicRichText";
import { BlogBounded } from "../../components/BlogBounded";
import { formatDate } from "../../utlis/formatDate";
import { IconButton } from "../../components/IconButton";
import React from "react";
import { socialMediaSvgList } from "../../utlis/socialMediaSvgList";
import { useResponsive } from "../../hooks/useResponsive";

/**
 * Props for `HeroBlogVersion`.
 */
export type HeroBlogVersionProps =
  SliceComponentProps<Content.HeroBlogVersionSlice>;

/**
 * Component for "HeroBlogVersion" Slices.
 */
export const HeroBlogPostVersion = ({
  slice,
}: HeroBlogVersionProps): JSX.Element => {
  const { isUntilMd, isUntilSm } = useResponsive();
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicNextImage
        field={isUntilMd ? slice.primary.image.untiMd : slice.primary.image}
      />
      <BlogBounded className="pt-12 lg:pt-32">
        <div className={"mb-6"}>{formatDate(slice.primary.blog_date)}</div>
        <PrismicRichText field={slice.primary.blog_title} />
        <div className={"flex flex-row gap-4"}>
          {slice.items.map(({ social_media_link, svg_id }, index) => {
            return (
              <PrismicNextLink
                key={svg_id}
                field={social_media_link}
                target="_blank"
              >
                <IconButton primary icon={socialMediaSvgList[svg_id]} />
              </PrismicNextLink>
            );
          })}
        </div>
      </BlogBounded>
    </section>
  );
};

export default HeroBlogPostVersion;
