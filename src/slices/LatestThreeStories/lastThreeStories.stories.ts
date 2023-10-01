import type { Meta, StoryObj } from "@storybook/react";
import storyMock from "./story-mock.json";
import { LatestThreeStories } from "./index";

const meta = {
  title: "LatestThreeStories",
  component: LatestThreeStories,
  tags: ["autodocs"],
} satisfies Meta<typeof LatestThreeStories>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    //@ts-ignore
    slice: storyMock,
  },
};
