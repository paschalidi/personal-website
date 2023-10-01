import type { Meta, StoryObj } from "@storybook/react";
import storyMock from "./story-mock.json";
import { TextWithImageBulkyVersion } from "./index";

const meta = {
  title: "TextWithImageBulkyVersion",
  component: TextWithImageBulkyVersion,
  tags: ["autodocs"],
} satisfies Meta<typeof TextWithImageBulkyVersion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithButton: Story = {
  args: {
    //@ts-ignore
    slice: storyMock,
  },
};
