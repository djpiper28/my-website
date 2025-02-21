import { ReactNode } from "react";

interface Props {
  children: string | ReactNode;
}

export function P(props: Readonly<Props>) {
  return <p className="text-lg">{props.children}</p>;
}
