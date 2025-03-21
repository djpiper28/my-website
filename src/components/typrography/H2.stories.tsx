import type { Meta, StoryObj } from "@storybook/react";
import { H2 } from "./H2";

const meta = {
  component: H2,
} satisfies Meta<typeof H2>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Lorem ipsum",
  },
};
