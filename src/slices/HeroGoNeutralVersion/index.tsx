"use client";
import { asText, Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicRichText } from "../../components/PrismicRichText";
import { Form, Formik } from "formik";
import { FormInput } from "../../components/Form/FormInput";
import { Button } from "../../components/Button";
import { Website } from "../../components/Icons";
import React, { useState } from "react";
import { PulseLoader } from "react-spinners";
import * as Yup from "yup";
import { FormSelectMenu } from "../../components/Form/FormSelectMenu";
import { SliderBar } from "../../components/SliderBar";
import { TextWithSmallUnit } from "../../components/TextWithSmallUnit";

const items = [
  { value: "Up to 50,000 monthly visitors" },
  { value: "Up to 150,000 monthly visitors" },
  { value: "Up to 250,000 monthly visitors" },
  { value: "Up to 350,000 monthly visitors" },
  { value: "Up to 450,000 monthly visitors" },
];

const Schema = Yup.object().shape({
  url: Yup.string().url("Invalid URL format").required("URL is required"),
});
/**
 * Props for `HeroGoNeutralVersion`.
 */
export type HeroGoNeutralVersionProps =
  SliceComponentProps<Content.HeroGoNeutralVersionSlice>;

enum CalculatorState {
  Initial = "initial",
  Loading = "loading",
  Complete = "Complete",
}

/**
 * Component for "HeroGoNeutralVersion" Slices.
 */
const HeroGoNeutralVersion = ({
  slice,
}: HeroGoNeutralVersionProps): JSX.Element => {
  const [calculatorState, setCalculatorState] = useState<CalculatorState>(
    CalculatorState.Initial,
  );
  const [websiteFootprintData, setWebsiteFootprintData] = useState(null);
  const sleep = async (milliseconds: number) => {
    await new Promise((resolve) => {
      return setTimeout(resolve, milliseconds);
    });
  };
  const handleSubmit = async (values) => {
    setCalculatorState(CalculatorState.Loading);
    await sleep(2000);
    setWebsiteFootprintData({
      url: values.url,
      stats: [
        { top: slice.primary.text_page_size, bottom: "3.5GB" },
        { top: slice.primary.text_page_views, bottom: "~50,000" },
        { top: slice.primary.text_top_visitors, bottom: "Northeast Africa" },
      ],
      co2_production: "52kg CO2",
      examples: [{ example: "= 72 billion bubbles" }],
    });
    setCalculatorState(CalculatorState.Complete);
  };
  const stats = [
    { top: slice.primary.text_page_size, bottom: slice.primary.page_size },
    { top: slice.primary.text_page_views, bottom: slice.primary.page_views },
    {
      top: slice.primary.text_top_visitors,
      bottom: slice.primary.top_visitors,
    },
  ];

  const handleOffsettingSubmission = async () => {};

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className={"pt-20 flex flex-col lg:flex-row xl:gap-x-10"}>
        <div className={"w-full lg:w-7/12 pb-16 lg:pb-36"}>
          <div
            className={"pc flex flex-col gap-y-10 w-full sm:w-5/6 lg:w-full"}
          >
            <div>
              <PrismicRichText field={slice.primary.header_and_text} />
            </div>

            <Formik
              validateOnBlur={false}
              validateOnChange={false}
              validationSchema={Schema}
              initialValues={{ url: "" }}
              onSubmit={handleSubmit}
            >
              <Form className={"flex flex-row gap-4 items-start"}>
                <div className={"flex-grow max-w-[337px]"}>
                  <FormInput
                    name={"url"}
                    placeholder={slice.primary.placeholder}
                  />
                </div>
                <Button type={"submit"} text={slice.primary.button_text} />
              </Form>
            </Formik>
            <div className={"flex flex-row gap-x-4 md:gap-x-6"}>
              <div>
                <TextWithSmallUnit text={slice.primary.text_large_1} />
                <div className={"text-sm md:text-base w-11/12"}>
                  {slice.primary.text_small_1}
                </div>
              </div>
              <div className={"text-5xl self-center"}>=</div>
              <div>
                <div className={"text-5xl md:text-7xl mb-2 w-fit"}>
                  {slice.primary.text_large_2}
                </div>
                <div className={"text-sm md:text-base w-11/12"}>
                  {slice.primary.text_small_2}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={"w-full lg:w-5/12 relative flex"}>
          <div className="lg:flex-grow"></div>
          <div className="w-full lg:ml-auto lg:mr-6 xl:mr-20 px-6 md:px-8 lg:px-12 pt-6 md:pt-8 lg:pt-12 pb-10 bg-neutral-800 flex-col justify-start items-start gap-6 lg:mb-[-40px] lg:max-w-[532px]">
            {calculatorState === CalculatorState.Initial && (
              <div
                className={
                  "flex flex-col h-full justify-between px-4 lg:p-0 gap-4 lg:gap-6"
                }
              >
                <div className="flex flex-row items-center gap-4">
                  <div className="w-6 h-6 py-px justify-center items-center flex">
                    <Website className={"text-white"} />
                  </div>
                  <div className="w-96 text-white text-xl font-normal">
                    {slice.primary.text_for_average_annual_footprint}
                  </div>
                </div>
                <div className="xs:mt-0 flex-row text-left justify-between inline-flex divide-x divide-neutral-700">
                  {stats.map(({ top, bottom }, index) => (
                    <div
                      key={top}
                      className="flex-col justify-start items-start gap-2 lg:inline-flex md:2 px-3 first:pl-0 last:pr-0"
                    >
                      <div className="text-white text-base font-normal">
                        {top}
                      </div>
                      <div className="text-white text-2xl font-normal">
                        {bottom}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="text-white text-xl font-normal">
                  {slice.primary.text_for_production}
                </div>
                <div className="flex-col justify-start items-start gap-4 flex flex-grow">
                  <div className="px-2 py-2.5 border border-red-300 flex-col justify-start items-start gap-2 flex min-w-fit">
                    <div className="justify-start items-center gap-4 lg:inline-flex text-5xl text-red-300">
                      {slice.primary.co2_production}
                    </div>
                  </div>
                  {slice.items.map(({ example }) => (
                    <div
                      key={asText(example)}
                      className="text-red-300 text-2xl font-normal"
                    >
                      <PrismicRichText field={example} />
                    </div>
                  ))}
                </div>

                <div className="opacity-60 text-white text-sm font-normal leading-tight pt-2">
                  {slice.primary.info_text}
                </div>
              </div>
            )}

            {calculatorState === CalculatorState.Loading && (
              <div
                className={"min-h-[700px] pt-32 lg:px-6 xl:px-10 text-center"}
              >
                <PrismicRichText
                  components={{
                    paragraph: ({ children }) => (
                      <p className="text-xl md:text-2xl mb-4 last:mb-0 text-white">
                        {children}
                      </p>
                    ),
                  }}
                  field={slice.primary.loading_text}
                  className={"text-white"}
                />
                <PulseLoader
                  speedMultiplier={0.6}
                  color="#5FE76D"
                  size={30}
                  margin={8}
                  className={"pt-20 pb-8"}
                />
                <div className={"text-base text-white"}>
                  {slice.primary.loading_text_2}
                </div>
              </div>
            )}

            {calculatorState === CalculatorState.Complete && (
              <div
                className={
                  "flex flex-col justify-between h-full lg:p-0 gap-4 lg:gap-6 "
                }
              >
                <div className="flex flex-row items-center gap-4">
                  <div className="w-6 h-6 py-px justify-center items-center flex">
                    <Website className={"text-white"} />
                  </div>
                  <div className="w-96 text-white text-xl font-normal">
                    {websiteFootprintData?.url || ""}
                  </div>
                </div>
                <div className="xs:mt-0 flex-row text-left justify-between inline-flex divide-x divide-neutral-700">
                  {websiteFootprintData.stats.map(({ top, bottom }) => (
                    <div
                      key={top}
                      className="flex-col justify-start items-start gap-2 lg:inline-flex md:2 px-3 first:pl-0 last:pr-0"
                    >
                      <div className="text-white text-base font-normal">
                        {top}
                      </div>
                      <div className="text-white text-2xl font-normal">
                        {bottom}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="w-full grow shrink basis-0 flex-col justify-start items-start flex">
                  <div className="flex-col justify-start items-start gap-4 flex flex-grow">
                    <div className="px-2 py-2.5 border border-red-300 flex-col justify-start items-start gap-2 flex min-w-fit">
                      <div className="justify-start items-center gap-4 lg:inline-flex text-5xl text-red-300">
                        {websiteFootprintData.co2_production}
                      </div>
                    </div>
                    {websiteFootprintData.examples.map(({ example }) => (
                      <div
                        key={example}
                        className="text-red-300 text-2xl font-normal"
                      >
                        {example}
                      </div>
                    ))}
                  </div>
                  <Formik
                    initialValues={{ percentage: 150, plan: "" }}
                    onSubmit={handleOffsettingSubmission}
                  >
                    <Form className={"flex flex-col gap-4 lg:gap-6"}>
                      <div>
                        <div className="pt-4 pb-2 lg:pt-6 lg:pb-4 text-white text-sm font-medium">
                          {slice.primary.text_recommended_plan}
                        </div>
                        <FormSelectMenu options={items} />
                      </div>
                      <div>
                        <SliderBar
                          textTop={slice.primary.text_amount_to_offset}
                        />
                        <PrismicRichText
                          field={slice.primary.text_amount_to_offset_info}
                          components={{
                            paragraph: ({ children }) => (
                              <p className="opacity-60 text-sm text-white">
                                {children}
                              </p>
                            ),
                          }}
                        />
                      </div>
                      <div className={"flex flex-row gap-7 items-center"}>
                        <Button
                          primary={false}
                          type={"submit"}
                          text={slice.primary.offset_button_text}
                        />
                        <div className="text-white text-3xl font-normal">
                          $ 510/year
                        </div>
                      </div>
                    </Form>
                  </Formik>
                </div>

                <div className="w-full opacity-60 text-white text-sm font-normal leading-tight pt-1">
                  {slice.primary.info_text_on_calculated_website}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroGoNeutralVersion;
