"use client";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import * as Tabs from "@radix-ui/react-tabs";
import { PrismicRichText } from "../../components/PrismicRichText";
import { PrismicNextImage } from "@prismicio/next";
import { ButtonPrismicLink } from "../../components/Button";
import clsx from "clsx";
import { useState } from "react";
import { ArrowRight } from "../../components/Icons";
import { deriveTabName } from "../../utlis/deriveTabName";
import { Link } from "../../components/Link";

/**
 * Props for `ProjectsOnTabs`.
 */
export type ProjectsOnTabsProps =
  SliceComponentProps<Content.ProjectsOnTabsSlice>;

/**
 * Component for "ProjectsOnTabs" Slices.
 */
export const ProjectsOnTabs = ({ slice }: ProjectsOnTabsProps): JSX.Element => {
  const defaultTab = deriveTabName(0);
  const [activeTab, setActiveTab] = useState<string>(defaultTab);

  return (
    <section
      className="bg-neutral-50"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className={"pc pt-16 pb-12 md:py-16"}>
        <PrismicRichText field={slice.primary.header} />
      </div>

      <Tabs.Root
        className="pb-16 md:pb-0"
        defaultValue={defaultTab}
        onValueChange={(activeTab) => setActiveTab(activeTab)}
      >
        <Tabs.List
          className="border-b"
          aria-label={slice.primary.header[0].text}
        >
          <div className="pc flex gap-6 flex-row no-scrollbar overflow-x-auto whitespace-nowrap">
            {slice.items.map(({ project_title }, index) => {
              const tab = deriveTabName(index);
              return (
                <>
                  <Tabs.Trigger
                    key={JSON.stringify(project_title)}
                    className="flex flex-row gap-6 items-center justify-left text-xl md:text-2xl opacity-30 data-[state=active]:opacity-100 outline-none cursor-pointer"
                    value={deriveTabName(index)}
                  >
                    <div>
                      <div className={"pb-3 md:pb-[14px] text-left"}>
                        <PrismicRichText field={project_title} />
                      </div>
                      {tab === activeTab && (
                        <hr
                          className={clsx("w-[50px] border-[1px] border-black")}
                        />
                      )}
                    </div>
                  </Tabs.Trigger>
                </>
              );
            })}
          </div>
        </Tabs.List>

        <div className="pc flex flex-col md:flex-row">
          <div className="w-full md:w-3/5 md:mb-24">
            {slice.items.map(
              (
                { project_description, project_link_text, project_link },
                index,
              ) => (
                <Tabs.Content
                  key={JSON.stringify(project_description)}
                  className="grow outline-none"
                  value={deriveTabName(index)}
                >
                  <div className="flex flex-col">
                    <div className="md:w-4/5 pb-8 pt-6 md:pt-24">
                      <PrismicRichText field={project_description} />
                    </div>
                    <div className={"flex flex-row gap-4"}>
                      <ButtonPrismicLink
                        link={project_link}
                        iconPosition={"right"}
                        text={project_link_text}
                        icon={ArrowRight}
                      />
                      {slice.primary.view_all_link_text &&
                        slice.primary.view_all_link && (
                          <Link
                            text={slice.primary.view_all_link_text}
                            link={slice.primary.view_all_link}
                            iconPosition={"right"}
                            icon={ArrowRight}
                          />
                        )}
                    </div>
                  </div>
                </Tabs.Content>
              ),
            )}
          </div>
          <div className="w-full md:w-3/5">
            {slice.items.map(
              ({ project_description, project_image }, index) => (
                <Tabs.Content
                  key={JSON.stringify(project_description)}
                  value={`tab${index}`}
                >
                  <div className="flex flex-row pt-6 md:pt-28 relative">
                    <PrismicNextImage
                      className={"md:mx-auto block md:mb-[-40px]"}
                      width={488}
                      height={488}
                      field={project_image}
                    />
                  </div>
                </Tabs.Content>
              ),
            )}
          </div>
        </div>
      </Tabs.Root>
      <div className="pc flex py-16 lg:py-24 bg-neutral-800 flex-col justify-start items-center gap-14 divider-x">
        <div className="flex flex-col md:flex-row justify-start items-start gap-16 md:gap-20">
          <div className="flex justify-start items-center gap-10">
            <div className="w-24 h-24 justify-center items-center flex">
              <PrismicNextImage field={slice.primary.banner_logo_1} />
            </div>
            <div className="w-px h-16 bg-neutral-700" />
            <div className="w-24 h-24 justify-center items-center flex">
              <PrismicNextImage field={slice.primary.banner_logo_2} />
            </div>
          </div>
          <div className="text-3xl text-white">
            <PrismicRichText field={slice.primary.banner_text} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsOnTabs;
