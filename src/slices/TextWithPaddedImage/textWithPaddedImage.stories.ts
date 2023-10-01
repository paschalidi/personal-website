import type { Meta, StoryObj } from "@storybook/react";
import storyMock from "./story-mock.json";
import { TextWithPaddedImage } from "./index";

const meta = {
  title: "TextWithPaddedImage",
  component: TextWithPaddedImage,
  tags: ["autodocs"],
} satisfies Meta<typeof TextWithPaddedImage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    //@ts-ignore
    slice: storyMock[0],
  },
};
export const WithImageOnTheRight: Story = {
  args: {
    //@ts-ignore
    slice: storyMock[1],
  },
};
