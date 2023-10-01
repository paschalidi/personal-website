import type { Meta, StoryObj } from "@storybook/react";
import storyMock from "./story-mock.json";
import { Hero } from "./index";

const meta = {
  title: "Hero",
  component: Hero,
  tags: ["autodocs"],
} satisfies Meta<typeof Hero>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    //@ts-ignore
    slice: storyMock,
  },
};
