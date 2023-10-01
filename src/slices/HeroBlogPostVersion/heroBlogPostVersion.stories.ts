import type { Meta, StoryObj } from "@storybook/react";
import storyMock from "./story-mock.json";
import { HeroBlogPostVersion } from "./index";

const meta = {
  title: "HeroBlogPostVersion",
  component: HeroBlogPostVersion,
  tags: ["autodocs"],
} satisfies Meta<typeof HeroBlogPostVersion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    //@ts-ignore
    slice: storyMock,
  },
};
