import type { Meta, StoryObj } from "@storybook/react";
import storyMock from "./story-mock.json";
import { ClickToActionBanner } from "./index";

const meta = {
  title: "ClickToActionBanner",
  component: ClickToActionBanner,
  tags: ["autodocs"],
} satisfies Meta<typeof ClickToActionBanner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    //@ts-ignore
    slice: storyMock,
  },
};
