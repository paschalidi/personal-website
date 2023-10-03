import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./index";

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
