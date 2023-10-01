import type { Meta, StoryObj } from "@storybook/react";
import storyMock from "./story-mock.json";
import { HeroSimpleVersion } from "./index";

const meta = {
  title: "HeroSimpleVersion",
  component: HeroSimpleVersion,
  tags: ["autodocs"],
} satisfies Meta<typeof HeroSimpleVersion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    //@ts-ignore
    slice: storyMock,
  },
};
