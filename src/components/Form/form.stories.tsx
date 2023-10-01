import type { Meta, StoryObj } from "@storybook/react";

import { FormInput } from "./FormInput";
import { Form, Formik } from "formik";
import * as Yup from "yup";

const meta = {
  title: "Input",
  component: FormInput,
  decorators: [
    (Story) => (
      <Formik
        validationSchema={Yup.object().shape({
          example: Yup.string().required("Required"),
        })}
        initialValues={{ example: "" }}
        onSubmit={() => {
          console.log("submit");
        }}
      >
        <Form>{Story()}</Form>
      </Formik>
    ),
  ],
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof FormInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    placeholder: "Type here",
    name: "example",
  },
};
