import type { Meta, StoryObj } from "@storybook/react";
import storyMock from "./story-mock.json";
import { CarbonCalculatorBanner } from "./index";

const meta = {
  title: "CarbonCalculatorBanner",
  component: CarbonCalculatorBanner,
  tags: ["autodocs"],
} satisfies Meta<typeof CarbonCalculatorBanner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    //@ts-ignore
    slice: storyMock,
  },
};
