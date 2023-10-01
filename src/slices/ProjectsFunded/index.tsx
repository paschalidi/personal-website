import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicRichText } from "../../components/PrismicRichText";
import { PrismicNextImage } from "@prismicio/next";
import { Link } from "../../components/Link";
import { Fragment } from "react";
import { ArrowRight } from "../../components/Icons";
import { ToggleVisibility } from "../../components/ToggleVisibility";

/**
 * Props for `ProjectsFunded`.
 */
export type ProjectsFundedProps =
  SliceComponentProps<Content.ProjectsFundedSlice>;

/**
 * Component for "ProjectsFunded" Slices.
 */
const ProjectsFunded = ({ slice }: ProjectsFundedProps): JSX.Element => {
  const isDefaultVariation = slice.variation === "default";
  const isManagePlanVariation = slice.variation === "managePlanVersion";
  return (
    <section
      className={"pc"}
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className={"py-16 lg:py-24"}>
        <PrismicRichText field={slice.primary.header} />
        {isManagePlanVariation && (
          <div className={"flex flex-row gap-2"}>
            <div className={"text-neutral-700 text-lg font-normal"}>
              {slice.primary.publicity_text}
            </div>
            <ToggleVisibility />
          </div>
        )}
        <div
          className={"pt-10 lg:pt-16 grid grid-cols-1 lg:grid-cols-2 lg:gap-4"}
        >
          {slice.items.map(
            (
              {
                project_image,
                project_header,
                project_link,
                project_link_text,
                small_text,
              },
              index,
            ) => (
              <Fragment key={JSON.stringify(project_link)}>
                <div className={"flex flex-row items-center"}>
                  <div className={"w-24 h-24 md:w-fit md:h-fit"}>
                    <PrismicNextImage field={project_image} />
                  </div>
                  <div className={"pl-6 flex flex-col gap-2"}>
                    <div
                      className={
                        "text-neutral-600 text-xs lg:text-sm font-normal"
                      }
                    >
                      {small_text}
                    </div>
                    <div className={"text-neutral-900 text-2xl lg:text-4xl "}>
                      {project_header}
                    </div>
                    <div className="mt-2">
                      <Link
                        text={project_link_text}
                        link={project_link}
                        icon={ArrowRight}
                      />
                    </div>
                  </div>
                </div>
                {((index + 1) % 2 === 0 ||
                  index === slice.items.length - 1) && (
                  <div className="hidden lg:block col-span-2 my-8">
                    <hr className="bg-zinc-200" />
                  </div>
                )}
                {index !== slice.items.length - 1 && (
                  <div className="lg:hidden my-8">
                    <hr className="bg-zinc-200" />
                  </div>
                )}
              </Fragment>
            ),
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectsFunded;
