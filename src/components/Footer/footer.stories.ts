import type { Meta, StoryObj } from "@storybook/react";
import { Footer } from "./index";
import mockData from "./story-mock.json";

const meta = {
  title: "Footer",
  component: Footer,
  tags: ["autodocs"],
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    // @ts-ignore
    data: mockData,
  },
};
