import type { Meta, StoryObj } from "@storybook/react";
import { DiagramBox } from "./diagramBox";
import Image from "next/image";

const meta = {
  component: DiagramBox,
} satisfies Meta<typeof DiagramBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: (
      <Image
        src="/projects/mtg-search-engine/interpreter.drawio.svg"
        alt="Diagram of the interpreter"
      />
    ),
  },
};
