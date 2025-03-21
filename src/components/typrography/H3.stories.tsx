import type { Meta, StoryObj } from "@storybook/react";
import { H3 } from "./H3";

const meta = {
  component: H3,
} satisfies Meta<typeof H3>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Lorem ipsum",
  },
};
