import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./index";
import { Leaf } from "../Icons";

const meta = {
  title: "Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    text: "Go Neutral",
  },
};

export const Secondary: Story = {
  args: {
    text: "Go Neutral",
    primary: false,
  },
};

export const WithIconLeft: Story = {
  args: {
    text: "Go Neutral",
    icon: Leaf,
    iconPosition: "left",
    primary: true,
  },
};

export const WithIconRight: Story = {
  args: {
    text: "Go Neutral",
    icon: Leaf,
    primary: true,
  },
};
