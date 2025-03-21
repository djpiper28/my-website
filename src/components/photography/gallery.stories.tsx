import type { Meta, StoryObj } from "@storybook/react";
import { Gallery } from "./gallery";

const meta = {
  component: Gallery,
} satisfies Meta<typeof Gallery>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    images: [
      {
        src: "photography-portfolio/beee.jpeg",
        alt: "test image",
      },
      {
        src: "photography-portfolio/swan.jpg",
        alt: "test image",
      },
      ...Array(100).fill({
        src: "photography-portfolio/geese.jpg",
        alt: "test",
      }),
    ],
  },
};
