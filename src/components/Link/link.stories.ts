import type { Meta, StoryObj } from "@storybook/react";

import { Link } from "./index";
import { Leaf } from "../Icons";

const meta = {
  title: "Link",
  component: Link,
  parameters: {
    layout: "centered",
  },
  args: {
    link: {
      id: "ZOVzwhIAACYA2toN",
      type: "page",
      tags: [],
      lang: "en-us",
      slug: "blog",
      uid: "blog",
      url: "/",
      link_type: "Document",
      isBroken: false,
    },
    text: "Go Neutral",
    iconPosition: "right",
    size: "medium",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
  },
};

export const WithIcon: Story = {
  args: {
    icon: Leaf,
  },
};
