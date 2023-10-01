import type { Meta, StoryObj } from "@storybook/react";

import { IconButton } from "./index";
import { SocialFacebook } from "../Icons/SocialFacebook";

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
    icon: <SocialFacebook className="text-white" />,
  },
};
export const Secondary: Story = {
  args: {
    primary: false,
    icon: <SocialFacebook className="text-black" />,
  },
};

export const Custom: Story = {
  args: {
    primary: true,
    icon: <SocialFacebook className="text-green-400" />,
  },
};
