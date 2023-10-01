import type { Meta, StoryObj } from "@storybook/react";
import storyMock from "./story-mock.json";
import { CommunityLogos } from "./index";

const meta = {
  title: "CommunityLogos",
  component: CommunityLogos,
  tags: ["autodocs"],
} satisfies Meta<typeof CommunityLogos>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    //@ts-ignore
    slice: storyMock[0],
  },
};
export const ManyIcons: Story = {
  args: {
    //@ts-ignore
    slice: storyMock[1],
  },
};
