import type { Meta, StoryObj } from "@storybook/react";
import storyMock from "./story-mock.json";
import { HeroWithFeaturedBlogPostVersion } from "./index";

const meta = {
  title: "HeroWithFeaturedBlogPostVersion",
  component: HeroWithFeaturedBlogPostVersion,
  tags: ["autodocs"],
} satisfies Meta<typeof HeroWithFeaturedBlogPostVersion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    // @ts-ignore
    slice: storyMock,
  },
};
