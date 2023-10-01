import type { Meta, StoryObj } from "@storybook/react";
import storyMock from "./story-mock.json";
import { HeroWithLogosInDarkSectionVersion } from "./index";

const meta = {
  title: "HeroWithLogosInDarkSectionVersion",
  component: HeroWithLogosInDarkSectionVersion,
  tags: ["autodocs"],
} satisfies Meta<typeof HeroWithLogosInDarkSectionVersion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    //@ts-ignore
    slice: storyMock[0],
  },
};

export const WithStats: Story = {
  args: {
    //@ts-ignore
    slice: storyMock[1],
  },
};
