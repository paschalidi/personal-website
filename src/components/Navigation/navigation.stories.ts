import type { Meta, StoryObj } from "@storybook/react";
import { SSRNavigation } from "./index";
import mockData from "./story-mock.json";

const meta = {
  title: "Navigation",
  component: SSRNavigation,
  parameters: {
    nextjs: { appDirectory: true },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SSRNavigation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    // @ts-ignore
    data: mockData,
  },
};
