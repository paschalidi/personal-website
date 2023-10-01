import React from "react";
import Image from "next/image";
import { IconButton } from "../IconButton";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { FooterDocumentData, Simplify } from "../../../prismicio-types";
import { socialMediaSvgList } from "../../utlis/socialMediaSvgList";
import { isFilled } from "@prismicio/client";

export const Footer = ({ data }: { data: Simplify<FooterDocumentData> }) => {
  const { logo, social_media_list, internal_links, copyright_links } = data;
  return (
    <footer className="w-full bg-zinc-200 pt-16 pb-8 md:pb-12">
      {isFilled.image(logo) && (
        <div className="flex space-x-6 pb-10 md:pb-12 pc">
          <PrismicNextLink field={data.homepage_link}>
            <Image
              src={logo.url}
              alt={logo.alt}
              width={logo.dimensions.width}
              height={logo.dimensions.height}
            />
          </PrismicNextLink>
        </div>
      )}
      <div className="pc">
        <div className="flex flex-col md:flex-row justify-between md:items-center space-y-0 md:space-y-6">
          <div className="flex space-x-4 order-2 md:order-1 md:mt-0 mt-10">
            {social_media_list.map(({ text, svg_id, link }) => {
              return (
                <PrismicNextLink key={text} field={link} target="_blank">
                  <IconButton
                    key={text}
                    primary
                    icon={socialMediaSvgList[svg_id]}
                  />
                </PrismicNextLink>
              );
            })}
          </div>

          <div className="flex flex-col md:flex-row md:space-x-8 order-1 md:order-2 space-y-8 md:space-y-0">
            {internal_links.map(({ link, text }) => {
              return (
                <PrismicNextLink
                  key={text}
                  field={link}
                  className="text-zinc-800 text-base font-normal leading-normal"
                >
                  {text}
                </PrismicNextLink>
              );
            })}
          </div>
        </div>
      </div>
      <div className="w-full h-px bg-neutral-300 my-10 md:my-6"></div>
      <div className="pc">
        <div className="flex flex-col md:flex-row justify-between md:items-center gap-y-10">
          <div className="flex space-x-6 order-2 md:order-1">
            <span className="text-zinc-800 text-sm font-normal leading-tight">
              CarbonLogo © 2023
            </span>
            {copyright_links.map(({ link, text }) => {
              return (
                <PrismicNextLink
                  key={text}
                  field={link}
                  className="text-zinc-800 text-sm font-normal underline leading-tight"
                >
                  {text}
                </PrismicNextLink>
              );
            })}
          </div>
          {isFilled.image(data.badge_icon) && (
            <div className={"order-1 md:order-2"}>
              <PrismicNextImage
                field={data.badge_icon}
                width={data.badge_icon.dimensions.width}
                height={data.badge_icon.dimensions.height}
              />
            </div>
          )}
        </div>
      </div>
    </footer>
  );
};
