import type { Meta, StoryObj } from "@storybook/react";
import { Table } from "./index";
import storyMock from "./story-mock.json";

const meta = {
  title: "Table",
  component: Table,
  tags: ["autodocs"],
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    //@ts-ignore
    slice: storyMock,
  },
};
