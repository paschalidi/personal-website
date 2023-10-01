import type { Meta, StoryObj } from "@storybook/react";
import storyMock from "./story-mock.json";
import { HowItWorks } from "./index";

const meta = {
  title: "HowItWorks",
  component: HowItWorks,
  tags: ["autodocs"],
} satisfies Meta<typeof HowItWorks>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    //@ts-ignore
    slice: storyMock,
  },
};
