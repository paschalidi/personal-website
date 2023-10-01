import type { Meta, StoryObj } from "@storybook/react";
import { Navigation } from "./index";
import mockData from "./story-mock.json";

const meta = {
  title: "Navigation",
  component: Navigation,
  parameters: {
    nextjs: { appDirectory: true },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Navigation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    // @ts-ignore
    data: mockData,
  },
};
