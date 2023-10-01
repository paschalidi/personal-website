import type { Meta, StoryObj } from "@storybook/react";
import storyMock from "./story-mock.json";
import { Benefits } from "./index";

const meta = {
  title: "Benefits",
  component: Benefits,
  tags: ["autodocs"],
} satisfies Meta<typeof Benefits>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    //@ts-ignore
    slice: storyMock,
  },
};
