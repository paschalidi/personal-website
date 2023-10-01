import type { Meta, StoryObj } from "@storybook/react";
import storyMock from "./story-mock.json";
import { TextWithImage } from "./index";

const meta = {
  title: "TextWithImage",
  component: TextWithImage,
  tags: ["autodocs"],
} satisfies Meta<typeof TextWithImage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithButton: Story = {
  args: {
    //@ts-ignore
    slice: storyMock[0],
  },
};
export const DarkDefault: Story = {
  args: {
    //@ts-ignore
    slice: storyMock[1],
  },
};
