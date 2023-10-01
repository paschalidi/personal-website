"use client";
import { PrismicNextImage } from "@prismicio/next";
import { Content, isFilled, LinkField, RichTextField } from "@prismicio/client";
import { formatDate } from "../../utlis/formatDate";
import { PrismicRichText } from "../PrismicRichText";
import { Link } from "../Link";
import { ArrowRight } from "../Icons";
import { useResponsive } from "../../hooks/useResponsive";
import { SliceComponentProps } from "@prismicio/react";

interface CardProps {
  image: SliceComponentProps<Content.LatestThreeStoriesSlice>["slice"]["items"][0]["image"]; // TODO solution
  date: string;
  title: RichTextField;
  link: LinkField;
  linkText: string;
}

export const Card = ({ image, date, title, link, linkText }: CardProps) => {
  const { isUntilMd } = useResponsive();

  return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-14">
      {isFilled.image(image) && (
        <div className="w-fit">
          <PrismicNextImage field={isUntilMd ? image.mobile : image} />
        </div>
      )}
      <div className="flex flex-col gap-2 md:w-4/5  justify-center ">
        <div className="w-60 text-neutral-600 text-sm font-normal leading-tight">
          {formatDate(date)}
        </div>
        <div>
          <PrismicRichText field={title} />
          <Link
            className={"mt-2"}
            text={linkText}
            link={link}
            icon={ArrowRight}
          />
        </div>
      </div>
    </div>
  );
};
