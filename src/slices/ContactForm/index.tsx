"use client"; //because of formik
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { Form, Formik } from "formik";
import React, { useState } from "react";
import { PrismicRichText } from "../../components/PrismicRichText";
import * as Yup from "yup";
import { FormInput } from "../../components/Form/FormInput";
import { Button } from "../../components/Button";
import {
  ArrowRightIcon,
  EnvelopeClosedIcon,
  GlobeIcon,
  InstagramLogoIcon,
} from "@radix-ui/react-icons";
import { ErrorBoundary } from "react-error-boundary";

const ContactFormSchema = Yup.object().shape({
  first_name: Yup.string()
    .min(2, "Name is too short, try a name with at least 2 characters")
    .max(50, "Name is too long, try a name with less than 50 characters")
    .required("Required"),
  last_name: Yup.string()
    .min(2, "Last name is too short, try a name with at least 2 characters")
    .max(50, "Last name is too long, try a name with less than 50 characters")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  message: Yup.string()
    .min(
      20,
      "Message is too short,try writing a message with at least 20 characters ",
    )
    .required("Required"),
});

/**
 * Props for `ContactForm`.
 */
export type ContactFormProps = SliceComponentProps<Content.ContactFormSlice>;

/**
 * Component for "ContactForm" Slices.
 */
const ContactForm = ({ slice }: ContactFormProps): JSX.Element => {
  const [isFormLoading, setIsFormLoading] = useState(false);
  const [hasError, setHasError] = useState(null);
  const [isFormSubmissionSuccess, setIsFormSubmissionSuccess] = useState(false);
  return (
    <ErrorBoundary fallback={null}>
      <section
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
      >
        <div className={"mt-45"}>
          <div
            className={"flex flex-col w-full max-w-xl pt-10 md:pt-20 m-auto"}
          >
            <div className="mb-6 flex flex-row ">
              <PrismicRichText field={slice.primary.form_header} />
            </div>

            <Formik
              validationSchema={ContactFormSchema}
              validateOnBlur={false}
              validateOnChange={false}
              initialValues={{
                first_name: "",
                last_name: "",
                email: "",
                message: "",
              }}
              onSubmit={async (values, formikHelpers) => {
                try {
                  setIsFormLoading(true);
                  setIsFormSubmissionSuccess(false);
                  setHasError(false);
                  await fetch("/api/email", {
                    method: "POST",
                    body: JSON.stringify(values),
                  });
                  formikHelpers.resetForm();
                  setIsFormSubmissionSuccess(true);
                } catch (e) {
                  setHasError(true);
                } finally {
                  setIsFormLoading(false);
                }
              }}
            >
              <Form className="flex flex-col gap-6 max-w-[548px]">
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="w-full lg:w-1/2 flex flex-col">
                    <FormInput
                      name={slice.items[0].field_id}
                      placeholder={slice.items[0].placeholder}
                      type={"input"}
                    />
                  </div>

                  <div className="w-full lg:w-1/2 flex flex-col">
                    <FormInput
                      name={slice.items[1].field_id}
                      placeholder={slice.items[1].placeholder}
                      type={"input"}
                    />
                  </div>
                </div>

                <div className={"flex flex-col gap-6 w-full "}>
                  {slice.items.slice(2).map(({ placeholder, field_id }) => (
                    <div key={field_id} className={"w-full"}>
                      <FormInput
                        name={field_id}
                        placeholder={placeholder}
                        type={field_id !== "message" ? "input" : "textarea"}
                      />
                    </div>
                  ))}
                </div>
                {hasError && (
                  <div className={"text-red-400"}>
                    {slice.primary.error_message}
                  </div>
                )}
                {isFormSubmissionSuccess && (
                  <div className={"text"}>{slice.primary.success_message}</div>
                )}
                <Button
                  disabled={isFormLoading}
                  type="submit"
                  text={slice.primary.button_text}
                  icon={ArrowRightIcon}
                />
              </Form>
            </Formik>

            <div className="mt-20 mb-28 text-zinc-600 flex flex-col gap-2">
              <div className={"flex flex-row gap-3 items-center"}>
                <InstagramLogoIcon />
                <PrismicRichText field={slice.primary.instageam} />
              </div>
              <div className={"flex flex-row gap-3 items-center"}>
                <EnvelopeClosedIcon />
                <PrismicRichText field={slice.primary.email} />
              </div>
              <div className={"flex flex-row gap-3 items-center"}>
                <GlobeIcon />
                <PrismicRichText field={slice.primary.location} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </ErrorBoundary>
  );
};

export default ContactForm;
