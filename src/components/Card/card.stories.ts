import type { Meta, StoryObj } from "@storybook/react";

import { Card } from "./index";
import storyMock from "./story-mock.json";

const meta = {
  title: "Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  // @ts-ignore
  args: storyMock,
};
