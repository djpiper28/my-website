import type { Meta, StoryObj } from "@storybook/react";
import { H3 } from "./H3";
import { H2 } from "./H2";
import { H1 } from "./H1";
import { P } from "./P";

interface Props {
  children: string;
}

function AllHeaders(props: Readonly<Props>) {
  return (
    <div className="flex flex-col gap-5">
      <p>H1:</p>
      <H1>{props.children}</H1>
      <p>H2:</p>
      <H2>{props.children}</H2>
      <p>H3:</p>
      <H3>{props.children}</H3>
      <p>P:</p>
      <P>{props.children}</P>
    </div>
  );
}

const meta = {
  component: AllHeaders,
} satisfies Meta<typeof AllHeaders>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Lorem ipsum",
  },
};
