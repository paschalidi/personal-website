import type { Meta, StoryObj } from "@storybook/react";

import { IconButton } from "./index";
import { LinkedInLogoIcon } from "@radix-ui/react-icons";

const meta = {
  title: "IconButton",
  component: IconButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    icon: LinkedInLogoIcon,
  },
};
export const Secondary: Story = {
  args: {
    primary: false,
    icon: LinkedInLogoIcon,
  },
};

export const Custom: Story = {
  args: {
    primary: true,
    icon: LinkedInLogoIcon,
    iconClassname: "text-blue-500",
  },
};
