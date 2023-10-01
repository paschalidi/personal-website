import type { Meta, StoryObj } from "@storybook/react";
import storyMock from "./story-mock.json";
import { ProjectsOnTabs } from "./index";

const meta = {
  title: "ProjectsOnTabs",
  component: ProjectsOnTabs,
  tags: ["autodocs"],
} satisfies Meta<typeof ProjectsOnTabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    //@ts-ignore
    slice: storyMock,
  },
};
