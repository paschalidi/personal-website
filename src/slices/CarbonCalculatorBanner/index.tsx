"use client"; // using radix as forms
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "../../components/PrismicRichText";
import { FormInput } from "../../components/Form/FormInput";
import { Button } from "../../components/Button";
import { Leaf } from "./leaf";
import { Form, Formik } from "formik";

/**
 * Props for `WebsiteCalculatorBanner`.
 */
export type WebsiteCalculatorBannerProps =
  SliceComponentProps<Content.CarbonCalculatorBannerSlice>;

/**
 * Component for "WebsiteCalculatorBanner" Slices.
 */
export const CarbonCalculatorBanner = ({
  slice,
}: WebsiteCalculatorBannerProps): JSX.Element => {
  return (
    <section
      className="bg-neutral-900 "
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="pc flex flex-col lg:flex-row justify-between py-10 bg-neutral-900">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex items-center min-w-[72px]">
            <PrismicNextImage
              width={72}
              height={72}
              field={slice.primary.image}
            />
          </div>
          <div className="flex items-center">
            <div className="mb-8 lg:mb-0">
              <PrismicRichText
                field={slice.primary.paragraph}
                components={{
                  paragraph: ({ children }) => (
                    <p className="text-white lg:text-3xl text-xl">{children}</p>
                  ),
                }}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row lg:items-center gap-3.5 lg:ml-14">
          <div className={"w-80"}>
            <Formik
              initialValues={{ calculate: "" }}
              onSubmit={() => {
                // todo here we handle the form
                console.log("submit");
              }}
            >
              <Form>
                <FormInput
                  name="calculate"
                  placeholder={slice.primary.form_placeholder}
                  type="input"
                />
              </Form>
            </Formik>
          </div>
          <Button text={slice.primary.link_text} primary={false} />
        </div>
      </div>
      <div className="relative">
        <div className="left-0 md:left-6 top-[-27px] absolute w-10 h-14 origin-top-left">
          <Leaf />
        </div>
      </div>
    </section>
  );
};

export default CarbonCalculatorBanner;
