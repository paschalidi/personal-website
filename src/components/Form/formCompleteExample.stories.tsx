import type { Meta, StoryObj } from "@storybook/react";

import { FormExample } from "./Example";

const meta = {
  title: "Example Form",
  component: FormExample,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof FormExample>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ShowCase: Story = {
  args: {
    placeholder: "Type here",
    type: "text",
  },
};
